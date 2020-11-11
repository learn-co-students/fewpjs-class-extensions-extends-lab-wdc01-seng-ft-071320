// Your code here

class Polygon{
    constructor(arr){
        this.arr = arr
    }

    get countSides(){
        return this.arr.length
    }

    get perimeter(){
        return this.arr.reduce((a, b) => a+b, 0)
    }
}

class Triangle extends Polygon{
    get isValid(){
        if((this.arr[0] + this.arr[1]) > this.arr[2] && (this.arr[1] + this.arr[2]) > this.arr[0] && (this.arr[0] + this.arr[2]) > this.arr[1]){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.arr.length !== 4) return false 
        if (!Array.isArray(this.arr)) return false;

        let firstSide = this.arr[0]

        return (this.arr[1] === firstSide && this.arr[2] === firstSide && this.arr[3] === firstSide)

    }

    get area(){
        return this.arr[0] ** 2
    }
}