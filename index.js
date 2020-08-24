const inquirer=require("inquirer")
inquirer.prompt([
    {
        type:"input",
        name:"color",
        message:"what is your favorite color?"
    },
    {
        type:"input",
        name:"fruit",
        message:"what is your favorite fruit?"
    }
]).then(function(answers){
    console.log(answers)
})