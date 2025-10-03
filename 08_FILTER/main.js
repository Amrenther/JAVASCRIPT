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

// let numbers = [10,20,30,40,50,60]

// let filteredNumbers = numbers.filter(item =>{
//     return item >=35
// })
// console.log(filteredNumbers)

//  let numbers = [10,20,30,40,50,60]

// let filteredNumbers = numbers.filter(item => item >=35)

//  console.log(filteredNumbers)

 let numbers = [10,20,30,40,50,60]
debugger
let filteredNumbers = numbers.find(item =>{
    
    //return item > 40
    //return item >= 40
    return item < 60
})

 console.log(filteredNumbers)

