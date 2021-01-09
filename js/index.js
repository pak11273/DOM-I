const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Create selectors by using any of the DOM element's methods
// nav 
let nav = document.querySelectorAll(".container nav a")
let navContainer = document.querySelector(".container nav")

// new nav element
let preNav = document.createElement("a")
preNav.href = "#"
preNav.style.color = "red"
preNav.textContent = "Prenav"

// new nav element
let appendNav = document.createElement("a")
appendNav.href = "#"
appendNav.style.color = "red"
appendNav.textContent = "Appendnav"

// add new nav elements 
navContainer.prepend(preNav)
navContainer.appendChild(appendNav)

nav.forEach(x=> x.setAttribute("style", "color: red")) // change color to red
let arrNav = Array.from(nav)
for(let i=1;i<arrNav.length + 1;i++) {
  arrNav[i-1].textContent = siteContent.nav[`nav-item-${i}`]
}

// cta
let cta = document.querySelector(".cta")
let h1 = cta.children[0].children[0]
h1.innerHTML = "DOM <br> Is <br> Awesome"
cta.children[1].setAttribute("src",  "img/header-img.png")
cta.children[0].children[1].textContent =  siteContent.cta.button

// main content
let topContent = document.querySelector(".main-content")
let lefth4 = topContent.children[0].children[0].children[0]
lefth4.textContent = siteContent["main-content"]["features-h4"] 
let leftp = topContent.children[0].children[0].children[1]
leftp.textContent = siteContent["main-content"]["features-content"] 
let righth4 = topContent.children[0].children[1].children[0]
righth4.textContent = siteContent["main-content"]["about-h4"]
let rightp = topContent.children[0].children[1].children[1]
rightp.textContent = siteContent["main-content"]["about-content"]

// middle image
document.querySelector(".middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"])

// bottom content
let botContent = document.querySelector(".bottom-content")
botContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"] 
botContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"]
botContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"]
botContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"]
botContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"]
botContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"]

// contact
let contact = document.querySelector(".contact")
contact.children[0].textContent = siteContent.contact["contact-h4"]
contact.children[1].textContent = siteContent.contact.address
contact.children[2].textContent = siteContent.contact.phone
contact.children[3].textContent = siteContent.contact.email

// footer
let footer = document.querySelector("footer")
footer.children[0].textContent = siteContent.footer.copyright

// STRETCH
// update styles: change color of article headings
let headings = document.querySelectorAll("h4")
headings.forEach( x => x.setAttribute("style", "color: blue"))

// Change button text from "Get Started" to "Already Done" (toggle)
let startBtn = cta.children[0].children[1]
startBtn.addEventListener("click", () => {
  if(startBtn.textContent === "Get Started") {
    startBtn.textContent = "Already Done"
  } else {
    startBtn.textContent = "Get Started"
  }
})