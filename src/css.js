export function css(cssStyle) {
	const style = document.createElement("style");

	style.innerHTML = cssStyle;

	return style;
}
