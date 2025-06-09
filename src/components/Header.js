import { btn } from "../common/buttons.js"
import { nav } from "../data/main.js"


export const header = (logo = "Name") => {
    return (`<header><nav class ="container"><a href="#" id="logo">${logo}</a><ul>
        ${nav.map((item) =>item.isActive ? `<li><a href=${item.link}>${item.title}</a></li>` : "").join("")}
           </ul>
       ${btn("LogIn", "#063452")}
        </nav></header> `)
}
