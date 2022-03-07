export function openPopup(popups) {
    popups.classList.add('popup_opened')
    document.addEventListener('keydown', closeByEscape);
  }