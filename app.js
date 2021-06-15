const inputNumberHere = document.querySelector('.inputnumber');
const convertToNumeral = document.querySelector('.convertbutton');
const outputPart = document.querySelector('.outputromannumeral');

const romanURL = 'https://api.funtranslations.com/translate/roman-numerals.json';

function getURL (number) {
  return romanURL + "?" + "text=" + number;
}

function errorHandler () {
    console.log('Error Occured!');
    alert('Something Went Wrong!');
}

function getRomanValue () {
    let input = inputNumberHere.value;

    fetch(getURL(input))
    .then(reply => reply.json())
    .then(dataLoaded => {
        let givenRomanValue = dataLoaded.contents.translated;
        outputPart.innerHTML = getRomanValue;
    })
    .catch(errorHandler);
}

convertToNumeral.addEventListener('click', getRomanValue);