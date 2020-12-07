const nodemailer=require('nodemailer');
let transport =nodemailer.createTransport({
    host:'smtp.mailtrap.io',
    port:2525,
    auth:{
        user:'',
        pass:'',
    }
})