import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
            <div id="contact-cont">
                <h1>Contact Information</h1>
                <p>Do you have any questions or you just want to say "Hello"?</p>
                <p>You can reach out to us!</p>
                <ul>
                <li>Our Email: mail@mail.com</li>
                <li>Phone: 911</li>
                <li>Address: Capitol Hill</li>
                </ul>
            </div>
        `;
    }
}