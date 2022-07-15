import { css } from "./css.js";

export default class UserCard extends HTMLElement {
	static get observedAttributes() {
		return ["avatar", "mobile", "name", "comments", "_comments"];
	}

	constructor() {
		super();

		this.avatar = "";
		this.mobile = "";
		this.name = "";
		this._comments = [];

		// 创建影子DOM节点 mode 为真表不能被外部影响与操作 closed
		this.attachShadow({ mode: "open" });

		this.render();
	}

	get comments() {
		return this._comments;
	}

	set comments(newValue) {
		this._comments = newValue;
		//  重新渲染
		this.render();
	}

	css() {
		return `
		<style>
			.user-item{
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
			}</style>`;
	}

	onAvatar() {
		//
		alert("rrrrr");
	}

	html() {
		// const html = `<div class="user-item"><img class="avatar" src="${this.avatar}" />
		// <div class="user-content">
		// 	<div class="user-name">${this.name}</div>
		// 	<div class="user-mobile">${this.mobile}</div>
		// </div></div>`;

		const Comment = ({ name, avatar, mobile }) => {
			console.log(this.onAvatar);
			return `<div class="user-item"><img class="avatar" src="${avatar}" />
			<div class="user-content">
				<div class="user-name">${name}</div>
				<div class="user-mobile">${mobile}</div>
			</div></div>`;
		};

		const innerHTML = this._comments.map((val) => Comment(val)).join("");

		return innerHTML;
	}

	//  选择器
	$(selector) {
		return this.shadowRoot.querySelector(selector);
	}

	render() {
		this.shadowRoot.innerHTML = this.css() + this.html();
	}

	connectedCallback() {
		console.log("首次插入dom 文档时调用");
		window.addEventListener("");
	}

	disconnectedCallback() {
		console.log("被从文档中删除时调用");
	}

	adoptedCallback() {
		console.log("被移动到新文档中时调用");
	}

	//  监听数据变化
	attributeChangedCallback(property, oldVlaue, newValue) {
		const isProperty = UserCard.observedAttributes.find(
			(attr) => attr === property
		);

		if (isProperty && oldVlaue !== newValue) {
			this[property] = newValue;

			//  重新渲染
			this.render();
		}
	}
}

window.customElements.define("user-card", UserCard);
