console.log("in-class-4.js loaded!");
const numsArray = [1,2,3,4,5];

for (let i = 0; i < numsArray.length;i++){
    const getnum = numsArray[i];
    if(getnum % 2 == 0){
       console.log(getnum, "is even!");
    }
    else{

        console.log(getnum, "is odd!");
    }
}