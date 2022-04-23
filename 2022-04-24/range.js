function range(n, startIndex = 0) {
    return Array(n).fill('').map((_, index) => index + startIndex);
}

console.log(range(7,2));