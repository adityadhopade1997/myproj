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
.post(cors.cors,(req,res,next)=>{
    var transporter =nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'nikhiljam17@gmail.com', // owner emailid
            pass:'nikhil@123'             // owner password
        }
    });

    var mailOptions={
        from:'nikhiljam17@gmail.com', // replacing it with your owner email here
        to:'adityadhopade18@gmail.com',  // replace it with user/[listofuser] emails
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

    transporter.sendMail(mailOptions,function(error,info){
        if(error){
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

