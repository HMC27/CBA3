function $(id){return document.querySelector(id)}
function $$(id) {return document.querySelectorAll(id)}
import {load_base} from "./base.js"

function main() {
    load_base()
    load_event()
}

main()

function load_event() {
    $$(".cate_items").forEach((i)=>{
        i.addEventListener("mouseover",(e)=>{
            cate(i)
        })
    })
    $(".cate_list").addEventListener("mouseout",()=>{
        $(".cate_img").setAttribute("src",'./assets/img/none.png')
    })
    $("#topeople").addEventListener("click",(e)=>{
        localStorage.setItem('data-id', JSON.stringify(2))
        window.location.href = "/gallery/index.html"
    })
    $("#tosingle").addEventListener("click",(e)=>{
        localStorage.setItem('data-id', JSON.stringify(1))
        window.location.href = "/gallery/index.html"
    })
}

function cate(e) {
    var id = e.getAttribute('icon-id')
    var li
    if (id == "1") {li = "tapthe"} else if (id == "2") {li = "truonghoc"} else if (id == "3") {li = "selfie"} else if (id == "4") {li = "kyyeu"}
    $(".cate_img").setAttribute("src",`./assets/img/${li}.png`)
}