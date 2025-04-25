const imgright = document.querySelectorAll('.galeria .col:nth-child(2n+1) .parallax');
const imgleft = document.querySelectorAll('.galeria .col:nth-child(2n) .parallax');
new simpleParallax(imgright, {
    orientation: "up right",
    scale: 1.3,
    delay: 0.5,
    transition: 'cubic-bezier(0,0,0,1)'
});
new simpleParallax(imgleft, {
    orientation: "down left",
    scale: 1.5,
    delay: 0.7,
    transition: 'cubic-bezier(0,0,0,1)'
});