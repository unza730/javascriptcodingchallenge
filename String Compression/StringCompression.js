let string = prompt("Enter stirng");
console.log("String ", string)
const compression1= (str)=> {
    console.log(str)
    let s = str.substring(0,1);
    for (let i=1; i<=str.length; i++){
        let curr = str.charAt(i);
        console.log("Current Value", curr);
        let prev = str.charAt(i-1);
        console.log("Previous Value", prev)
        if(curr!=prev){
            s+=curr;
        }
    }
    console.log("S", s)
    return s
}
const compression2 = (str)=> {
let s = str.substring(0,1);
let count =1;
for(let i=1; i<str.length; i++){
    let prev = str.charAt(i-1);
    let current = str.charAt(i);
    if(current==prev){
        count++
        console.log("Count from equal value of current nad prevoius", count)
    }else{
        if(count>1){
            console.log("After checking count >1 if body", count)
            s+=count;
            console.log("After checking count s+=count if body", count)
           
            count=1;
            console.log("After checking count=1 else body", count)
           
        }
        s+=current;
    }
    
}
if(count> 1){
    console.log("Outside if else body checking count value", count)
    console.log("Outside if else body checking s value", s)
   
    s+=count;
    
    console.log("Outside if else body checking s+=count value", s=s+count)
    console.log("Outside if else body checking count value", count)
    
    count=1;
}
console.log("Count", count)
console.log("String", s)
return s;
}
compression2(string)