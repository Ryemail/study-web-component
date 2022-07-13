import { css } from "./css";

export default class UserCard extends HTMLElement {
	static get observedAttributes() {
		return ["avatar", "mobile", "name"];
	}

	css() {
		return css(`:host {
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
		}`);
	}

	html() {
		const img = document.createElement("img");
		const content = document.createElement("div");
		const name = document.createElement("div");
		const mobile = document.createElement("div");

		content.className = "user-content";
		name.className = "user-name";
		mobile.className = "user-mobile";
		img.className = "avatar";

		const fragment = document.createDocumentFragment();

		content.append(name, mobile);

		fragment.appendChild(img);
		fragment.appendChild(content);

		return fragment;
	}

	constructor() {
		super();

		this.state = {
			avatar: "",
			mobile: "",
			name: "",
		};

		// 创建影子DOM节点 mode 为真表不能被外部影响与操作 closed
		const shadow = this.attachShadow({ mode: "open" });

		shadow.appendChild(this.css());
		shadow.appendChild(this.html());
	}

	updateProps(args) {
		const property = args[0],
			oldVlaue = args[1],
			newValue = args[2];

		const isProperty = UserCard.observedAttributes.find(
			(item) => item === property
		);

		if (isProperty && oldVlaue !== newValue) {
			this.state[property] = newValue;
			this.render();
		}
	}

	render() {
		const shadow = this.shadowRoot;

		shadow.querySelector(".avatar").setAttribute("src", this.state.avatar);

		shadow.querySelector(".user-name").innerText = this.state.name;
		shadow.querySelector(".user-mobile").innerText = this.state.mobile;
	}

	connectedCallback() {
		console.log("首次插入dom 文档时调用");
	}

	disconnectedCallback() {
		console.log("被从文档中删除时调用");
	}

	adoptedCallback() {
		console.log("被移动到新文档中时调用");
	}

	attributeChangedCallback(...args) {
		this.updateProps(args);
	}
}

window.customElements.define("user-card", UserCard);
