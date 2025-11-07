const API_URL = "https://restcountries.com/v3.1/all?fields=flags"
function reqListener() {
const countriesData = JSON.parse(this.responseText);
for (let ind in countriesData){
 console.log(countriesData[ind].flags.png);   
    }
}
  
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", API_URL);
req.send();