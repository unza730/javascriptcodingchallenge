// ===================================================================
// ########## Longest Substring without repeating ################
// ************************************************************************
// function lengthOfLongestSubstring(str) {
//     let a_pointer = 0;
//     let b_pointer = 0;
//     let max = 0;

//     let charSet = new Set();

//     while (b_pointer < str.length) {
//         if (!charSet.has(str.charAt(b_pointer))) {
//             console.log("CharSet", charSet)
//             console.log("b pointer==", (b_pointer))
//             console.log("str.charAt(b_pointer)==", str.charAt(b_pointer))
//             console.log("!charSet.has(str.charAt(b_pointer))==", !charSet.has(str.charAt(b_pointer)))
//             charSet.add(str.charAt(b_pointer));
//             console.log("charSet.add(str.charAt(b_pointer))==", charSet.add(str.charAt(b_pointer)))
//             b_pointer++;
//             max = Math.max(charSet.size, max);
//             console.log("max", `"#${Math.max(charSet.size, max)}#"`)
//         } else {
//             charSet.delete(str.charAt(a_pointer));
//             a_pointer++;
//         }
//     }

//     return max;

// }
// console.log("Length", lengthOfLongestSubstring("abcacbab"))
// ========= Simple Logic Without console =============
function lengthOfLongestSubstring(str) {
    let a_pointer = 0;
    let b_pointer = 0;
    let max = 0;

    let charSet = new Set();

    while (b_pointer < str.length) {
        if (!charSet.has(str.charAt(b_pointer))) {
            charSet.add(str.charAt(b_pointer));
            b_pointer++;
            max = Math.max(charSet.size, max);
        } else {
            charSet.delete(str.charAt(a_pointer));
            a_pointer++;
        }
    }

    return max;

}
console.log("Length", lengthOfLongestSubstring("abcacbab"))
// ============= OutPut ==================
// =========== Simple Logic without console
// ============= OutPut ==================
// CharSet Set(0) {size: 0}
//  b pointer== 0
//  str.charAt(b_pointer)== a
//  !charSet.has(str.charAt(b_pointer))== true
//  charSet.add(str.charAt(b_pointer))== Set(1) {'a'}
//  max "#1#"
//  CharSet Set(1) {'a'}
//  b pointer== 1
//  str.charAt(b_pointer)== b
//  !charSet.has(str.charAt(b_pointer))== true
//  charSet.add(str.charAt(b_pointer))== Set(2) {'a', 'b'}
//  max "#2#"
//  CharSet Set(2) {'a', 'b'}
// b pointer== 2
//  str.charAt(b_pointer)== c
// !charSet.has(str.charAt(b_pointer))== true
// charSet.add(str.charAt(b_pointer))== Set(3) {'a', 'b', 'c'}
// max "#3#"
// CharSet Set(2) {'b', 'c'}
// b pointer== 3
//  str.charAt(b_pointer)== a
// !charSet.has(str.charAt(b_pointer))== true
// charSet.add(str.charAt(b_pointer))== Set(3) {'b', 'c', 'a'}
// max "#3#"
// CharSet Set(1) {'a'}
// b pointer== 4
//  str.charAt(b_pointer)== c
// !charSet.has(str.charAt(b_pointer))== true
// charSet.add(str.charAt(b_pointer))== Set(2) {'a', 'c'}
// max "#3#"
// CharSet Set(2) {'a', 'c'}
// b pointer== 5
//  str.charAt(b_pointer)== b
// !charSet.has(str.charAt(b_pointer))== true
// charSet.add(str.charAt(b_pointer))== Set(3) {'a', 'c', 'b'}
// max "#3#"
// CharSet Set(2) {'c', 'b'}
// b pointer== 6
//  str.charAt(b_pointer)== a
// !charSet.has(str.charAt(b_pointer))== true
// charSet.add(str.charAt(b_pointer))== Set(3) {'c', 'b', 'a'}
// max "#3#"
// CharSet Set(1) {'a'}
// b pointer== 7
//  str.charAt(b_pointer)== b
// !charSet.has(str.charAt(b_pointer))== true
// charSet.add(str.charAt(b_pointer))== Set(2) {'a', 'b'}
// max "#3#"
// longestsubstring.js:29 Length 3

// ============= Output ================