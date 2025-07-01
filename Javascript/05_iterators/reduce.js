// Reduce method in Javascript

const myNums = [1,2,3,4]

 const myTotal = myNums.reduce((acc,currval)=>{
    console.log(`${acc} and ${currval}`)
    return acc+currval
 },0)
 console.log(myTotal)

 const shoppingCart = [
    {
        courseName: "App dev",
        price : 1999,
    },
        {
        courseName: "Web dev",
        price : 9999,
    },
        {
        courseName: "ML dev",
        price : 5999,
    },
        {
        courseName: "AI dev",
        price : 6999,
    },
 ]
 const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
 console.log(priceToPay)