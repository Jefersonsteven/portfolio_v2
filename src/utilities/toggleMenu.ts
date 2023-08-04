export const toggleMenu = (menu: HTMLElement) => {
  if (menu !== null) {
    if (menu?.classList?.contains('open')) {
      menu.classList.remove('open')
    } else {
      menu?.classList.add('open')
    }
  }
}
