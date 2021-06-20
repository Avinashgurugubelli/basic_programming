import { Address } from './person';
import { EmployeeModel } from './models/employee_model';
import { EmployeeWithInterfaceExample } from './employee_interface_example';
import express, { json } from 'express';
import { Employee } from './employee';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('sample Node Project Running');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Class object creation
// let e = new Employee(10001, "Avinash", new Date(), true);
// let e1 = new Employee(10002, "Tarun", new Date(), true);

// e.printDetails();
// e1.printDetails();

let employee1: EmployeeModel = {
  id: 145656,
  name: "MArtin",
  dob: new Date(),
  isActive: true
};

let address: Address = {
  city: "VSKP",
  addressLine: "sdsdsdsd",
  doorNumber: "512",
  pinCode: 560014,
  state: "AP",
  streetName: "sdsdsdsd"
}

let emp = new EmployeeWithInterfaceExample(employee1, address);

emp.printDetails();
emp.printAddress();


let x = emp.getDetails();
console.log("X value: "+ JSON.stringify(x));