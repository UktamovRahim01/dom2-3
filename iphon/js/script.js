let promo_img = document.querySelector(`.promo_img img`)
let big_name = document.querySelector(`.promo_name h1`)
let name = document.querySelector(`.price`)

let namepro = document.querySelector(`.md1`)
let namepro_max = document.querySelector(`.md2`)

let color1 = document.querySelector(`.cl1`)
let color2 = document.querySelector(`.cl2`)
let color3 = document.querySelector(`.cl3`)
let color4 = document.querySelector(`.cl4`)

let collor_Text = document.querySelector(`.collor_box p`)

let bnm = true

let act2 = document.querySelector(`.collor_box`)
let act3 = document.querySelector(`.storage_boxs`)
act2.classList.add(`activs`)
act3.classList.add(`activs`)


let storage1 = document.querySelector(`.st1`)
let storage2 = document.querySelector(`.st2`)
let storage3 = document.querySelector(`.st3`)
let storage4 = document.querySelector(`.st4`)



namepro.onclick = () => {
    big_name.innerHTML = `Buy iPhone 14 Pro`
    name.innerHTML = `From $999 or $41.62/mo.per month for 24 mo.months before trade‑in`
    namepro.classList.add(`activ`)
    namepro_max.classList.remove(`activ`)
    promo_img.src = "./iphon/img/iphone-14-pro-deeppurple.jfif"
    bnm = true
    act2.classList.remove(`activs`)
}
namepro_max.onclick = () => {
    big_name.innerHTML = `Buy iPhone 14 Pro Max`
    name.innerHTML = `From $1099 or $45.79/mo.per month for 24 mo.months before trade‑in`
    namepro_max.classList.add(`activ`)
    namepro.classList.remove(`activ`)
    promo_img.src = "./iphon/img/iphone-14-pro-max-deeppurple.jfif"
    bnm = false
    act2.classList.remove(`activs`)
}



color1.onclick = () => {
    color1.classList.add(`activ`)
    color2.classList.remove(`activ`)
    color3.classList.remove(`activ`)
    color4.classList.remove(`activ`)
    if (bnm) {
        promo_img.src = "./iphon/img/iphone-14-pro-deeppurple.jfif"
    }
    else {
        promo_img.src = "./iphon/img/iphone-14-pro-max-deeppurple.jfif"
    }
    collor_Text.innerHTML = `Color - Deep Purple`
    act3.classList.remove(`activs`)

}
color2.onclick = () => {
    color1.classList.remove(`activ`)
    color2.classList.add(`activ`)
    color3.classList.remove(`activ`)
    color4.classList.remove(`activ`)

    if (bnm) {
        promo_img.src = "./iphon/img/iphone-14-pro-gold.jfif"
    }
    else {
        promo_img.src = "./iphon/img/iphone-14-pro-max-gold.jfif"
    }
    collor_Text.innerHTML = `Color - Gold`
    act3.classList.remove(`activs`)


}
color3.onclick = () => {
    color1.classList.remove(`activ`)
    color2.classList.remove(`activ`)
    color3.classList.add(`activ`)
    color4.classList.remove(`activ`)
    if (bnm) {
        promo_img.src = "./iphon/img/iphone-14-pro-silver.jfif"
    }
    else {
        promo_img.src = "./iphon/img/iphone-14-pro-max-silver.jfif"
    }
    collor_Text.innerHTML = `Color - Silver`
    act3.classList.remove(`activs`)

}
color4.onclick = () => {
    color1.classList.remove(`activ`)
    color2.classList.remove(`activ`)
    color3.classList.remove(`activ`)
    color4.classList.add(`activ`)
    if (bnm) {
        promo_img.src = "./iphon/img/iphone-14-pro-spaceblack.jfif"
    }
    else {
        promo_img.src = "./iphon/img/iphone-14-pro-max-spaceblack.jfif"
    }
    collor_Text.innerHTML = `Color - Space Black`
    act3.classList.remove(`activs`)

}





storage1.onclick = () => {
    if (bnm) {
        name.innerHTML = `From $999 or $41.62/mo.per month for 24 mo.months before trade‑in`
    }
    else {
        name.innerHTML = `From $1099 or $45.79/mo.per month for 24 mo.months before trade‑in`
    }
    storage1.classList.add(`activ`)
    storage2.classList.remove(`activ`)
    storage3.classList.remove(`activ`)
    storage4.classList.remove(`activ`)
}
storage2.onclick = () => {
    if (bnm) {
        name.innerHTML = `From $1099 or $45.79/mo.per month for 24 mo.months before trade‑in`
    }
    else {
        name.innerHTML = `From $1199 or $49.95/mo.per month for 24 mo.months before trade‑in`
    }
    storage1.classList.remove(`activ`)
    storage2.classList.add(`activ`)
    storage3.classList.remove(`activ`)
    storage4.classList.remove(`activ`)
}
storage3.onclick = () => {
    if (bnm) {
        name.innerHTML = `From $1299 or $54.12/mo.per month for 24 mo.months before trade‑in`
    }
    else {
        name.innerHTML = `From $1399 or $58.29/mo.per month for 24 mo.months before trade‑in`
    }
    storage1.classList.remove(`activ`)
    storage2.classList.remove(`activ`)
    storage3.classList.add(`activ`)
    storage4.classList.remove(`activ`)
}
storage4.onclick = () => {
    if (bnm) {
        name.innerHTML = `From $1499 or $62.45/mo.per month for 24 mo.months before trade‑in`
    }
    else {
        name.innerHTML = `From $1599 or $66.62/mo.per month for 24 mo.months before trade‑in`
    }
    storage1.classList.remove(`activ`)
    storage2.classList.remove(`activ`)
    storage3.classList.remove(`activ`)
    storage4.classList.add(`activ`)
}





