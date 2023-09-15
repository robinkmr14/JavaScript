// forEach loop 

let dishes = ["briyani", "chicken", "mooton", "kadahichicken"];
dishes.forEach(element => {
    console.log(element);
});


// Object inside array

let blackList = [{userName: "Robin", reason: "Abusive content"},{userName: "Raj Kiran", reason:"Bad content"}];

console.log(blackList);

for(let i = 0; i < blackList.length ; i++){
    console.log(`User ${blackList[i].userName} blocked due to ${blackList[i].reason}`);
}