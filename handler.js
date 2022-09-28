var simpleParser = require("mailparser").simpleParser;
var expressions = require("./utils/regex");

module.exports.hello = async (event) => {
  const {email , appName} = event
// const {email , appName} = {
//   email: `[http://l.flipkart.com/t/open/vjgk43e3UHfT-3B-vJbCai-8VOBBI8OuTOwzN8-ta0Cvx6f1cchu74gB1n543NyJ0q0wiTSWDF5s2AZUmSjQM_pHya2rHX9svf2oneijTlIxpBKwtYVATv8FvfuuKwBbFB7SaHEehRtavunIrokYLqqXVi1SraMaDEPSrJgDQl2T7qcA9CxrRKJBh1UE1SVJCmkuoJ_QKbqNFD2CcGtVtyo97qvVnuSuAyrRwVKjkn52Y6wTRKDgHi4CPUAog-E_Fi3OZljjec7NqLE4LjKoslNqM4-OloPCLCfneksADYqLiu_6kwEBKKQNSD1ivO9T0kRZEh9Me8N8OKKVFYuMDEu5fUUs4jPLgLMVObrNSCo=?e=true]

//   Flipkart.com
//   [https://img1a.flixcart.com/www/email/images/20170217-182335-2017-02-17.png]
//   [http://delivery.nct.flipkart.com/QRFNSEO?id=88656=ehkDAAoOVwYCTAdcVgIAAQFXXFZXBwcAB1AAVFADWw8MAVIEVwZWVQRWV1xRAQAOAFtFUAYCAVEDBgJVUgEAU1sGAAgHAQMLUQhVU1UNWwkFVgpQAAAAVFFQWEsFBFUFC1cKCAQDWQMFAQdcVkhQTUYTAxoaUABeW0cERU0cDVRNS1VcW0YKUkZEGgYMWRdoYCV3ZnB7WltWTRcE&fl=URFHQAgZTl8aVlgME19ZS0ZNWlpYGxEdUV0IVF8dKwVIMmJeH10ZB0FbUx0Wc0IOXhBfW1xXXQNjeA0CBUM2fFMjfgF9bxN2cEFZJlF7blYGBHoCTFgLUUViFFlMHxF+VC9rX39sV2l8W3AnAWt3agA1FAMHTVFQSlU1Dgx1PFZ7PWp5c3IuVQZJdSEQWw1MClFBTGBrM3doWCpQA0g8fGordVZHAzJ7RUhRBi0ZeW1gD3dNcnZUa0NnDl19bS1tTRZJYwZiK2dmBlMIGm16DQMCd2xjZVxmdXgxaGJAO1MUNH5yS0UXQUd9QA0NRV0NBgEJc3BiBwNeBjtFDGdXBk4CSgNHATZ/DUlSKBcDSwtEBX9FUhkmBX54V1l8Y1NvcVZGdl9QOARYaUUXJGtuSWEAQRhaRDx7QFhSQHAEJmRvL0NDAUEpYFpqAl0BYU4MdSVSA2NZC2QLWQZFVUdaVlISQll6flhkf1V8BxpHD3NzL3xBQwcdBGIBJVgZHyoAWiJhZV1pUElBdnA/On4KU0ctTFtgUAlDAH0bY1sKVnFJEX9JCkYmYFtkXAcWcEl7WyROZFhrLwJVASZVQnUrWGMJflVHTjYDAGEFVTkZTRRKUHBsQAYCYAV4UQMGWyEETTwGZXZhBgUBQnBdJUILf0UGAHNcUxNRfQIpdFdlNFtQCndbVw4OUmdhZFEHf24JYCAOXmJsVEdKViRBWVc5QXokS0p8RiZpbV58VVVVSQpnKnBSCAk=&ext=ZT10cnVl]
  
//   Hi Biswajit,
  
//   Thank you for availing Flipkart Pay Later.
  
//   Please pay your dues for August 2022 by 05 September 2022 to avoid late payment
//   charges.
  
//   Thank you in advance for your prompt response to this email. We value your
//   continued business with us.
  
//   Amount Due ₹199.00
  
//   Click here to pay
  
//   [http://delivery.nct.flipkart.com/QRFNSEO?id=88656=ehkDAAoOVwYCTFcBAVFeWlBSDAwFUFACAVJTB1ZUAQ9YVFdVAQRZV1BVBVcGAwAOVgJFUAYCAVEDBgJVUgEAU1sGAAgHAQMLUQhVU1UNWwkFVgpQAAAAVFFQWEsFBFUFC1cKCAQDWQMFAQdcVkhQTUYTAxoaUABeW0cERU0cDVRNS1VcW0YKUkZEGgYMWRdoYCV3ZnB7WltWTRcE&fl=URFHQAgZTl8aVlgME19ZS0ZNWlpYGxEdUV0IVF8dEUFXEkZvbX4CZVZJYCgoDQ1wUDoAXUxVEXZZAi56fXRVBXw/AH13eiRYfnpuLlJ4bHh4FA4YQwMCZn1YGWdQXitwViNeBUBlMFRkfgFWEQFAU38EDEdydQ1TUXw0bn1RDUNzSFxfRm4JBQB5VlEFZEp6ZFRPc3dZOkpqY0xweGsUXAofZUZZfCkecQZHFAJlX319FlhiAlYsWENwVg9lVDphSVZrQlxZEwVOQlg9CmxgaAAMU0V7AVZtZloof319IlsNDXZcUVMlWUF2fBIUZ058eBJ2cVpsXGRGYS57UGQRfWgIXF1wQzREYFRZEjx7blpZCkhmcVoHVVN8UQB5cyJ6CCZBZ1APE0lNBwcyUkReCn8tfVZZQCMLA1kiaARfIlBmM1l+ekJVcWMIUAYIVn9NCgRBAgRxIXFid1VmDWMKXFdIQG9Xey98ZVYGIVpkWxRXTg58R3pWVXBUL38EXFpcUldZah98VnJxRwUOL15TYFVWVANBVQxjfXcte05nOXt+LWpSUF85SV1FeipaBQ9heAJ6Qnt5IkZkaDljTUQ1XVsrS1R5WhFpUQcCMC57CWNtUGp2dARIYHNTDABrBw1CDxVRQ34FMWBEY2YCJWBBUl8GUQN3eCtKCwUEelJQIn9VAWJBWXoYXmQIVTIoU10KH1F/fkZNEXVTAzRFV38SUQ8kSlhGdFIFZgZtBlR9Vl9rMUhxcFwgAGhdPm9BRS52QVFLcmR0NV9RR2IcB0VAVXw0FHZnay9IeAJMcHV4LE1PEgRyB2ZQAnpYcwYMTG5aYlJdUVtbCmN1SDBEQkY7f08yAWYDZygBUw0=&ext=ZT10cnVl]
  
//   Please ignore if already paid.`,
//     appName:'Flipkart Pay Later'
//   }
  
  a = email.replace(/\*|_/g, "").replace(/\<|_/g, "").replace(/\>|_/g, "").replace(/\r\n|\r|\n|_/g, " ").replace(/\s\s+/g, ' ').replace(/[\[\]']+/g,'')
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
