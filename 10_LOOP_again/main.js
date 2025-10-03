document.getElementById('btn').addEventListener('click',()=>{
    
     document.getElementById('result').innerHTML = ''

    let totalLap = parseInt(document.getElementById('totalLap').value)
    //let currentLap = 1

    if (isNaN(totalLap) || totalLap <= 0) {
        document.getElementById('result').innerHTML = "Please enter the total laps"
        return   // stop execution
    }
//     while (currentLap <= totalLap) {
       
      
//    document.getElementById('result').innerHTML += `<h3>lap ${currentLap} is Completed </h3>`
//        currentLap ++
//    }
    for (let currentLap = 1; currentLap <= totalLap; currentLap++){
        //if (currentLap === 4) {
          //  break
      //  }
       //if (currentLap === 4) {
          //  continue
      //  }
       document.getElementById('result').innerHTML += `<h3>lap ${currentLap} is Completed </h3>`
      
    }
     
    document.getElementById('result').innerHTML += "<h1> You Won! </h1>"

    
   
})