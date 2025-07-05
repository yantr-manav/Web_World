
fn main() {
    println!("{}",is_even(22)); // {} is used for dynamical variable
    println!("{}", fib(7));
    println!("{}",get_string_length("World is mine"))
}




// Write a function to check  whether a number is even or not!
fn is_even(num: i32) -> bool { //signed integer ( both positive and negative )of 32 bit number
    if num % 2 ==0 {
        return true;
        
    }
    return false;
}




// Function for finding fibonacci sequence
// 0 1 1 2 3 5 8 13 ... 

fn fib(num: u32)-> i32 {
    let mut _first =0;
    let mut _second = 1;
    if num == 0{
        return 0;
    }
    if num ==1{
        return 1;
    }
    for _ in 0..(num-2){
        let temp = _second;
        _second = _second + _first;
        _first = temp;
    }
    return _second;
}


//function to get_string_length by user input

fn get_string_length(s: &str)-> usize {
     s.chars().count()
}