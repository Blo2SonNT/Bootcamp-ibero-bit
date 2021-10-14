// const body = document.querySelector("body")
// console.log(body)
// body.className = 'container'


// let div_row = document.createElement('div')
// div_row.className = 'row'

// body.appendChild(div_row)


// let div_col = document.createElement("div")
// div_col.className = 'col-6 offset-3'
// div_row.appendChild(div_col)

// let img_1 = document.createElement('img')
// img_1.src = 'https://encolombia.com/wp-content/uploads/2020/02/Colombia.jpg'
// img_1.className = 'w-100'
// div_col.appendChild(img_1)


// let script_etiqueta = document.createElement('script')
// script_etiqueta.src = 'js/asd.js'
// body.appendChild(script_etiqueta)
debugger

const body = document.querySelector('body')

let navbar = document.createElement('nav')
navbar.className = 'navbar navbar-expand-lg navbar-dark bg-dark'
navbar.style.padding = '16px 50px'
body.appendChild(navbar)


let div_container = document.createElement('div')
div_container.className = 'container-fluid'
navbar.appendChild(div_container)

let a_logo = document.createElement('a')
a_logo.className = 'navbar-brand'
a_logo.href = '#'
div_container.appendChild(a_logo)

let img_logo = document.createElement('img')
img_logo.src = 'img/logo_amazon_prime.svg'
img_logo.style.width = '112px'
a_logo.appendChild(img_logo)

let button_collapse = document.createElement('button')
button_collapse.className = 'navbar-toggler'
button_collapse.type = 'button'
button_collapse.setAttribute('data-bs-toggle', 'collapse')
button_collapse.setAttribute('data-bs-target', '#navbarSupportedContent')
div_container.appendChild(button_collapse)

let span_button_collapse = document.createElement('span')
span_button_collapse.className = 'navbar-toggler-icon'

button_collapse.appendChild(span_button_collapse)

let div_collapse = document.createElement('div')
div_collapse.className = 'collapse navbar-collapse'
div_collapse.id = 'navbarSupportedContent'

div_container.appendChild(div_collapse)


let ul_menu = document.createElement('ul')
ul_menu.className = 'navbar-nav me-auto mb-2 mb-lg-0'
div_collapse.appendChild(ul_menu)


for (let x = 1; x <= 2; x++) {
    var li_opts = document.createElement('li')
    li_opts.className = (x == 2) ? 'nav-item dropdown' : 'nav-item'
    var a_li = document.createElement('a')
    var strong_link_a = document.createElement('b')
    var texto_b = ''
    if (x == 1) {
        a_li.className = 'nav-link fw-bold text-white'
        a_li.href = "#"
        texto_b = "Inicio"
    } else if (x == 2) {
        a_li.className = "nav-link dropdown-toggle fw-bold text-white"
        a_li.href = "#"
        a_li.id = "navbarDropdown"
        a_li.setAttribute("role", "button")
        a_li.setAttribute("data-bs-toggle", "dropdown")
        a_li.setAttribute("aria-expanded", "false")
        texto_b = "Categorias"
    }
    var texto = document.createTextNode(texto_b)
    a_li.appendChild(texto)
    li_opts.appendChild(a_li)
    ul_menu.appendChild(li_opts)
}