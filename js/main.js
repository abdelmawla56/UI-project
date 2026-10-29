document.addEventListener('DOMContentLoaded', () => {
  initShortcuts();
  initModals();
  initTabs('[data-stage-tab]', '[data-stage-column]');
  initTabPanes('[data-detail-tab]', '[data-detail-pane]');
  initAuthToggle();
  initTabPanes('[data-settings-tab]', '[data-settings-section]');
  initFormPreview();
});

function initShortcuts() {
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const input = document.querySelector('input[type="search"], input[placeholder*="Search"]');
      if (input) {
        input.focus();
        input.select();
      }
    }
    if (e.key === 'Escape') {
      document.querySelectorAll('.rak-modal-container').forEach(m => m.classList.add('hidden'));
      document.body.classList.remove('overflow-hidden');
    }
  });
}

function initModals() {
  document.querySelectorAll('[data-modal-target]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById(trigger.getAttribute('data-modal-target'));
      if (modal) {
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        const focusable = modal.querySelector('button, [href], input, select, textarea');
        if (focusable) focusable.focus();
      }
    });
  });

  document.querySelectorAll('[data-modal-close], .rak-modal-backdrop').forEach(el => {
    el.addEventListener('click', () => {
      const modal = el.closest('.rak-modal-container');
      if (modal) {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  });
}

function initTabs(buttonSelector, targetSelector) {
  const buttons = document.querySelectorAll(buttonSelector);
  const targets = document.querySelectorAll(targetSelector);
  if (!buttons.length || !targets.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const stage = btn.getAttribute('data-stage-tab');
      buttons.forEach(b => {
        const isCurrent = b === btn;
        b.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
        b.className = isCurrent 
          ? 'px-3 py-1.5 rounded-xl text-xs font-bold bg-[#1C2541] text-[#00F0FF] border border-[#00B4D8] shrink-0'
          : 'px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#131B2E] text-[#8D99AE] border border-[#232F55] shrink-0';
      });

      targets.forEach(target => {
        const targetStage = target.getAttribute('data-stage-column');
        target.classList.toggle('hidden', stage !== 'all' && targetStage !== stage);
      });
    });
  });
}

function initTabPanes(tabSelector, paneSelector) {
  const tabs = document.querySelectorAll(tabSelector);
  const panes = document.querySelectorAll(paneSelector);
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute(tabs[0].hasAttribute('data-detail-tab') ? 'data-detail-tab' : 'data-settings-tab');

      tabs.forEach(t => {
        const active = t === tab;
        t.setAttribute('aria-selected', active ? 'true' : 'false');
        if (t.classList.contains('border-b-2')) {
          t.className = active 
            ? 'pb-3 text-sm font-bold border-b-2 text-[#00F0FF] border-[#00B4D8] transition-all'
            : 'pb-3 text-sm font-semibold border-b-2 text-[#8D99AE] border-transparent hover:text-white transition-all';
        } else {
          t.className = active
            ? 'px-5 py-2 rounded-lg text-xs font-bold bg-[#1C2541] text-[#00F0FF] border border-[#00B4D8] shadow-glow-cyan-subtle transition-all'
            : 'px-5 py-2 rounded-lg text-xs font-semibold text-[#8D99AE] hover:text-white border border-transparent transition-all';
        }
      });

      panes.forEach(pane => {
        pane.classList.toggle('hidden', pane.id !== targetId);
      });
    });
  });
}

function initAuthToggle() {
  const buttons = document.querySelectorAll('[data-auth-tab]');
  const loginForm = document.getElementById('login-form-container');
  const registerForm = document.getElementById('register-form-container');
  if (!buttons.length || !loginForm || !registerForm) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-auth-tab');
      buttons.forEach(b => {
        const active = b === btn;
        b.setAttribute('aria-selected', active ? 'true' : 'false');
        b.className = active
          ? 'py-2 text-xs font-bold rounded-lg bg-[#00B4D8] text-[#0B132B] shadow-glow-cyan transition-all'
          : 'py-2 text-xs font-semibold rounded-lg text-[#8D99AE] hover:text-white transition-all';
      });

      loginForm.classList.toggle('hidden', mode !== 'login');
      registerForm.classList.toggle('hidden', mode === 'login');
    });
  });
}

function initFormPreview() {
  const map = [
    { input: 'input-company', preview: 'preview-company', fallback: 'Company Name' },
    { input: 'input-role', preview: 'preview-role', fallback: 'Role Title' },
    { input: 'input-salary', preview: 'preview-salary', fallback: 'EGP --,--- / mo' }
  ];

  map.forEach(({ input, preview, fallback }) => {
    const inEl = document.getElementById(input);
    const prevEl = document.getElementById(preview);
    if (inEl && prevEl) {
      inEl.addEventListener('input', () => {
        prevEl.textContent = inEl.value.trim() || fallback;
      });
    }
  });

  const stageSelect = document.getElementById('input-stage');
  const previewStage = document.getElementById('preview-stage');
  if (stageSelect && previewStage) {
    const colors = {
      'Saved': 'bg-[#3A86EF]/15 text-[#3A86EF] border-[#3A86EF]/30',
      'Applied': 'bg-[#3A86EF]/15 text-[#3A86EF] border-[#3A86EF]/30',
      'Interviewing': 'bg-[#FFB703]/15 text-[#FFB703] border-[#FFB703]/30',
      'Offered': 'bg-[#06D6A0]/15 text-[#06D6A0] border-[#06D6A0]/30',
      'Closed': 'bg-[#EF476F]/15 text-[#EF476F] border-[#EF476F]/30'
    };
    stageSelect.addEventListener('change', () => {
      const val = stageSelect.value;
      previewStage.textContent = val;
      previewStage.className = `px-2.5 py-1 text-xs font-semibold rounded-full border ${colors[val] || colors['Applied']}`;
    });
  }
}

window.showToast = function(msg, type = 'success') {
  let container = document.getElementById('rak-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'rak-toast-container';
    container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const border = type === 'success' ? 'border-[#06D6A0]' : 'border-[#00B4D8]';
  const dot = type === 'success' ? 'bg-[#06D6A0]' : 'bg-[#00B4D8]';

  toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 bg-[#131B2E] border ${border} rounded-xl shadow-card text-white text-sm transition-all duration-300`;
  toast.innerHTML = `
    <span class="w-2.5 h-2.5 rounded-full ${dot}"></span>
    <span>${msg}</span>
    <button onclick="this.parentElement.remove()" class="ml-2 text-[#8D99AE] hover:text-white text-xs" aria-label="Close">✕</button>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};
