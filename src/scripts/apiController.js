const $ = require("jquery")

const apiController = Object.create({}, {
    "getEmployees": {
        value: function(){
            return $.ajax("http://localhost:3000/Employees")
        }
    },
    "getComputer": {
        value: function(compId){
            return $.ajax(`http://localhost:3000/Computers?compId=${compId}`)
        }
    },
    "getDepartment": {
        value: function(deptId){
            return $.ajax(`http://localhost:3000/Departments?deptId=${deptId}`)
        }
    }
})

module.exports = apiController