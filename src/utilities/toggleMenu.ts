export const toggleMenu = (menu: HTMLElement) => {
  if (menu !== null && window.innerWidth < 1130) {
    if (menu?.classList?.contains('open')) {
      menu.classList.remove('open')
    } else {
      menu?.classList.add('open')
    }
  }
}
