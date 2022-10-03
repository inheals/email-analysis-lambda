var simpleParser = require("mailparser").simpleParser;
var expressions = require("./utils/regex");

module.exports.hello = async (event) => {
  const {email , appName} = event
// const {email , appName} = {
//   email: `[http://l.flipkart.com/t/open/Pqt5dGC5tS9HKrZzbsZoVI7MNe8B2zIOaIvOqDOaC_5jG_br77Pl1XYUs214iGawCG-v5NWjP_yAwuLdKUp0VmbypM4BJ9mJx0IodGJjuqN3j9uKgTYxjWk9-aw-gonQdGr7YMoNo9yCPEx8pC57B41KSVWcNm9Tlm76gofVCdbLF_tcvk8pAXbkKgc6oqwxUcczdVqtCeLS4BFXGLPCKZaHjFStykN7L76bP0ZVdhJA2HRS-JYAtSVcm3hwM-9kt3gzknh8fxKy1I05zHuHy38_ePgjSNsr3rffxayPSOyMTNkb66Cou3rBsqEPfsZpRmwE8BSF6bq_WGTYarRSqQ==?e=true]

//   Flipkart.com
//   [https://img1a.flixcart.com/www/email/images/20170217-182335-2017-02-17.png]
//   [http://l.flipkart.com/t/click/ioUdrLOVu4babyFxhzpH7TjGynp8L5H_QOCxupKAfugs6ToZANjbd5IYNrFvnfwfOYsBx6julLe3AnEWsOsB2dflAA5Js8BDJirrsoaMhKpFuva2KdNwoW8gYPS9gfbzBaPPG8vekuIIKeJQX5wxwcc97FFxPYfd1QkK17BNkDn5QGBhPoryXwtFVrWiV6fEBjlBRMYDN_zryyVgYeXFj9MxchaGJFHIHybB_iY5Rdyw3Ef9jM5BPqW-0M3FInNCLhXsjvV-swamdfmCwPoZCo6eTfzFucB-WuaNLdmzL_MGt4wz0lODGcCJnn_xl7U18Qf_5rdRK0GZT6tiIcj6q0RFzD5tDHnGUJTPrYd3mxjwb372QFzYEZUF99i7JyAxnF64tsbyONogQD7832Hhl4lmeEmljHMSPNUwPBAwCMHixFg12l7kWs_zoBSGEkK8dopyf4TClroM0zQ1QWWr0EnkAGN6OVyD3gX_I41cj1oFl4A07aO_Rl6CcdE6oqJdabYYmVtIz-gHXksWmwuXzw==?e=true]
  
//   Hi Biswajit
  
//   Greetings from Flipkart.
  
//   Thanks for using Flipkart Pay Later. We've received Rs 199.0 towards your August
//   bill.
  
  
  
//   We would love to get your feedback.
  
//   How was your Flipkart Pay Later bill payment experience?`,
//     appName:'Flipkart Pay Later'
//   }
  
  a = email.replace(/\*|_/g, "").replace(/\<|_/g, "").replace(/\>|_/g, "").replace(/\r\n|\r|\n|_/g, " ").replace(/\s\s+/g, ' ').replace(/[\[\]]+/g,'')
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
