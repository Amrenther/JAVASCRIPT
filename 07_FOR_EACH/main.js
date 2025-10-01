let fruits = ["Apple","Mango","Orange","Banana"]

let btn = document.getElementById('btn')

btn.addEventListener('click',()=>{

 document.getElementById('result').innerHTML = ''

fruits.forEach( currentFruit => {
    console.log(`Furit:${currentFruit}`)
    document.getElementById('result').innerHTML += `<h1>${currentFruit}</h1>`
})

})