var myMap = new Map();
myMap.set(1,"Uno")
myMap.set(2,"dos")
myMap.set(3,"Tres")
myMap.set(4,"Cuatro")

console.log(myMap);

for(let [key,value] of myMap) {
    console.log(`key is ${key} and Value is ${value}`);
}
myMap.forEach((v,k)=>console.log(`${v} and key is ${k}`));
myMap.delete(2);
console.log(myMap);