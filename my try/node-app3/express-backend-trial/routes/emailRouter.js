var express=require('express');
var bodyParser=require('body-parser'); // to take the value of email fom html 
var cors=require('./../cors');
const emailRouter =express.Router();
var nodemailer=require('nodemailer');

emailRouter.route('/')
.options(cors.cors,(req,res)=>{
    console.log("Coming email here");
    res.sendStatus(200);
    
})
// route which captures form details and sends it to your personal mail
.post(cors.cors,(req,res,next)=>{
    console.log("oooo",req.body.email)

     /*Transport service is used by node mailer to send emails, it takes service and auth object as parameters.
     here we are using gmail as our service 
     In Auth object , we specify our email and password
     */
    var transporter =nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'nikhiljam17@gmail.com', // owner emailid
            pass:'nikhil@123'             // owner password
        }
    });
     /*
    In mail options we specify from and to address, subject and HTML content.
    In our case , we use our personal email as from and to address,
    Subject is Contact name and 
    html is our form details which we parsed using bodyParser.
  */
    var mailOptions={
        from:'nikhiljam17@gmail.com', // replacing it with your owner email here
        to: req.body.email,  // replace it with user/[listofuser] emails
        subject:`NodeMailer Testing here`,
        html:`<h1>Node mailer Testing Successfull here</h1>
                <p> Time to celebrate </p> `,
        atachments:[
            {
                filename:'Tesla-Logo-640X590.jpg',
                path:'https://www.logocentral.info/wp-content/uploads/2020/04/Tesla-Logo-640X590.jpg'
            }
        ]        
    };
    /* Here comes the important part, sendMail is the method which actually sends email, it takes mail options and
   call back as parameter 
  */

    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log("The ERROR MESSAGE");
            console.log(error);
            res.send('error'); // if error occurs it would send the response to clients response
        }

        else{
            console.log('Email Sent:' + info.response);
            res.send('Sent Successfully') // if mail is sent successfully send sent successfully as the respomse
        }

    });
})

module.exports=emailRouter;

