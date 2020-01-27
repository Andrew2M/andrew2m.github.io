const css = document.querySelector("h3");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const body = document.querySelector("#gradient");
const RNGBtn = document.getElementById("rng");

const RGB = ()=>{ let color = (Math.ceil(Math.random() * 255)); return color; }

function hex2rgb(hex) {
    hex = hex.replace(/ |#/g, '');
    if(hex.length === 3) hex = hex.replace(/(.)/g, '$1$1');
    hex = hex.match(/../g); 
    result = [parseInt(hex[0], 16), parseInt(hex[1], 16), parseInt(hex[2], 16)];   
    rgbResult =`rgb(${result[0]},${result[1]},${result[2]})`;
        return rgbResult }

const rgb2hex = () =>{  
    r = RGB();
    g = RGB();
    b = RGB();
    let rgb = (r << 16) | (g << 8) | b; 
    let newColorFormat ='#' + (0x1000000 + rgb).toString(16).slice(1);   
        return newColorFormat }

const RandomBackground = ()=>{ 
    let c1 = rgb2hex();
    let c2 = rgb2hex();
    color1.value = c1;
    color2.value=c2;
    let backgroundGradient = `linear-gradient(to right, ${hex2rgb(c1)}, ${hex2rgb(c2)}`;
        return backgroundGradient }

const newRandomBackground = ()=>{ body.style.background = RandomBackground(); css.textContent = `${body.style.background};`; }

const setGradient = () => { body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;css.textContent = `${body.style.background};`;}         

const displayRGB = ()=>{
    let initStyle = getComputedStyle(gradient);
    let diplayInitStyle = initStyle.backgroundImage;
    css.textContent = `${diplayInitStyle};`;
    let displayColor = css.textContent;
        return displayColor; }

displayRGB();

color1.addEventListener("input", setGradient); // done
color2.addEventListener("input", setGradient);// done
RNGBtn.addEventListener("click", newRandomBackground); // done
RNGBtn.addEventListener("click", rgb2hex); // done




// RNGBtn.addEventListener("click", displayInputColor); // done
// function rgb2hex(red, green, blue) {
//     var rgb = blue | (green << 8) | (red << 16);
//     return '#' + (0x1000000 + rgb).toString(16).slice(1)
// }

// const rgb2hex = (r, g, b) => {  
//     r = RGB();
//     g = RGB();
//     b = RGB();
//     let rgb = b | (g << 8) | (r << 16); 
//     let newColorFormat ='#' + (0x1000000 + rgb).toString(16).slice(1);
//         return newColorFormat;
// }
// const diplayInitialColors = () =>{
//     let initColor = getComputedStyle(color1);
//     let displayInitColor = initColor.color;
//     let reference = displayRGB();
//     color1.value = displayInitColor;
//         return color1.value;
// }

// diplayInitialColors();

// const displayInintColors = () => {
//     color1.value =colorRGB();
//     color2.value =colorRGB();
//         return color1.value, color2.value}


