function searchElement(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return i;
        }
    }

    return -1;
}

const haystack = [5, 8, 7, 88, -9];
const needle = 8;

console.log(searchElement(haystack, needle));