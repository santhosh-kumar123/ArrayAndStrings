// area of circle is pi*r*r
function AreaOfCircle(radius) {
    let area = (Math.PI * (radius * radius));
    console.log(area);
    console.log(Math.round(area*100)/100);
}
console.log(AreaOfCircle(5));