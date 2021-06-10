const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dannymf0@gmail.com',
        subject: `Thanks for signing up, ${name}`,
        text: `Hey ${name}, I really hope you're enjoying the app. Please let me know if you have any feedback!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dannymf0@gmail.com',
        subject: `Goodbye, ${name}`,
        text: `So sad you decided to leave us, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}