var simpleParser = require("mailparser").simpleParser;
var expressions = require("./utils/regex");

module.exports.hello = async (event) => {
  // const {email , appName} = event
const {email , appName} = {
  email: `Content-Type: text/plain; charset="UTF-8"
  Content-Transfer-Encoding: quoted-printable
  
  ---------- Forwarded message ---------
  From: Sitesh Biswal <siteshbiswal35@gmail.com>
  Date: Tue, Sep 6, 2022 at 11:25 PM
  Subject: Fwd: Payment of =E2=82=B9265.74 received.
  To: <padhisiddharth31@gmail.com>
  
  
  
  ---------- Forwarded message ---------
  From: Aditya Chandra Biswal <rajabiswal621@gmail.com>
  Date: Tue, 6 Sep 2022, 10:37 pm
  Subject: Fwd: Payment of =E2=82=B9265.74 received.
  To: <siteshbiswal35@gmail.com>
  
  
  
  ---------- Forwarded message ---------
  From: Simpl <simpl.alerts@simpl-mails.com>
  Date: Sat, 3 Sep, 2022, 9:41 am
  Subject: Payment of =E2=82=B9265.74 received.
  To: ADITIYA CHANDRA <rajabiswal621@gmail.com>
  
  
  [image: Simpl Logo]
  <http://p75s2kt4.r.ap-south-1.awstrack.me/L0/http:%2F%2Fgetsimpl.com/1/0109=
  0183018c011d-0395fb0e-0d9a-43cd-b35e-79892c30e9db-000000/OzzEjX0dPmejp1FEna=
  sSGQidFOw=3D66>
  Hi ADITIYA CHANDRA, *=E2=82=B9*265.74 has been received for your =EF=BB=BFS=
  impl account on
  3rd September 2022, 09:40 am.
  [image: Simpl]
  <https://p75s2kt4.r.ap-south-1.awstrack.me/L0/https:%2F%2Fgetsimpl.com%2F/1=
  /01090183018c011d-0395fb0e-0d9a-43cd-b35e-79892c30e9db-000000/Y2X-Ni20xgSk4=
  dNtyIZCqn2xR58=3D66>
  [image: Simpl on Twitter]
  <https://p75s2kt4.r.ap-south-1.awstrack.me/L0/https:%2F%2Ftwitter.com%2Fget=
  simpl/1/01090183018c011d-0395fb0e-0d9a-43cd-b35e-79892c30e9db-000000/2d8hGj=
  vgt4XJv_T0fetB2JSeqME=3D66>
  [image:
  Simpl on Facebook]
  <https://p75s2kt4.r.ap-south-1.awstrack.me/L0/https:%2F%2Fwww.facebook.com%=
  2Fgetsimpl/1/01090183018c011d-0395fb0e-0d9a-43cd-b35e-79892c30e9db-000000/n=
  xxeosoTL1dN_zJWLgUSINTfXKA=3D66>
  [image:
  Simpl on Instagram]
  <http://p75s2kt4.r.ap-south-1.awstrack.me/L0/http:%2F%2Finstagram.com%2Fget=
  simpl%2F/1/01090183018c011d-0395fb0e-0d9a-43cd-b35e-79892c30e9db-000000/o2y=
  B956w4IyvHU473YI6ZHkpNI4=3D66>
  [image:
  Simpl on LinkedIn]
  <https://p75s2kt4.r.ap-south-1.awstrack.me/L0/https:%2F%2Fwww.linkedin.com%=
  2Fcompany%2Fsimplhq/1/01090183018c011d-0395fb0e-0d9a-43cd-b35e-79892c30e9db=
  -000000/stkPh0UUFmsW5Fc-8XyuOz4_siI=3D66>
  ------------------------------
  View Dashboard
  <http://p75s2kt4.r.ap-south-1.awstrack.me/L0/http:%2F%2Fgetsimpl.com%2Fdash=
  board/1/01090183018c011d-0395fb0e-0d9a-43cd-b35e-79892c30e9db-000000/G6apXy=
  SdyfWiSqKBbNyt5pjX96w=3D66>
  Read
  FAQs
  <http://p75s2kt4.r.ap-south-1.awstrack.me/L0/http:%2F%2Fgetsimpl.com%2Fhelp=
  /1/01090183018c011d-0395fb0e-0d9a-43cd-b35e-79892c30e9db-000000/E0f14QcS939=
  8HbjRLW2MwMF6RRY=3D66>
  Terms
  and Conditions
  <http://p75s2kt4.r.ap-south-1.awstrack.me/L0/http:%2F%2Fgetsimpl.com%2Fterm=
  s-and-conditions/1/01090183018c011d-0395fb0e-0d9a-43cd-b35e-79892c30e9db-00=
  0000/kUzjCjpp_tS8kT1TOVYMlQKvIB0=3D66>
  Privacy
  Policy
  <http://p75s2kt4.r.ap-south-1.awstrack.me/L0/http:%2F%2Fgetsimpl.com%2Fpriv=
  acy-policy/1/01090183018c011d-0395fb0e-0d9a-43cd-b35e-79892c30e9db-000000/J=
  V1akYZDqrpE6b0NJMmHOh8XsyA=3D66>
  Get the app: [image: Simpl on Twitter]
  <https://p75s2kt4.r.ap-south-1.awstrack.me/L0/https:%2F%2Fclick.getsimpl.co=
  m%2Fvyhm%2F4271020e/1/01090183018c011d-0395fb0e-0d9a-43cd-b35e-79892c30e9db=
  -000000/VIKq8t4YClRSJgnuzDLL6X8PKE0=3D66>
  [image:
  Simpl on Twitter]
  <https://p75s2kt4.r.ap-south-1.awstrack.me/L0/https:%2F%2Fclick.getsimpl.co=
  m%2Fvyhm%2F4271020e/2/01090183018c011d-0395fb0e-0d9a-43cd-b35e-79892c30e9db=
  -000000/zJMKb9mho2LsIHvGeljoQq-6Ud4=3D66>
  
  =C2=A9 Simpl 2021. 1st & 2nd Floor, Kagalwala House, Plot No. 175, BHD Metr=
  o
  House, CST Road, Kalina, BKC, Santacruz (E), Mumbai - 400 098`,
    appName:'simpl'
  }
  
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
