import { header } from "./components/Header.js";
import { hero } from "./components/Hero.js";
import { products } from "./components/Products.js";


const rootElement = document.getElementById("root");



const content = header("CodeVers") + hero() + products();


rootElement.insertAdjacentHTML( "beforeend", content)

