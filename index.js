//ask questions to get
//text
//text color
//shape - list options (circle, triangle, sqaure)
//shape color
require(Triangle);
require(Sqaure);
require(Circle);

const inquirer = require('inquirer');

// const { Triangle, Sqaure, Circle } = require('./Lib/shapes');
// const { Cipher } = require('crypto');

function Shape(fillColor, textColor, shape,text){
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.shape = shape;
    this.text = text;
    this.render = function (){
        if (shape === 'circle'){
            return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.fillColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
        } else if (shape === 'triangle'){
            return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
        } else if (shape === 'square'){
            return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="100" y="50" fill="${this.fillColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
        }
    }
}

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
            type:'list',
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
    .then((data)=>{
       const filename = `logo.svg`;
       var fs = require('fs');
       const svgShape = new Shape(data.shapeColor, data.textColor, data.shape, data.text);

    fs.writeFile(filename, svgShape.render(), function (err) {
        if (err) throw err;
    console.log('Generated logo.svg!');
        });
    }
    )


// let shape;
// if(user picked square){
//     shape = new Sqaure(someCOlor)
// } else if(user picked circle){
//     shape = new Circle(someCOlor)
// }else{
//     shape = new Triangle(someCOlor)
// }



// `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   ${shape.render()}
//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${userTextAnswer}</text>
// </svg>`