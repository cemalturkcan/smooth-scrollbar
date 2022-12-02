const STYLE_ID = 'smooth-scrollbar-style';
let isStyleAttached = false;

export function attachStyle(style: string) {
  const styleEl = document.createElement('style');
  styleEl.id = STYLE_ID;
  styleEl.textContent = style;
  if (document.head) {
    document.head.appendChild(styleEl);
  }
  isStyleAttached = true;
}

export function detachStyle() {
  if (!isStyleAttached || typeof window === 'undefined') {
    return;
  }

  const styleEl = document.getElementById(STYLE_ID);

  if (!styleEl || !styleEl.parentNode) {
    return;
  }

  styleEl.parentNode.removeChild(styleEl);

  isStyleAttached = false;
}
