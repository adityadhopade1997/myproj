var nodemailer=require('nodemailer');
var transport =nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'nikhiljam17@gmail.com',
            pass:'nikhil@123'
        }
    }
)

// send out the email here

var mailOptions={
    from:'nikhiljam17@gmail.com',
    to:'adityadhopade18@gmail.com',
    subject:'gmail service: node mailer test email',
    text:'This is the Body of the mail',
    html:'<h2>this is the first message by the nodemailer</h2>'
}


transport.sendMail(mailOptions,function(error,info){
    if(error){console.log(error);}
    else{"Email has been sent .." +info.response}
})