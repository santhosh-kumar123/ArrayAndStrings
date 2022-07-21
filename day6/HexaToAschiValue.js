// let x = 25
// let y1 = x.toString(x);
// console.log(y1);
// console.log(typeof (y1));
// // ************************************************************
// let text = 1235;
// let result = text.toString();
// document.writeln(typeof result);
// console.log(result);
// console.log(typeof(result));
// // ************************************************************

// let y = String.fromCharCode(65," ",72, 69, 76, 76, 79)
// console.log(y);
// // ************************************************************

function hex_to_asci(str1) {
    // var hex = str1.toString();
    var str = "";
    // for (var n = 0; n < hex.length; n += 2){
        // str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
     str = String.fromCharCode(str1);

    // }
    console.log(typeof(str));
    return str
}
console.log(hex_to_asci(65));