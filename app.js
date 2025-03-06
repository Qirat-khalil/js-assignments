
let userName = ["qirat", "mesham", "qahroba","ashar"];

let rollNum = [255, 288, 655];

let userinp = +prompt("enter your name");
let usernum = +prompt("enter your number");

if(userName.includes(userinp)){   //includes check karta h k array mn value mojood h ya nhi
    console.log("Your child is present");
    
}
else if(rollNum.includes(usernum)){
    console.log("Your child is also present");
}
else{
    console.log("Your child is absent");
    
}


let std = "ali";
let userinp1 = prompt("name")

if(std == userinp ){
    console.log("Your child is present");
    
}else{
    console.log("Your child is absent");
}
