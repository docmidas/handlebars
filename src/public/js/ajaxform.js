var apiCall1;

$('form').submit(function(event){
  event.preventDefault();
  apiCall1 = new ApiCall($('input[name="apiUrl"]').val()); 
  $.ajax(apiCall1)
});  

function ApiCall(urlArg){
  this.type = 'get';
  this.url = urlArg;
  this.dataType = 'json';
  this.success = function(responseData){
    console.log(responseData);              
    getObjectImg(responseData);     
  };
  this.error = function(error){
    return console.log(error);
  };
  console.log("Heyoooo");  
  } 


function getObjectImg(argumentObject){
  console.log("getting images");
  for (var property in argumentObject) {
    if(typeof argumentObject[property] == 'string'){
      if(argumentObject[property].indexOf(".jpg") >= 0){
        console.log(argumentObject[property]);
        var picLink = argumentObject[property];
        var summarVar = document.createElement('p');
        document.getElementById('listOfTemps').appendChild(summarVar);
        summarVar.innerHTML= '<img src="' + picLink + '" />';
      }; 
    }else if(typeof argumentObject[property] == 'object'){
      getObjectImg(argumentObject[property]);
    }


  };
}
