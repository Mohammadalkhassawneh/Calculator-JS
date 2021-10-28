let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('buttons'));//Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.


buttons.map(buttons => {
    buttons.addEventListener('click', (e) => {
     switch(e.target.innerText){ //to target the entire click just
         case 'C':
             display.innerText = '';
             break;
         case '=':
             try {
                display.innerText = eval(display.innerText);
             }
             catch {
                 display.innerText = 'ERROR!';
             }
             
             break;
         default:
             display.innerText += e.target.innerText;
     }
    }

    )
}
    )