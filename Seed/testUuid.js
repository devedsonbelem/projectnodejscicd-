const UserDto = require('../Dto/UsersDto');
const { db } = require('../Model/UsersModel');
const obj = new UserDto;
obj.gerarUuid();

obj.gerarPasswordCriptografada();

console.log(obj.uuid);
console.log(obj.passwordcript);
console.log(obj.verificarCriptografia());





db.users.insert({
    "cim": "288852",
    "nome": "edson belem",
    "email": "profedsonbelem@gmail.com",
    "password": "123456",
    "status": "success",
    "token": "token1",
    "uuid": "uuid-1",
    "dateCreated": ISODate("2022-10-01T00:00:00.000Z"),
    "dateUpdate": ISODate("2022-10-01T00:00:00.000Z")
});