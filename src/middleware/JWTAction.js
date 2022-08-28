var jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = new class JWTObject {
  create() {
    let obj = { username: "admin", password: "0000", access: "user" };
    let token=jwt.sign(
      obj,
      process.env.key_JWT,
      {
        algorithm: "HS256",
        expiresIn: "1h",
      }
    );
    return token;
  }
  verify(token) {
    let data=null;
    try {
      let decode=jwt.verify(token,process.env.key_JWT)
      data=decode;
    } catch (error) {
      console.log(error);
    }
    return data;

  }
  // delete() {}
};
