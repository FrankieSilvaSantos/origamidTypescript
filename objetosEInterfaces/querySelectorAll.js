var links = document.querySelectorAll(".link"); // .link == tudo que tiver usando a class link vai pegar
console.log(links instanceof NodeList);
links.forEach(function (link) {
    if (link instanceof HTMLAnchorElement) {
        console.log(link);
    }
    else {
        console.log(typeof link);
    }
});
var arrayLinks = Array.from(links);
var anchorLinks = arrayLinks.filter(function (link) { return link instanceof HTMLAnchorElement; });
console.log(anchorLinks);
