/* Catcuri LMS — Shared JS */

document.addEventListener('DOMContentLoaded', () => {
  // Dropdown toggle
  document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdown = trigger.closest('.dropdown');
      document.querySelectorAll('.dropdown.open').forEach(d => {
        if (d !== dropdown) d.classList.remove('open');
      });
      dropdown.classList.toggle('open');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
  });

  // Tab switching
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    tabGroup.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        tabGroup.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.tab;
        if (target) {
          const container = tabGroup.closest('.tab-container') || tabGroup.parentElement;
          container.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.toggle('hidden', pane.id !== target);
          });
        }
      });
    });
  });

  // Sidebar toggle
  const sidebarToggle = document.getElementById('sidebar-toggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      document.querySelector('.sidebar')?.classList.toggle('collapsed');
      document.querySelector('.dashboard-main')?.classList.toggle('expanded');
    });
  }

  // Quiz answer selection
  document.querySelectorAll('.quiz-answer').forEach(answer => {
    answer.addEventListener('click', () => {
      const parent = answer.closest('.quiz-answers');
      const isRadio = parent.dataset.type !== 'MR';
      if (isRadio) {
        parent.querySelectorAll('.quiz-answer').forEach(a => a.classList.remove('selected'));
      }
      answer.classList.toggle('selected');
    });
  });

  // Form validation visual
  document.querySelectorAll('.form-input[required]').forEach(input => {
    input.addEventListener('blur', () => {
      if (!input.value.trim()) {
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });
  });
});
