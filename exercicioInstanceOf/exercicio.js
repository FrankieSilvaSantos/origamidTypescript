var link = document.getElementById('origamid');
/*if (link instanceof HTMLAnchorElement) {
    link.href = 'https://www.origamid.com'
} */
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace("http://", "https://");
}
