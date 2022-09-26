var simpleParser = require("mailparser").simpleParser;
var expressions = require("./utils/regex");

module.exports.hello = async (event) => {
  const {email , appName} = event
// const {email , appName} = {
//   email: `

  
   
   
   
   
   
   
  
   
 
   
   
   
     
      
       
       
         
            
         
       
        
     
   
   
   
   
   
    
     
      
       
       
         
          
           
           
             
//   Hi Biswajit,   
             
           
           
           
           
             
//   Thank you for availing  Flipkart Pay Later.   






//   Please pay your dues for August 2022 by 05 September 2022 to avoid late payment charges. In case you are unable to pay the full amount, you can also pay a minimum due of  Rs. 79.90  (including a small convenience fee) on or before the due date to move the remaining amount to the next bill. Please check the attachment for more details.   






//   Thank you in advance for your prompt response to this email. We value your continued business with us.   






//   Amount Due  ₹199.00    






//   Click here to pay   






//   Please ignore if already paid.   






    













   
   
   











// `
// ,
//     appName:'Flipkart Pay Later'
//   }
  
  a = email.replace(/\*|_/g, "").replace(/\<|_/g, "").replace(/\>|_/g, "").replace(/\r\n|\r|\n|_/g, " ").replace(/\s\s+/g, ' ')
  console.log(a)
                        const reg = expressions.expressionData[appName].regex;
                        //console.log(reg)
                        const regData = expressions.expressionData[appName].returnData;
                        const arrLen = reg.length;
                        let ans = {appName: appName}
                        reg.forEach((key,index) => {
                          let re = new RegExp(key, "mi");
                          console.log(re)
                          let matches = a.match(re);
                          console.log(index,matches)
                          let response = {}
                          if(matches){
                                for (let i = 0;i < regData[index].length; i++) {
                                        response[regData[index][i]] = matches[i + 1];
                                        console.log(i,response)
                                      }

                          }
                          ans = {...ans, ...response}

                        //   
                        //console.log(response);
                        });
    return ans;

    // resolve(response)
    // console.log(response);


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
