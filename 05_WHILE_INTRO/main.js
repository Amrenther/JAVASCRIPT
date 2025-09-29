document.getElementById('startBtn').addEventListener('click',function(){

    document.getElementById('result').innerHTML = ''

    let totalLap = parseInt(document.getElementById('input').value) 
    let currentLap = 1

    while (currentLap <= totalLap) {
        document.getElementById('result').innerHTML += `<h1>Lap ${currentLap} is Completed</h1>`
        currentLap++
    }
    document.getElementById('result').innerHTML += "<h1> You Won! </h1>"
})
