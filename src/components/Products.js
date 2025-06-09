import { btn } from "../common/buttons.js";
import { productList } from "../data/main.js";

export const products = () => {
    return (`
        
           <section id="products">
    <div class="container">
        <div class="grid">
        ${
        productList.map((pro)=> (
        `
           <div class="item">
                <img src="${pro.img}" alt="#">
                <h3>${pro.title}</h3>
                <div>
                    <span>price :</span>
                <span>${pro.price}</span>
            </div>
            ${btn("Buy Now ", "red")}
            </div>
        `
        )).join("")
        }
        </div>
    </div>
   </section>
`
      )
}