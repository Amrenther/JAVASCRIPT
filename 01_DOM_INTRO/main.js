function ChangeText() {
    
    document.getElementById('heading1').innerHTML = "<b>Heading 1 Changed</b>"
    console.log("This button is changed the Heading from heading 1 to heading 1 changed")
            
    }

let Button = document.getElementById('myButton')

Button.addEventListener("click",function() {
    
    document.getElementById('heading2').innerHTML = '<i>Heading 2 Changed</i>'
    console.log("This button is changed the Heading from heading 2 to heading 2 changed as Italic" )

})

document.getElementById("changeBtn").addEventListener('click',function(){
    ChangeBtn()
})

function ChangeBtn() {

    document.getElementById('heading3').innerHTML = '<u>Heading 3 Changed</u>'
    console.log("This button is changed the Heading from heading 3 to heading 3 changed as Underline")
}

