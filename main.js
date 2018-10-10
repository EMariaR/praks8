let numInput = document.querySelector('#numInput');
let factOutput = document.querySelector('#factOutput');
let incInput = document.querySelector('#incInput');

const getFact = () => {
    factOutput.innerHTML = ''
    let number = numInput.value;
    let inc = incInput.value;
    let baseUrl = 'http://numbersapi.com/'
    let url = `${baseUrl}${number}..${parseInt(number) + parseInt(inc)}`;

  
if (number != '' && inc != '') 
 axios.get(url)
    .then(response => {
        for (let item in response.data) {
            let li = document.createElement('li');

            factOutput.appendChild(li);
            li.innerText = response.data[item];
        }
    })
    .catch(error => {
        console.log(error);
    })
}

// Listening to events
numInput.addEventListener('input', getFact);
incInput.addEventListener('input', getFact);
    