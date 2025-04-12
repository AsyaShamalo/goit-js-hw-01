function getElementWidth(content, padding, border) {
    let numContent = Number.parseFloat(content);
    let numPadding = Number.parseFloat(padding) * 2;
    let numBorder = Number.parseFloat(border) * 2;
    return numContent + numPadding + numBorder;
    
}
console.log (getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));  
