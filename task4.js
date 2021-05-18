/*      SOLUTION TO THE  FIRST TASK,  NO 1 */

function convertFahrToCelsius(fahrenheit) {
    function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }

    if (Array.isArray(fahrenheit) == true) {
        console.log(fahrenheit, " is not a valid number but a/an Array")
    } else if (typeof fahrenheit !== "number" && (isNumeric(fahrenheit) == false)) {
        console.log(fahrenheit, " is not a valid number but a/an ", typeof (fahrenheit))
    } else {
        celsius = (fahrenheit - 32) * 5 / 9
        celsus = parseFloat(celsius).toFixed(4);
        return celsus
    }


}


/*  SOLUTION TO TASK , NO 2 */



function checkYuGiOh(num) {
    function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }
    if (typeof num == "number" || (isNumeric(num) == true)) {
        var arr = [];
        for (var i = 1; i <= num; i++) {
            if ((i % 2 == 0) & (i % 3 == 0)) {
                arr.push("yu-gi")
                continue
            } else if (i % 2 == 0 && i % 5 == 0) {
                arr.push("yu-oh")
                continue
            } else if (i % 3 == 0 && i % 5 == 0) {
                arr.push("gi-oh")
                continue
            } else if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
                arr.push("yu-gi-oh")
                continue
            } else if (i % 2 == 0) {
                arr.push("yu")
                continue
            } else if (i % 3 == 0) {
                arr.push("gi")
                continue
            } else if (i % 5 == 0) {
                arr.push("oh")
                continue
            } else {
                arr.push(i)
            }
        }

    }else{
        console.log("invalid parameter: ",num)
    }
    return arr;
}