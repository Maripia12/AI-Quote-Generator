function generateQuote(event){
    event.preventDefault()
    console.log('clicked')
    // let quoteDisplayElement = document.querySelector('#quote-display')
    // let apiKey = ''
    // let apiUrl= ``

    new Typewriter('#quote-display', {
        strings: 'Hello Pia, how are you today?',
        autoStart: true,
        cursor: null,
        delay:1
      });
    

   
}


let formElement = document.querySelector("#quote-generator-form")
formElement.addEventListener("submit", generateQuote)