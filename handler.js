var simpleParser = require("mailparser").simpleParser;
var expressions = require("./utils/regex");

module.exports.hello = async (event) => {
  // const {email , appName} = event
const {email , appName} = {
  email: `
  Content-Type: text/plain; charset="UTF-8"
  Content-Transfer-Encoding: quoted-printable
  
  ---------- Forwarded message ---------
  From: Ashutosh Behera <ashutoshr099@gmail.com>
  Date: Sun, Jul 3, 2022 at 9:44 PM
  Subject: Fwd: Freecharge Pay Later Bill Generated!
  To: <padhisiddharth31@gmail.com>
  
  
  
  ---------- Forwarded message ---------
  From: Freecharge <noreply@freechargemail.in>
  Date: Thu, 5 May, 2022, 3:42 am
  Subject: Freecharge Pay Later Bill Generated!
  To: <ashutoshr099@gmail.com>
  
  
  Freecharge Pay Later bill
  
  Billing cycle: 05-04-2022 to 04-05-2022
  
  Total Due Amount
  *=E2=82=B9159.20*
  
  Due Date
  *05-05-2022*
  
  Hi Ashutosh,
  
  Thank you for using Freecharge Pay Later. Your bill details are given below=
  .
  
  Billing Cycle
  
  05-04-2022 - 04-05-2022
  ------------------------------
  
  Pay Later Balanced Utilized
  
  =E2=82=B9159.20
  ------------------------------
  
  Interest Applicable
  
  =E2=82=B90.00
  ------------------------------
  
  Total Due Amount
  
  =E2=82=B9159.20
  ------------------------------
  
  Due Date
  
  05-05-2022
  
  =E2=82=B90.00 Cashback
  
  You will receive cashback for the interest charged in your Freecharge
  Wallet within 72 hours after bill payment.
  
  Please pay your Freecharge Pay Later bill on the due date to *avoid late
  fee and avail the Pay Later Balance for the next cycle.*
  
  * To pay your Freecharge Pay Later bill, click below. *
  PAY BILL <https://freecharge.in/fc/app?action=3Dview&page=3Dpaylater>
  
  Download the Freecharge mobile app now
  <https://itunes.apple.com/in/app/freecharge-payments-wallet/id877495926?mt=
  =3D8>
  <https://play.google.com/store/apps/details?id=3Dcom.freecharge.android>
  
  For any queries or any concerns , write to us at care@freecharge.com |
  =C2=A9FCPT.
  
  Freecharge balance is issued by Axis Bank Limited.
  
  Freecharge: 2nd Floor, Plot No. 25, Pusa Road, New Delhi -110005
`
,
    appName:'Freecharge Pay Later bill'
  }
  
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
