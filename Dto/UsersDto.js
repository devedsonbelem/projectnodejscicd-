const  {v4  : uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

class UsersDto {
  constructor(_id = '', nome = '', email = '', password = '', token = '', uuid = '') {
    this._id = _id;
    this.nome = nome;
    this.email = email;
    this.password = password;
    this.token = token;
    this.uuid = uuid;
    this.newpassword = '';
  }

  toString() {
    return this._id + ',' + this.nome + "," + this.email + "," + this.password + "," + this.token + "," +
      this.uuid;
  }

  toJson() {
    return `{"_id": ${this._id}, "nome": ${this.nome},"email":${this.email},"password":${this.password},"uuid":${this.uuid}, 
    "token":${this.token} }`;
  }

  getNomeUsers() {
    return this.nome;
  }

  setNomeUsers(nomeUsers) {
    this.nome = nomeUsers;
  }

  gerarUuid() {
    this.uuid = uuidv4();
    return this.uuid;
  }

  setPasswordUsers(passwordUsers) {
    this.password = bcrypt.hashSync(req.body.passwordUser);
    return this.password;
  }

  getPasswordUsers() {
    return this.password;
  }

  verificarCriptografia() {
    return bcrypt.compareSync(this.password, this.passwordcript);
  }

}
//tst na hora

/*
var objto = new UsersDto(10,'edson','edson@gmail.com','123456','uuid 111','token 121212');
console.log("saída 1...")
  console.log(objto.toString());
  console.log(objto.toJson());

    objto.setPasswordUsers('123456');
    objto.setNomeUsers("edson Belem");
    console.log("saída 2...")
    console.log(objto.getPasswordUsers());
    console.log(objto.getNomeUsers());
    console.log(objto.toString());
    console.log(objto.toJson());
*/
//tst na hora

// var objto = new UsersDto(10,'edson','edson@gmail.com','123456','uuid 111','token 121212');
// console.log("saída 1...")
//   console.log(objto.toString());
//   console.log(objto.toJson());

//     objto.setPasswordUsers('123456');
//     objto.setNomeUsers("edson Belem");
//     console.log("saída 2...")
//     console.log(objto.getPasswordUsers());
//     console.log(objto.getNomeUsers());
//     console.log(objto.toString());
//     console.log(objto.toJson());

 module.exports = UsersDto;