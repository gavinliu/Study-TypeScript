import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";

let myValidator = new ZCV();

let isZipCode = myValidator.isAcceptable('10234');

console.log(isZipCode);
