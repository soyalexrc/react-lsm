const functions = require("firebase-functions")
//installar nodemailer -S (aun no lo hice)
const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth:{
    user: "alexcarvajal2404@gmail.com",
    pass: "pollito21"
  }
})

exports.welcomeMail = functions.firestore.document("callbackClients/{id}").onCreate((snap, context) => {
  const email = snap.data().email
  const name = snap.data().name
  return sendWelcomeMail(email, name)
})

//aux function

const sendWelcomeMail = (email, name) => {
  return transport.sendMail({
    from: "alex <contacto@holamundo.com>",
    to: email,
    subject: "example001",
    html: `
      <h1>Hola ${name}</h1>
      <p>Gracias por contactarnos, vete a la mierda :D</p>
      <a href="https://google.com"> presiona aqui para ganar un premio <a>
    `
  })
  .then(res => alert('done!'))
  .catch(err => alert(err))
}