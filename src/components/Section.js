// отрисовывает элементы на странице, у класса нет своей разметки - он получает разметку через функцию колбэк и вставляет ее в контейнер
export class Section {
  constructor({items, renderer}, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._initialCards = items;
    this._renderer = renderer;
  }

  // принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.append(element)
  };

  addItemNew(element) {
    this._container.prepend(element)
  };

  // отрисовка каждого отдельного элемента
  renderer() {
    this._initialCards.forEach(card => 
      this._renderer(card))
  }; 
    
}
