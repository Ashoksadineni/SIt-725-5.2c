 const express = require('express');
const path = require('path');
 const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/square', (req, res) => {
const num = parseFloat(req.query.num);console.log(num)
const num1 = parseFloat(req.query.num1);console.log(num1)
if (isNaN(num)||isNaN(num1)) {
    return res.send("Error: Please provide a valid number using query parameter 'num'.");

} 
const sum = num + num1;
const substraction = num - num1;
const multiplication = num * num1;
res.send(`The sum of ${num} and ${num1} is: ${sum} The substraction of ${num} and ${num1} is: ${substraction} The multiplication of ${num} and ${num1} is: ${multiplication}`);
}); 
app.listen(PORT, () => {

console.log(`Server is running on http://localhost:${PORT}`); });