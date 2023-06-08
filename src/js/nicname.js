export class Validator {
    constructor(name) {
      this.name = name;
    }
  
    validateUsername(name) {
      let result = name.match(/\d{4,}/g);
  
      if (result == null) {
        let resultAll = name.match(/^[a-z]+([-_]?[a-z]?[0-9]{0,3})+[a-z]+$/g);
        if (resultAll != null) {
          console.log(resultAll + " ok вы молодец");
          return true;
        } else {
          console.log("ошибка");
          return false;
        }
      } else {
        console.log("ошибка");
        return false;
      }
    }
  }
  
  let userName = new Validator();
  
  userName.validateUsername("ff555-66h555h_kk3s");