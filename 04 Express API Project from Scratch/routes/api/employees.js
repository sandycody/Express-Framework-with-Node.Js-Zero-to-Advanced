// This 'employees.js' is used for code clean-up and segregating the logic of routes in routes/api folder and finally exporting it and used in 'index.js'

const express = require('express');
const router = express.Router();
const employees = require('../../Employees');
const moment = require('moment');

// Retrieving all employees
router.get('/', (req, res) => {
    res.json(employees);
});

// Retrieving single employee
router.get('/:name', (req, res) => {
    // Note : The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function.
    const checkExists = employees.some(emp => emp.name === req.params.name);

    if (checkExists) {
        // We'll be using filter method to just iterate through all the employees and check if there is name match of an employee, then we can return the name
        res.json(employees.filter(emp => emp.name === req.params.name));
    } else {
        // 400 status code is for bad request
        res.status(400).json({ mssg: `Employee ${req.params.name} doesn't exist` });
    }
});

// Create Employee
router.post('/', (req, res) => {
    const newEmployee = {
        name: req.body.name,
        email: req.body.email,
        age: Math.round(Math.random() * 100),
        added: `${moment().format()}`
    }

    if (!newEmployee.name || !newEmployee.email) {
        res.status(400).json({ mssg: `Please include both name and email of an employee` });
    }

    employees.push(newEmployee);
    res.json(employees);
});

// Updating employee list

router.put('/:name', (req, res) => {
    const checkExists = employees.some(emp => emp.name === req.params.name);

    if (checkExists) {
        const updateEmployee = req.body;
        employees.forEach(emp => {
            if (emp.name === req.params.name) {
                emp.name = updateEmployee ? updateEmployee.name : emp.name;
                res.json({ mssg: `Employee updated`, emp });
            }
        })
    } else {
        res.status(400).json({ mssg: `Employee ${req.params.name} doesn't exist` });
    }
});

// delete request
router.delete('/:name', (req, res) => {
    const checkExists = employees.some(emp => emp.name === req.params.name);

    if (checkExists) {
        res.json({
            mssg: `Employee deleted`,
            employees: employees.filter(emp => emp.name !== req.params.name)
        });
    } else {
        res.status(400).json({ mssg: `Employee ${req.params.name} doesn't exist` });
    }
});

module.exports = router;