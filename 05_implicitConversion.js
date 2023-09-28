var result;
result = '3'+2;
console.log("1.Result=", result, "Type=",typeof result);
console.log(`Ans:"3" is string and 2 is number type but it is implicitly converted to string, so it is concatenated.`);

result = '3'+true;
console.log("2. Result=", result, "Type=",typeof result);
console.log(`Ans:"3" is string and true is boolean type but it is implicitly converted to string, so it is concatenated.`);

result = '4'- true;
console.log("3. Result=", result,"Type=",typeof result);
console.log(`Ans:"4" is string and true is boolean type but it is implicitly converted to number, so it is subtracted.`);

result = '4'-'2';
console.log("4. Result=", result, "Type=",typeof result);
console.log(`Ans:"4"  and '2' is string but both implicitly converted to number, so it is subtracted.`);


