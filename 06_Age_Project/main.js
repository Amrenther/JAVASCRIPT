let Button = document.getElementById('btn')
Button.addEventListener('click',()=>{
    let age = parseInt(document.getElementById('ageValue').value)
    let disability = true
    if(age >= 60 && disability){
        document.getElementById('result').innerHTML = "You are a senior citizen &  Eligible to Special voting"
    }
    else if (age >= 18) {
        document.getElementById('result').innerHTML = "You're Eligible to vote"
    } 
    else{
        document.getElementById('result').innerHTML = "You are too young to vote"
    }
})