var car = {
    company:"bmw",
    model:"series",
    color: "Black"

};
//car.year = 2024;
car.year = function(){
    const year = new Date()
   return year.getFullYear()
}

console.log(car);
console.log(car.year());
console.log(new Date());


