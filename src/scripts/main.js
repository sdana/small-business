const apiController = require("./apiController")
const $ = require("jquery")

apiController.getEmployees()
    .then((response) =>{
        response.forEach(element => {
            let sectionEl = $("<section></section>")
                sectionEl.append($(`<p>${element.name}</p>`))
            apiController.getComputer(element.compId).then(response => { sectionEl.append(`<p>${response[0].model}</p>`); apiController.getDepartment(element.deptId).then(response => { sectionEl.append(`<p>${response[0].dept}</p>`) })})
                $("#main-div").append(sectionEl)
            })
        });