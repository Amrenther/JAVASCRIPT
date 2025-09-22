let weatherValue = "Snowy"
if (weatherValue === "Raining" || weatherValue === "hot") {
    document.getElementById('show').addEventListener('click',function(){
        document.getElementById('result').innerHTML = "Take an Umberalla!"
    })
   
}
 else if (weatherValue === "Sunny") {
     document.getElementById('show').addEventListener('click',function(){
        document.getElementById('result').innerHTML = "Wear a cooling Glass!"
         })
    
    }

else{
    document.getElementById('show').addEventListener('click',function(){
        document.getElementById('result').innerHTML = "Nothing Needed!"
         })

}