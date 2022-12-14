import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
h1 {
	color: white;
	font-size: 24px;
}
h2 {
	color: #FFBABA;
	font-size: 20px;
}
label {
	color: white;
}
input, textarea {
	font-family: "Comfortaa";
	border: none;
	border-radius: 5px;
	padding: 5px;
	background-color: white;
	::placeholder{
		font-family: "Comfortaa";
		color: dimgray;
	}
	:focus {
        outline: none;
      }
}

button {
	border-radius: 10px;
	font-family: "Comfortaa";
	border: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	width: 100%;
	height: 100%;
	background: radial-gradient(circle at right center, #EEB1BF 5%, #d42dab 25%, #4d1d63 50%, #030243 100%);
	font-family: "Comfortaa";
}
ol, ul, li {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
	box-sizing: border-box;
	a {
		text-decoration: none;
	}
}
`;

export default GlobalStyle;
