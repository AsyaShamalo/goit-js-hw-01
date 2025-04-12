function getElementWidth(content, padding, border) {
    let content = Number.parseFloat(content);
    let padding = Number.parseFloat(padding) * 2;
    let border = Number.parseFloat(border) * 2;
    return content + padding + border;
    
}
console.log (getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));  
