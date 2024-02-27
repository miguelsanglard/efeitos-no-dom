import outsideClick from "./outsideclick.js"
export default function initMenuMobile() {

  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const eventos = ['click', 'toutchstart']
  if (menuButton) {
    function openMenu(event) {
      menuButton.classList.toggle('active')
      menuList.classList.toggle('active')
      outsideClick(menuList, eventos, () => {
        menuButton.classList.remove('active')
        menuList.classList.remove('active')
      })

    }

    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu)
    })
    menuButton.addEventListener('click', openMenu);
  }
}