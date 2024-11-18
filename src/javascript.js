

function displayQuote(response){
 console.log(response.data.answer)

 new Typewriter('#quote-display', {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay:1
  });
}


function generateQuote(event){
    event.preventDefault()
    console.log('clicked')
    // let quoteDisplayElement = document.querySelector('#quote-display')
    let userPrompInputtElement = document.querySelector('#user-prompt')
    let apiKey = 'a03e62525c5f6b05f4bt9c6f57oe33ff'
    let context = "You are an amazing quote generator. Please display quote in one html line and separate each line with a <br />. Sign the quote inside a <strong> element"
    let prompt = `Generate a quote about ${userPrompInputtElement.value}`
    let apiUrl= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    axios(apiUrl).then(displayQuote)
    console.log(prompt)

}


let formElement = document.querySelector("#quote-generator-form")
formElement.addEventListener("submit", generateQuote)