const TRACK_BG = 'red';
const THUMB_BG = 'red';

// sets content's display type to `flow-root` to suppress margin collapsing
const SCROLLBAR_STYLE = `
[data-scrollbar] {
  display: block;
  position: relative;
}

.scroll-content {
  display: flow-root;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

.scrollbar-track {
  position: absolute;
  opacity: 0;
  z-index: 1;
  background: ${TRACK_BG};
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: opacity 0.5s 0.5s ease-out;
          transition: opacity 0.5s 0.5s ease-out;
}
.scrollbar-track.show,
.scrollbar-track:hover {
  opacity: 1;
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}

.scrollbar-track-x {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
}
.scrollbar-track-y {
  top: 0;
  right: 0;
  width: 8px;
  height: 100%;
}
.scrollbar-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: ${THUMB_BG};
  border-radius: 4px;
}
`;

const STYLE_ID = 'smooth-scrollbar-style';
let isStyleAttached = false;

export function attachStyle() {
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
