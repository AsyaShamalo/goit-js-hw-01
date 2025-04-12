function getElementWidth(content, padding, border) {
    let numContent = Number.parseFloat(content);
    let numPadding = Number.parseFloat(padding);
    let numBorder = Number.parseFloat(border);
    console.log(numContent + numPadding * 2 + numBorder * 2);
    
}
getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");  
