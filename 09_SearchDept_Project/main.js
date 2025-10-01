let Department = ["Computer Science Engineering","Information Technology","Artificial Intellegence and Data Science",
    "Electrical and Communication Engineering","Electrical and Electronic Engineering","Mechanical Engineering",
    "Civil Engineering","Chemical Engineering","Bio Medical Coding","Aeronautical Engineering"]



document.getElementById('search').addEventListener('keyup',()=>{
    document.getElementById('result').innerHTML = ''
    let searchKey = document.getElementById('search').value
        
    
    let filterdedDepartment = Department.filter(item =>{
        return item.includes(searchKey)
    })
    filterdedDepartment.forEach(item =>{
        document.getElementById('result').innerHTML += `<h1>${item}</h1>`

    })
})