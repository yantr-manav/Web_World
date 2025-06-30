// for 
array = [10,22 ,30,40, 50]
for (let num = 0; num < array.length; num ++){
    const element = array [num];
    if ( element == 22){
        // console.log("22 is the best")
    }
    // console.log(element)
}

for (let i = 0;i<=10; i++){
    for(let j = 0; j<=10; j++){
    //  console.log(`Inner Loop value is: ${j} and outer loop value is : ${i}`)  ;
    //  console.log(i+ '*'+j+' = '+ i*j) 
    }
}

// break and continue

for (index = 1; index<=20; index++){
    if ( index == 5){
        console.log("Detected 5")
        // break;
        continue;
    }
    console.log(`value of i is ${index}`)
}