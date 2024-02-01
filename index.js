//ask questions to get
//text
//text color
//shape - list options (circle, triangle, sqaure)
//shape color

const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type:'input',
            message: 'What is your desired logo text?',
            name: 'text',
        },
        {
            type:'input',
            message: 'What is your desired logo text color?',
            name: 'textColor',
        },
        {
            type:'input',
            message: 'What is your desired logo shape?',
            name: 'shape',
            choices: ['circle','triangle','sqaure'],
        },
        {
            type:'input',
            message: 'What is your desired logo shape color?',
            name: 'shapeColor',
        },
    ])
    .then((data)=>{}
    )


let shape;
if(user picked square){
    shape = new Sqaure(someCOlor)
} else if(user picked circle){
    shape = new Circle(someCOlor)
}else{
    shape = new Triangle(someCOlor)
}



`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${userTextAnswer}</text>
</svg>`