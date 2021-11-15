import {ElasticLogger, BaseLogger, MongoLogger} from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("user component yüklendi");

let logger = new BaseLogger();
let userService = new UserService(logger);

let user = new User(1,"altan","anay","aydın");
let user2 = new User(2,"dilek","can","istanbul");

userService.add(user);
userService.add(user2);

console.log(userService.list())
console.log(userService.getById(1));

let customer = {id:1, firstName: "altan"}

//prototyping
customer.lastName = "anay";

console.log(customer.lastName);