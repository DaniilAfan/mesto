class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }
    addItem(element) {
        this._containerSelector.append(element);
    }
    renderItems(items) {
        items.forEach((item) => {
            this._renderer(item);
        });
    }
    newItem(element) {
        this._containerSelector.prepend(element);
    }
}
export default Section;