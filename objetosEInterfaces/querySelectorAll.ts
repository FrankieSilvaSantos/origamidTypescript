const links = document.querySelectorAll(".link") // .link == tudo que tiver usando a class link vai pegar
console.log(links instanceof NodeList)

links.forEach((link) => {
    if(link instanceof HTMLAnchorElement) {
    console.log(link)
    } else {
        console.log(typeof link)
    }
})

const arrayLinks = Array.from(links)
const anchorLinks = arrayLinks.filter((link) =>  link instanceof HTMLAnchorElement
)

console.log(anchorLinks)

