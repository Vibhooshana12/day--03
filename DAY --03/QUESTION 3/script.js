var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");//Making a Open request to the rest countries API
request.send();//sending request
request.onload =function()//status code =200
{
    var res = JSON.parse(request.response);
    for(var j = 0; j < res.length;j++)
    {   console.log(j+1)
        console.log("Name:",res[j].name.common)
        console.log("Region:",res[j].region)
        console.log("Subregion:",res[j].subregion)
        console.log("Population:",res[j].population)
    }

}