const orderController = require('../');
const employeeController = require('');

module.exports = (app) =>{

app.route('/api/employees').get(employeeController.getEmployees);
app.route('/api/employees/:id').get(employeeController.getEmployeeById);
app.route('/api/employees').post(employeeController.createEmployee);
}
