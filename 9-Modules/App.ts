import { EmailValidator } from "./EmailValidator";

let email = "example@gamil.comm";
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(result);
