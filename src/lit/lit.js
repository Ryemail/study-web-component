import { LitElement, css, html } from "lit";

export default class UserCard extends LitElement {
	constructor() {
		super();
		this.avatar = "";
		this.mobile = "";
		this.name = "";
	}

	static properties = {
		avatar: { type: String },
		mobile: { type: String },
		name: { type: String },
	};

	static styles = css`
		:host {
			padding: 10px;
			margin: 10px;
			display: flex;
			justify-content: space-between;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		}
		.avatar {
			display: block;
			width: 100px;
			height: 100px;
		}
		.user-content {
			flex: 1;
			padding-left: 10px;
		}
	`;

	render() {
		return html`<img class="avatar" src="${this.avatar}" />
			<div class="user-content">
				<div class="user-name">${this.name}</div>
				<div class="user-mobile">${this.mobile}</div>
			</div>`;
	}
}

window.customElements.define("user-card", UserCard);
