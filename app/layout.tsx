/* ===== TOKENS NECESARIOS PARA EL FONDO CELESTETITO ===== */
:root{
  /* si ya los tienes, puedes dejar los demás igual; lo importante son estos: */
  --bg:      theme('colors.neutralx.bg');
  --celeste: theme('colors.brand.celeste');
  --text:    theme('colors.neutralx.text');
}

/* ===== FONDO CELESTE SUAVE (igual al que te gustó) ===== */
html, body { scroll-behavior: smooth; }

body{
  background:
    radial-gradient(1000px 520px at 85% -10%,
      color-mix(in srgb, var(--celeste) 28%, #ffffff 72%) 0%,
      transparent 60%
    ),
    radial-gradient(800px 420px at -10% 0%,
      #F2F7FB 0%,
      transparent 58%
    ),
    var(--bg) !important;
  color: var(--text);
}
