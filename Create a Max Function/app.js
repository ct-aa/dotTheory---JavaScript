const max = (firstNumber, secondNumber) => {
    if (firstNumber > secondNumber) {
        return firstNumber;
    } else if (secondNumber > firstNumber) {
        return secondNumber;
    }
};

console.log(max(9, 28));
