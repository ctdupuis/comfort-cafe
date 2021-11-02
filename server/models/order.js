export default class Order {
    constructor(id, items=[]) {
        this.id = id;
        this.items = items;
    }

    addItem = item => this.items.push(item);

    removeItem = item => this.items.pop(item);
};