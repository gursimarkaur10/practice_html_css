import BagsAndFootwear from "../data/BagsAndFootwear.js"
import BeautyAndHealth from "../data/BeautyAndHealth.js"
import electronics from "../data/electronics.js"
import HomeAndKitchen from "../data/HomeAndKitchen.js"
import JewelleryAndAccessories from "../data/JewelleryAndAccessories.js"
import kids from "../data/kids.js"
import men from "../data/men.js"
import WomenEthnic from "../data/WomenEthnic.js"
import WomenWestern from "../data/WomenWestern.js"



let inputSearchE1 = document.querySelector(".input_search")
let recentInput = []
let formInputE1 = document.getElementById("inputForm")
const listofRecentE1 = document.querySelector(".listofRecent")


inputSearchE1.addEventListener("keydown",() => {
    // console.log(inputSearchE1)
    if(inputSearchE1.value){
        document.getElementById("closeSearch").style.display= "block"
    }
    else{
        document.getElementById("closeSearch").style.display= "none"
    }
})

formInputE1.addEventListener("submit", (e) => {
    e.preventDefault()
    let listofRecentHTMLE1 = ""
    recentInput.unshift(inputSearchE1.value)
    console.log(recentInput)

if(recentInput.length > 0){
    for(let i= 0 ; i < recentInput.length; i++ ) {
        listofRecentHTMLE1 +=`
        <div class="recent_item">
            <div class="recent_icon">
                 <i class="fa-solid fa-clock-rotate-left"></i>
            </div>
            <p>${recentInput[i]}</p>
        </div>
        `
    }
    listofRecentE1.innerHTML = listofRecentHTMLE1
}

})

// WomenEthnic
let WomenEthic = document.getElementById("WomenEthic")

function WomenEthicfunc(){
    return WomenEthnic.map(el =>{
        let list = "";  
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
            <div class="column">
                <h4>${el.heading}</h4>
                ${list}
            </div>
        `
    }).join("")
}
WomenEthic.innerHTML = WomenEthicfunc()

// WomenWestern
let womenWestern = document.getElementById("womenWestern")

function womenWesternfunc(){
    return WomenWestern.map(el =>{
        let list = "";  
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
            <div class="column">
                <h4>${el.heading}</h4>
                ${list}
            </div>
        `
    }).join("")
}
womenWestern.innerHTML = womenWesternfunc()

// men 
let Men = document.getElementById("Men")

function Menfunc(){
    return men.map(el =>{
        let list = "";  
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
            <div class="column">
                <h4>${el.heading}</h4>
                ${list}
            </div>
        `
    }).join("")
}
Men.innerHTML = Menfunc()

// kids 
let kid = document.getElementById("kid")

function Kidfunc(){
    return kids.map(el =>{
        let list = "";  
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
            <div class="column">
                <h4>${el.heading}</h4>
                ${list}
            </div>
        `
    }).join("")
}
kid.innerHTML = Kidfunc()

// home & kitchen 
let home_kitchen = document.getElementById("home_kitchen")

function home_kitchenfunc(){
    return HomeAndKitchen.map(el =>{
        let list = "";  
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
            <div class="column">
                <h4>${el.heading}</h4>
                ${list}
            </div>
        `
    }).join("")
}
home_kitchen.innerHTML = home_kitchenfunc()

// beauty and health 
let beauty_health = document.getElementById("beauty_health")

function beauty_healthfunc(){
    return BeautyAndHealth.map(el =>{
        let list = "";  
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
            <div class="column">
                <h4>${el.heading}</h4>
                ${list}
            </div>
        `
    }).join("")
}
beauty_health.innerHTML = beauty_healthfunc()

// Jewellery And Accessories 
let jewellery_accessory = document.getElementById("jewellery_accessory")

function jewellery_accessoryfunc(){
    return JewelleryAndAccessories.map(el =>{
        let list = "";  
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
            <div class="column">
                <h4>${el.heading}</h4>
                ${list}
            </div>
        `
    }).join("")
}
jewellery_accessory.innerHTML = jewellery_accessoryfunc()

// bags and footwear 
let bag_footwear = document.getElementById("bag_footwear")

function bag_footwearfunc(){
    return BagsAndFootwear.map(el =>{
        let list = "";  
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
            <div class="column">
                <h4>${el.heading}</h4>
                ${list}
            </div>
        `
    }).join("")
}
bag_footwear.innerHTML = bag_footwearfunc()

// electronics 
let electronic = document.getElementById("electronic")

function electronicfunc(){
    return electronics.map(el =>{
        let list = "";  
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
            <div class="column">
                <h4>${el.heading}</h4>
                ${list}
            </div>
        `
    }).join("")
}
electronic.innerHTML = electronicfunc()
