function displayResults(responseJson){
    console.log(responseJson.message);
    for (let i=0; i < responseJson.message.length; i++){
    $('.results-container').append( `<img src="${responseJson.message[i]}" class="results-img">`)}
}
function getImage() {

    let imgAmount = document.getElementById('amount').value;
    let url = "https://dog.ceo/api/breeds/image/random/" + imgAmount;
    
    fetch(url)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later'));


}
function handleSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        getImage();
        
    })
};




function loadApp() {
    console.log('App is loaded and ready');
    handleSubmit();
    
}

$(loadApp());