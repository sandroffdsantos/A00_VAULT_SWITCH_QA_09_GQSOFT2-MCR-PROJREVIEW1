/** @format */

let number: number;

function arraySplit(number: number) {
    let string: string = number.toString();
    let commaPosition: number = string.indexOf(".");

    if (commaPosition > 0) {
        let firstHalf: string = string.slice(0, commaPosition);
        let secondHalf: string = string.slice(commaPosition + 1);
        let firstHalfsize: number = firstHalf.length;
        let secondHalfsize: number = secondHalf.length;

        if (firstHalfsize === secondHalfsize) {
            console.log("The halves are equal");
        } else if (firstHalfsize > secondHalfsize) {
            console.log("The first half is bigger");
        } else {
            console.log("The second half is bigger");
        }
    } else {
        console.log("No comma found");
    }
}

console.log(arraySplit(1234.56));
