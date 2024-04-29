//Use the rest countries 'API URL',and display all countries flags in the console.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");//Making a Open request to the rest countries API
request.send();//sending request
request.onload =function()//status code =200
{
    var res = JSON.parse(request.response);
    for(var i =0; i< res.length;i++)//iterate over each countries data and log the flag url to the console
    {
   // console.log(res[i].region)   
    console.log(i+1,res[i].flags.png)//display the flag of each country in the console
    }  
}
 



///