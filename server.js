const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const UsersModel = require("./Model/UsersModel");
const UsersDto = require("./Dto/UsersDto");

const app = express();


const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/dbusers");
mongoose.connection.once("open", () => { console.log("mongodb conectado") });

app.use(cors());
app.use(bodyParser.json());




app.post("/api/save", async (req, res) => {
    let usersObjeto = new UsersModel(req.body);
    let dto = new UsersDto;

    dto.setUuidUsers();
    dto.setPasswordUsers(req.body.password);

    usersObjeto.uuid = dto.getUuidUsers();
    usersObjeto.password = dto.getPasswordUsers();

    let user = await UsersModel.save(usersObjeto).then(resp => {
        return res.status(200).json(resp);
    }).catch(err => {
        return res.status(500).json({ "message": err.message });
    })

});


app.post("/api/save", async (req, res) => {
    let user = new UserModel(req.body);
       let dto = new UserDto();
           dto.gerarUuid();
           dto.gerarPasswordCriptografada();
     
          user.uuid = dto.uuid;
          user.password = dto.passwordcript;
    await UserModel.create(user).then(resp => {
      return res.status(200).json(resp);
    }).catch(err => {
      return res.status(500).json({ "error": "mongodb" });
    })
  });
  
  
  app.post("/api/login", async   (req,res)=>{
         let user = new UserModel(req.body);
        let dto = new UserDto();
        dto.gerarPasswordCriptografada();
          user.password = dto.passwordcript;
           let filter = {"email":req.body.email, "password": user.password};
           let update = {"status":"logado"};
        let query= await UserModel.findOneAndUpdate(filter, update,{
              new : true
        });
         
  
      });
  
  app.get("/api/sendmail", (req, res) => {
 
let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "68aaeff7db3e41",
      pass: "648ee8cf3d530e"
    }
  });
     var mainOptions = {
                  from: '"Tester" profedsonbelem@mail.com',
                  to: "porfiriosoares@hotmail.com",
                  subject: 'Test de email aula de node',
                  html: '<h2>E uma honra ser seu  professor</h2>'
              };
              console.log("html data ======================>", mainOptions.html);
              transport.sendMail(mainOptions, function (err, info) {
                  if (err) {
                      console.log(err);
                  } else {
                      console.log('Message sent: ' + info.response);
                  }
              });
              res.send("Email Enviado com Sucesso ...");
  })
  
  
  
  app.get("/api/sendmail", (req, res) => {
 
let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "68aaeff7db3e41",
      pass: "648ee8cf3d530e"
    }
  });
     var mainOptions = {
                  from: '"Tester" profedsonbelem@mail.com',
                  to: "porfiriosoares@hotmail.com",
                  subject: 'Test de email aula de node',
                  html: '<h2>E uma honra ser seu  professor</h2>'
              };
              console.log("html data ======================>", mainOptions.html);
              transport.sendMail(mainOptions, function (err, info) {
                  if (err) {
                      console.log(err);
                  } else {
                      console.log('Message sent: ' + info.response);
                  }
              });
              res.send("Email Enviado com Sucesso ...");
  });

  app.listen(4000, () => {
    console.log("Conetado ao Sistema");
  })
  
  

 

