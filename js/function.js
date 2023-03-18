const $form = document.querySelector("#form")
const $buttonmailto = document.querySelector("#testeo")
$form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {  
    event.preventDefault( )
    const form = new FormData (this)
    console.log (form.get ("name"))
    $buttonmailto. setAttribute ("href", 'mailto:srpadilla@hotmail.com.ar?subject=nombre ${ form . get ( "name" ) } correo ${ form . get ( "email" ) } &body= ${ form . get ("message")}')
    $buttonmailto .click ()  }
    
    
