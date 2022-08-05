// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
currentTime = new Date()
date.innerHTML = currentTime.getFullYear()
// ********** close links ************
const navTaggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

navTaggle.addEventListener("click",function(){
    linksContainer.classList.toggle("show-links")
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height = 0
    }
    
})

const navbar = document.getElementById("nav")
const topLink = document.querySelector(".top-link")

// ********** fixed navbar ************
window.addEventListener("scroll",function(){
    const scrollHeight = window.scrollY
    const navbarHeight = navbar.getBoundingClientRect().height
    
    if(scrollHeight > navbarHeight){
        navbar.classList.add("fixed-nav")
    }else{
        navbar.classList.remove("fixed-nav")
    }

    if(scrollHeight > 600){
        topLink.classList.add("show-link")
    }else{
        topLink.classList.remove("show-link")
    }
    
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(function(link){
    link.addEventListener("click",function(event){
        event.preventDefault()
        const id = event.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        //calculate the heights
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains("fixed-nav")


        

        let position = element.offsetTop - navHeight
        
        if(!fixedNav){
            position-=navHeight
        }
        if(navHeight>82){
            position+=containerHeight
        }
        

        window.scrollTo({top:position})
       
        

       linksContainer.style.height = 0
        
        const offset = element.offsetTop
        console.log(offset)

        /*
        const offset = element.offsetTop
        window.scrollTo({top:offset-navHeight})
        //seems like scrollTo X  will leads to the the place where the page part 
        //beyond the screen will be calculated as X

 
        when navigate in the fixed Navbar  
        offset of the "about" element will be 704 = main+navbar-nabar(because the navbar is been cut)
        and scrollTo X value will be main+navbar-navbar-navbar

        when navigate from the home page  
        offset of the "about" element will be 786 = main+navbar and scrollTo X value will be main+navbar-navbar
        


        
        console.log(offset)
        */
       
       
    })
})

