/** Section 82 Error Handling with Try Catch */
const user = {email: 'jdoe@gmail.com'};

try{
    // Produce a ReferenceError
    // myFunction();

    // Produce a TypeError
    // null.myFunction();

    // Will produce SyntaxError
    // eval('Hello world');

    // Will Produce a URIError
    // decodeURIComponent('%');

    if(!user.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }
} catch(e){
    // all error
    console.log(e);
    // // message only 
    // console.log(e.message);
    // // error type only
    // console.log(e.name);
    // console.log(e instanceof TypeError);
} finally{
    console.log('Finally runs regardless of result...');
}
console.log('Program continued..');

/** Section 83 Regular Expression(Part 1) - Evaluations function */
// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// // exec() - Return result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// // test() - Return true or false
// const result = re.test('Hello');
// console.log(result);

// // match() - Return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// // search() - Returns index of the first match if not found return -1
// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);

// // replace() - Return new string with some or all matches of a pattern
// const str = 'Hello there';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

/** Section 84 Regex (Part 2) - Metacharacter Symbols */
let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;     //Must start with
re = /world$/i;     //Must ends with
re = /^hello$/i;     //Must begin and end with
re = /h.llo/i;     //Matches any ONE character
re = /h*llo/i;      //Matches any character 0 or more times
re = /gre?a?y/i;    //Optional Character
re = /gre?a?y\?/i;  //Escape Character

// Brackets [] - Character Sets 
re = /gr[ae]y/i;    //Must be an a or e
re = /[GF]ray/i;    //Must be an G or F
re = /[^GF]ray/i;    //Match anything except a G or F
re = /[A-Z]ray/;    //Match any Uppercase letter
re = /[a-z]ray/;    //Match any Lowercase letter
re = /[A-Za-z]ray/;    //Match any letter
re = /[0-9]ray/;    //Match any 1 digit
re = /[0-9][0-9]ray/;    //Match any 2 digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;    //Must occur exatcly (m) amount of times
re = /Hel{2,4}o/i;  //Must occur exactly between (m,n) amount of times
re = /Hel{2,}o/i;   //Must occur at least {m} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Character Classes
re = /\w/;      // Word character - alphanumer or _
re = /\w+/;      // + = one or more
re = /\W/;      // Non-Word character(Symbol)
re = /\d/;      // Match any digit
re = /\d+/;      // Match any digit 0 or more times
re = /\D/;      // Match any Nod-Digit
re = /\s/;      // Match whitespace char
re = /\S/;      // Match non-whitespace char
re = /Hell\b/i;      // Word boundary(harus kata itu)

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y


// String to match
const str = 'Hello, welcome toxyasd hell';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    } else{
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);
