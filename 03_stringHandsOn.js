console.log(`=============================Assignment 01:String Hands on==========================================`);
function stringHandsOn(){
    var givenStr='    Hey you are doing good, keep it up    ';
    console.log(`1.Given string is: ${givenStr}`);
    console.log(`2.Length of string is: ${givenStr.length}`);
    var resultTrim= givenStr.trim();
    console.log(`3.Given string after trim is: ${resultTrim} and Length of trimmed string is: ${resultTrim.length}`);
    var extraSpaces= givenStr.length-resultTrim.length;
    console.log(`4.Total number of extra spaces are: ${extraSpaces}`);
    console.log(`5.first character of given string is: "${resultTrim.charAt(0)}" and "${resultTrim.charAt(resultTrim.length-1)}"`);
    var words=resultTrim.split(" ");
    console.log(`6.Total number of words after trim is: ${words.length}`);
    console.log(`7.Index of word "good" is: ${givenStr.indexOf('good')}`);
    console.log(`8.Substring starting from index 22 using substring() is: ${givenStr.substring(22)} and by using slice() is:${givenStr.slice(22)}`);
    console.log(`9.Is string ends with word "up":${resultTrim.endsWith('up')}`);
    console.log(`10.Is string start with word "Hey":${resultTrim.startsWith("Hey")}`);
}
stringHandsOn();