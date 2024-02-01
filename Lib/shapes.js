class Shape{
    constructor(color){
        this.color = color;
    }
}

class Circle extends Shape{
    constructor(color){
        super(color);
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
class Triangle extends Shape{
    constructor(color){
        super(color);
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}
class Sqaure extends Shape{
    constructor(color){
        super(color);
    }
    render(){
        return `<rect width="200" height="100" x="100" y="50" fill="${this.color}" />`
    }
}

