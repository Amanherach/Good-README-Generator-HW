const inquirer=require("inquirer")
inquirer.prompt([
    {
        type:"input",
        name:"title",
        message:"what is the title?"
    },
    {
        type:"input",
        name:"description",
        message:"what is the description?"
    },
    {
        type:"input",
        name:"table",
        message:"what is the table of contents?"
    },
    {
        type:"input",
        name:"installation",
        message:"what is the installation?"
    },
    {
        type:"input",
        name:"usage",
        message:"what is the usage?"
    },
]).then(function(answers){
    console.log(answers)
})