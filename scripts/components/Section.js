class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }
    _renderItems() {
        this._renderedItems.forEach((item) => {
            renderer(item);
        });
    }
    addItem(element) {
        this._containerSelector.append(element);
    }
    newItem(element) {
        this._containerSelector.prepend(element);
    }
}
export default Section;