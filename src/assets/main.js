let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value==''||attempt.value=''){
        setHiddenFields();
    }

    // Call the validateInput function from the guess function
    if(!validateInput(input.value)){
        return;
    }
    attempt.value++;

}
//function takes user input, check against the answer, and displays results
function getResults(input) {
    let correct = 0;
    let html = <div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">;
}

// implement new functions here
function setHiddenFields() {
    answer.value = Math.floor(Math.random()*10000).toString();
    while (answer.length<4){
        answer.value = "0" + answer.value;
    }
    attempt.value =0;
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
    if(input.length != 4){
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
    return true;
}
