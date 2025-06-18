function $(id){return document.querySelector(id)}
function $$(id) {return document.querySelectorAll(id)}
function load_base() {
    load()
    getevent()
}


export{load_base}

function getevent() {
    $$(".nav_items").forEach((i)=>{
        i.addEventListener("mouseover",(e)=>{
            nav_hover($(".nav_items.active"),i)
        })
        i.addEventListener("click",(e)=>{
            $(".nav_items.active").classList.remove("active")
            i.classList.add("active")
            $(".nav_items.active .nav_line").style.left = 0
            $(".nav_items.active .nav_line").style.width = $(".nav_items.active").offsetWidth -48 + "px"
        })
    })
    $("#topeople").addEventListener("click",(e)=>{
        localStorage.setItem('data-id', JSON.stringify(2))
        window.location.href = "/gallery/index.html"
    })
}
function load() {
    $(".nav_regions").innerHTML = `
<div style="display: flex;" class="grid wide">
    <div class="nav_list">
        <div name-dt="1" class="nav_items">
            <a href="/index.html" class="nav_link">Trang chủ</a>
            <div class="nav_line"></div>
        </div>
        <div name-dt="2" class="nav_items">
            <a href="/classbook/index.html" class="nav_link">Class book</a>
            <div class="nav_line"></div>
        </div>
        <div name-dt="3" class="nav_items" id="topeople">
            <a href="/gallery/index.html" class="nav_link">Bộ sưu tập</a>
            <div class="nav_line"></div>
        </div>
        <div name-dt="4" class="nav_items">
            <a href="#" class="nav_link">Kỷ niệm</a>
            <div class="nav_line"></div>
        </div>
        <div name-dt="5" class="nav_items">
            <a href="https://fb.com/hmc27tricker" class="nav_link">Liên lạc</a>
            <div class="nav_line"></div>
        </div>
    </div>
</div>
    `
    $(".footer_regions").innerHTML = `
<div style="display: flex;height: 40px;" class="grid wide">
    <div class="footer_body">
        <div class="footer_head">Bản quyền thuộc lớp 12A3</div>
        <div class="footer_contact">Liên hệ: <a href="mailto:ighmc27@gmail.com">ighmc27@gmail.com</a></div>
    </div>
    <div class="footer_end">©DVH</div>
</div>
    `
    $$(".nav_items").forEach((i)=>{
        if (i.getAttribute("name-dt") == $("body").getAttribute("data")) {
            i.classList.add("active")
        }
    })
}
function nav_hover(e_active,e_hover) {
    var linehover = $(".nav_items.active .nav_line")
    linehover.style.left = e_hover.offsetLeft - e_active.offsetLeft + "px"
    linehover.style.width = e_hover.offsetWidth - 48 + "px"
    $(".nav_regions").addEventListener("mouseout",()=>{
        linehover.style.left = 0
        linehover.style.width = e_active.offsetWidth -48 + "px"
    })
}