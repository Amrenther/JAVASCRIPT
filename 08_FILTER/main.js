let fruits = ["apple","orange","banana","grapes","strawberry"]

/* let filteredFruits = fruits.filter( item =>{
    return item.includes("r")
})

filteredFruits.forEach(item =>{
    document.getElementById('result').innerHTML += `<h1>${item}</h1>`
})  */

document.getElementById('search').addEventListener('keyup',()=>{
    document.getElementById('result').innerHTML = ''
    let searchKey = document.getElementById('search').value
    let filteredFruits = fruits.filter(item =>{
        return item.includes(searchKey)
    })

    filteredFruits.forEach(item =>{
        document.getElementById('result').innerHTML += `<h1>${item}</h1>`
    })
})