const isMobile =
  /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
    navigator.userAgent
  );

class BurgerMenu {
  constructor(menuElement, openingClassSelector) {
    this._menuElement = menuElement;
    this._openingClassSelector = openingClassSelector;
    this._isActive = false;
    this._isOpen = false;
  }

  isActive() {
    this._isActive = window.innerWidth <= 992;
  }

  setHeightToMenu() {
    if (isMobile) this._menuElement.style.height = window.innerHeight;
  }

  isOpen() {
    return this._isOpen;
  }

  toggleMenu() {
    if (!this.isActive) return false;
    if (this._isOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
      this._freezeMenuToPage();
    }
  }

  _openMenu() {
    this._isOpen = true;
    console.log(this._openingClassSelector);
    this._menuElement.classList.add(this._openingClassSelector);
  }

  _closeMenu() {
    this._isOpen = false;
    this._menuElement.classList.remove(this._openingClassSelector);
  }

  _freezeMenuToPage() {
    this._menuElement.style.position = 'fixed';
  }

  _unfreezeMenuToPage() {
    this._menuElement.style.position = 'absolute';
  }
}

module.exports = BurgerMenu;
