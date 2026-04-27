/* ==================== SISTEMA DE SONIDOS ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const soundHover = document.getElementById('sound-hover');
  const soundClick = document.getElementById('sound-click');
  const soundPageLoad = document.getElementById('sound-page-load');
  const soundToggle = document.getElementById('sound-toggle');
  const soundIcon = document.getElementById('sound-icon');
  
  let soundEnabled = true;
  
  // Reproducir sonido de carga de página
  if (soundPageLoad && soundEnabled) {
    soundPageLoad.volume = 0.3;
    soundPageLoad.play().catch(() => {});
  }
  
  // Toggle de sonido
  soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
    soundToggle.setAttribute('aria-label', soundEnabled ? 'Desactivar sonidos' : 'Activar sonidos');
  });
  
  // Sonidos en enlaces y botones
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (soundEnabled && soundHover) {
        soundHover.currentTime = 0;
        soundHover.volume = 0.4;
        soundHover.play().catch(() => {});
      }
    });
    
    el.addEventListener('click', () => {
      if (soundEnabled && soundClick) {
        soundClick.currentTime = 0;
        soundClick.volume = 0.6;
        soundClick.play().catch(() => {});
      }
    });
  });
});