"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var myValidator = new ZipCodeValidator_1.ZipCodeValidator();
var isZipCode = myValidator.isAcceptable('10234');
console.log(isZipCode);
