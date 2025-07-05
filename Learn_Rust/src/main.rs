
// Write a function to check  whether a number is even or not!
fn main() {
    println!("{}",is_even(22)); // {} is used for dynamical variable
}

fn is_even(num: i32) -> bool { //signed integer ( both positive and negative )of 32 bit number
    if num % 2 ==0 {
        return true;
        
    }
    return false;
}