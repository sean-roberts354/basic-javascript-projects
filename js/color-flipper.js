// Spans in HTML used as output
let primaryNavColorOutput = document.getElementById("primary-nav-color-output");
let tabNavColorOutput = document.getElementById("tab-nav-color-output");
let backgroundColorOutput = document.getElementById("background-color-output");

// Button on page to change colors
let btnChangeColors = document.getElementById("btn-change-colors");


function getNewRGBColor() {
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);

      let rgbString = red + ', ' + green + ', ' + blue;
      
      return rgbString;
}


function changeElementBackgroundColor(element, elementName) {
      let newColor = 'rgb(' + getNewRGBColor() + ')';
      element.style.backgroundColor = newColor; 

      switch (elementName) {
            case 'body':
                  backgroundColorOutput.innerHTML = newColor;
                  break;
            case 'primaryNav':
                  primaryNavColorOutput.innerHTML = newColor;
                  break;
            case 'tabNav':
                  tabNavColorOutput.innerHTML = newColor;
                  break;
            default:
                  console.log('ERROR')
      }
}

function main() {

      let body = document.getElementById('body');
      let primaryNav = document.getElementById('primary-nav');
      let tabNav = document.getElementById('tab-nav');

      changeElementBackgroundColor(body, 'body');
      changeElementBackgroundColor(primaryNav, 'primaryNav');
      changeElementBackgroundColor(tabNav, 'tabNav');
}


btnChangeColors.addEventListener('click', main);

