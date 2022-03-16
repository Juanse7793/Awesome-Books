import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Book List");
    }

    async getHtml() {
        return `
            <h1>All Awsome Books</h1>
            <p>
                PUT LIST HERE
            </p>
        `;
    }
}