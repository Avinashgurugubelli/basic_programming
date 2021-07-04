import { EmployeeModel } from './models/employee_model';
import express from 'express';


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('sample Node Project Running');
});

let employeeDetailsStore: EmployeeModel[] = [{
  id: 1,
  name: "Avinash G",
  dob: new Date(),
  isActive: true
}];

app.get('/api/v1/employee/', (req, res) => {
  res.send(employeeDetailsStore);
});

app.get('/api/v1/employee/:id', (req, res) => {
  const emp = employeeDetailsStore.find((e: EmployeeModel) => e.id === parseInt(req.params.id));
  if (!emp) {
    res.send("No Data Found");
  }
  else {
    res.send(emp);
  }
});

// app.get('/api/v1/employee/?id', (req, res) => {
//   const emp = employeeDetailsStore.find((e: EmployeeModel) => e.id === req.query.id);
//   if (!emp) {
//     res.send("No Data Found");
//   }
//   else {
//     res.send(emp);
//   }
// });

app.post('/api/v1/employee/', (req, res) => {
  let body  = req.body;
  console.log(req);
  console.log("received body: " + body);
  employeeDetailsStore.push(body);
  res.send(employeeDetailsStore);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

