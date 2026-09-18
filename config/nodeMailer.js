import nodemailer from 'nodemailer'

// Create a transporter using SMTP
export const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_KEY,
  },
});


export const sendmail = async({email,subjsct,text})=>{
    try{
        let info = await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to:email,
            subject: subject,
            text:text
        })
        console.log("Mail sent",info.messageId);

    }catch(error){
        console.error(error);
        throw new Error(error);
    }
}