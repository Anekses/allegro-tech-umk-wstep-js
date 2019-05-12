let something = 5;
let somethingTable = [5, 15, "number"];
const somethingConst = 12;

const ourObject = {
    age: 25,
    name: "cookies",
    objectAgain: {
        andAgain: {
            bool: true
        }
    }
}

const table = [5, 10, 15];
table.push(11);
table.pop();


const num = 10;
const str = 'przykładowy tekst';
const arr = [];
const obj = {};

console.log( typeof num ); //"number"
console.log( typeof str ); //"string"
console.log( typeof arr ); //"object"
console.log( typeof obj ); //"object"
console.log( typeof und ); //"undefined"

let variable = 15;
variable = 'maybe 18?';
variable = false;
variable = {
    value: 66
}

console.log( +"20" );
console.log( "20" * 1 );
console.log( "20" / 1 );
console.log( ~~"20" );

console.log( 20 + '' );



console.warn('Uwaga!');
console.error('Błąd!');
console.info('Informacja!');

console.group('Nazwa grupy');
console.log('Ala ma kota');
console.log('Kot ma Alę');
console.groupEnd();

const myName = 'Adrian';
const mySecondName = 'Krzysztof';
const myLastName = 'Rydzyński';
console.log("Nazywam się", myName);
console.log("A także", myName, mySecondName);
console.log({
    myName: myName,
    mySecondName,
    myLastName: "Nazwisko moje brzmi: " + myLastName
});



function addElementToDOM(firstValue, secondValue, action, result) {
    const el = document.querySelector('.result');

    const newEl = document.createElement('div');
    if (typeof result == "number") {
        newEl.innerHTML = `${firstValue} ${action} ${secondValue} = ${result}`;
    } else {
        newEl.innerHTML = result;
    }

    el.appendChild(newEl);
}

window.onload = function() {
    document.querySelector('#action-button').addEventListener("click", function() {
        const firstValue = document.querySelector('.first-number').value;
        const secondValue = document.querySelector('.second-number').value;
        const action = document.querySelector('.action').value;

        const firstValueNumber = Number(firstValue);
        const secondValueNumber = Number(secondValue);

        // console.dir(document.querySelector('.action'));
        
        let result;

        switch(action) {
            case '+':
                result = firstValueNumber + secondValueNumber;
                break;
            case '-':
                result = firstValueNumber - secondValueNumber;
                break;
            case '*':
                result = firstValueNumber * secondValueNumber;
                break;
            case '/':
                if (secondValue != 0) {
                    result = firstValueNumber / secondValueNumber;
                } else {
                    result = "Nie dziel przez 0!";
                }
                break;
            default:
                result = "Podałaś/Podałeś nieobsługiwany znak";
                break;
        }

        addElementToDOM(firstValue, secondValue, action, result);        
    });
}