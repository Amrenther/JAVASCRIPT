
let ADD = document.getElementById('addBtn')

ADD.addEventListener('click',function(){
    let value1 = document.getElementById('num1').value
    let value2 = document.getElementById('num2').value
    if (value1 === '' || value2 === '') {
        document.getElementById('output').innerHTML = "Please check the two inputs"
    }
    document.getElementById('output').innerHTML =  parseInt(value1) + parseInt(value2);
})


document.getElementById('Merge').addEventListener('click',function(){
    let firstName = document.getElementById('First_Name').value
    let lastName = document.getElementById('Last_Name').value
    if(firstName === '' || lastName === ''){
        document.getElementById('result').innerHTML = "Please enter both the inputs"
    }else{
        document.getElementById('result').innerHTML = `${firstName} ${lastName}`
    }

})