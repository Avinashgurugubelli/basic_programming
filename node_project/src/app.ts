import express from 'express';
import { Employee } from './sample';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('sample Node Project Running');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// Class object creation
let e = new Employee(10001, "Avinash", new Date(), true);
let e1 = new Employee(10002, "Avinash", new Date(), true);

e.printDetails();
e1.printDetails();