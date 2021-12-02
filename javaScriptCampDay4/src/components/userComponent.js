import {ElasticLogger, BaseLogger, MongoLogger} from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("user component yüklendi");

let logger = new BaseLogger();
let userService = new UserService(logger);

let user = new User(1,"altan","anay","aydın");
let user2 = new User(2,"dilek","can","istanbul");

userService.add(user);
userService.add(user2);

let customer = {id:1, firstName: "altan"}

//prototyping
customer.lastName = "anay";

console.log(customer.lastName);

console.log("-----------------");

userService.load();

let customerToAdd = new Customer(1,"Okan","avci","susurluk","sdsadsa");
customerToAdd.type = "customer";
userService.add(customerToAdd);
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted());
console.log(userService.getCustomerById(1));
console.log(userService.listCustomers());