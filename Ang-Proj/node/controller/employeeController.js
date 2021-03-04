let employeeService = require(''); 


module.exports = {
    getEmployees: (req, res) => {
        return employeeService.getEmployees(req, res, (err, data) =>{
            if (err) return res.send(err);
            res.send(data);
        });
    },
    getEmployeeById: (req, res) => {
        return employeeService.getEmployeeById(req, res, (err, data) =>{
            if (err) return res.send(err);
            res.send(data);
        });
    },
    createEmployee: (req, res) => {
        return employeeService.createEmployee(req, res, (err, data) =>{
            if (err) return res.send(err);
            res.send(data);
        });
    }
}