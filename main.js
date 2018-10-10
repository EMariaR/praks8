let numInput = document.querySelector('#numInput');
let factOutput = document.querySelector('#factOutput');

const getFact = () => {
    let number = numInput.value;
}
  
if (number != '') }
fech('http://numbersapi.com/'+number)
    .then(response => response.text())
console.log(response.data);

    .then(data => {
    facktOutput.innerText = data;
})
.catch(error => {
    console.log(error);
})


// Listening to events
numInput.addEventListener('input', getFact);
    