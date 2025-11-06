class Shape{
    constructor(color){
        this.color=color;
    }
    area(){
        throw error('area can only be colculated for particular shapes not general shape');
    }
    getDescription(){
        return `shape with ${this.color} color`;
    }
;}

class Rectangle extends Shape{
    constructor(width,height,color){
        super(color);
        this.width=width;
        this.height=height;
    }
    area() {
        return this.width*this.height;
    }
    which_color(){
        console.log(`color is ${this.color}`)
    }
};

let rect=new Rectangle(2,4,"red");
console.log(rect.area());
rect.which_color();
console.log(rect.getDescription());