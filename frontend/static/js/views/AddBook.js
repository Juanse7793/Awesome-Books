import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Add Book");
    }

    async getHtml() {
        return `
            <h1>Add a new book</h1>
            <p>ADD A NEW BOOK FORM HERE</p>
        `;
    }
}