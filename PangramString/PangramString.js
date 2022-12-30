var match
const checkContainsAllLeetter = (string) => {
    let strings = 'abcdefghijklmnopqrstuvwxyz'
    for (ch = 0; ch < string.length; ch++) {
        const gg = string[ch];
        match = strings.toString().toLowerCase().includes(gg.toString().toLowerCase())
    }
}
const checkPangram = () => {
    let string = "ABCDefghijklmnopqrstuvwxyz";
    checkContainsAllLeetter(string)
}
checkPangram()
if (match) {
    console.log("String is Pangram")
} else {
    console.log("String is not Pangram")
}