let str = "Unza Unza";
var frequency = [];
// frequency = str.length;
let str1= [];
str1 = str.toLowerCase();
str1 = str1.split('')
console.log("Freq", frequency)
console.log("Str1 ", str1, typeof(str1));
for(let i=0; i<str1.length; i++){
     frequency[i] = 1;
     console.log("Freq", frequency[i])
     console.log("Outside of body of j loop Str[i]", str1[i])
     for(let j = i+1; j<str1.length; j++){
        console.log("Outside of if body to comparing Str[j]", str1[j])
        if(str1[i] === str1[j]){
            console.log("Str[i]===[j]","",str1[i],str1[j],str1[i]===str1[j], "Equal Wohoooo!");
            frequency[i]++;
            console.log("Freq", frequency[i])
            // console.log("Str[j]", str1[j])
            str1[j] = 0;
            // console.log("Freq", frequency[i])
        }
      
     }
}
for(let i=0; i<frequency.length; i++){
    if(str1[i]!=' ' && str[i] !='0'){
        console.log("Character", str1[i], ":", "Frquency", frequency[i])
    }
}