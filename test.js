var prompt = require('prompt');
var colors = require("colors/safe");

 var input = {
    properties: {
      height: {
        pattern: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
        message: 'height should be a positive number!',
        required: true
      },
      width: {
      	pattern: /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
        message: 'height should be a positive number!',
        required: true
      }
    }
  };

  prompt.message = "Data input";
  prompt.delimiter = colors.red(" -> ");
  prompt.start();
 
  
  prompt.get(input, function (err, result) {

   	console.log('----------------------------------------------------------');

	console.log('Received Datas:');
    console.log('  The height is: ',colors.green(result.height));
    console.log('  The width is: ',colors.green(result.width));
    
	console.log('----------------------------------------------------------');
	console.log('Square Area: ',colors.green(result.height * result.width));
    	
   
  });