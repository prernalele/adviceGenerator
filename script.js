
const displayAdviceId = document.getElementById("adviceId")
const displayAdviceText = document.getElementById("adviceText")

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
    // Check if the request was successful (status code 200-299)
    console.log("I am fetching")
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON in the response
    return response.json();
    })
    .then(data => {
        //Display id and advice 
        displayAdviceId.innerHTML = data.slip.id
        displayAdviceText.innerHTML = '"' + data.slip.advice + '"';
        
    })
}