document.addEventListener('DOMContentLoaded', () => {
    /* ---------- THEME PICKER ---------- */
    // Start with default theme (light)
    let isAltTheme = false;
  
    /* ---------- ELEMENTS ---------- */
    const cursorDot = document.querySelector('.cursor-dot');
  
    /* ---------- CUSTOM CURSOR ---------- */
    document.addEventListener('mousemove', e => {
      cursorDot.style.top  = `${e.clientY}px`;
      cursorDot.style.left = `${e.clientX}px`;
    });

    /* ---------- CLICK/THEME TOGGLE + PULSE ---------- */
    document.addEventListener('click', () => {
      // Toggle theme
      isAltTheme = !isAltTheme;
      if (isAltTheme) {
        document.body.classList.add('theme-alt');
      } else {
        document.body.classList.remove('theme-alt');
      }
      // Pulse effect
      cursorDot.classList.add('pulse');
      setTimeout(() => cursorDot.classList.remove('pulse'), 300);
    });
  
    /* ---------- hiddenhref LINKS ---------- */
    document.querySelectorAll('a[hiddenhref]').forEach(a =>
      a.addEventListener('click', e => {
        e.preventDefault();
        const url = a.getAttribute('hiddenhref');
        if (url) window.location.href = url;
      })
    );
  });
  
  /* cursor fade when outside window */
  document.addEventListener('mouseenter', () => cursorDot.style.opacity = 1);
  document.addEventListener('mouseleave', () => cursorDot.style.opacity = 0);
  