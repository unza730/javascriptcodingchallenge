const splitWord=(str)=> {
    var s = ""
    let words=[]
    words = str.split(" ");
    console.log("Wrods", words)
    for(let i =0; i< words.length; i++){
      s = words[i]
      console.log("Stringff", s.charAt(0))
    }
}

let str = "LEarn with Krishna Sandeep";
splitWord(str)
