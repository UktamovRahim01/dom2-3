let price = 1999
let price1 = document.querySelector(`.pras`)
let pris = document.querySelectorAll(`[data-price]`)

let promo_img = document.querySelector(`.imgg`)
let collor = document.querySelector(`.box1 a`)
let btn_collor = document.querySelectorAll(`[data-collor]`)

pris.forEach(itm => {
    itm.onclick = () => {
        let bnm = itm.getAttribute(`data-price`)
        price1.innerHTML = `$ ${price + (bnm - 1 + 1)}`
    }
})

let pict = {
    White: "./img/mac1.svg",
    Space_Grey: "./img/mac2.svg"
}

btn_collor.forEach(btn => {
    btn.onclick = () => {
        let key = btn.getAttribute(`data-collor`)
        promo_img.src = pict[key]
        collor.innerHTML = key.replace(`_`, ` `)
    }
});













let acc = document.querySelector(".accordion");
let i;


acc.addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
});

