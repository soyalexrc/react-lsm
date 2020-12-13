const functions = require('firebase-functions');
const nodemailer = require("nodemailer")

exports.sendEmail = functions.https.onRequest((request, response) => {
    functions.logger.info("SendEmail", {structuredData: true});
    // tslint:disable-next-line
    sendWelcomeMail(request.query.email, request.query.name).then(data => {
        response.send(data);
    }).catch(err => {
        response.send(err);
    });
});

sendWelcomeMail = (email, name) => {
        const transport = nodemailer.createTransport({
            host: "smtp.googlemail.com",
            port: "465",
            secure: true,
            auth: {
                user: "luis.rodriguez@pranical.com",
                pass: "249950592693"
            }
        });

      return transport.sendMail({
                from: "luis.rodriguez@pranical.com",
                to: email,
                subject: "example001",
                html: `
      <h1>Hola ${name}</h1>
      <p>Gracias por contactarnos</p>
      <a href="https://google.com"> presiona aqui para ganar un premio <a>
    `
            });

}
