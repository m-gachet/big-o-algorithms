// Source:  https://www.geeksforgeeks.org/binary-search-in-javascript/
function recursiveFunction(haystack, needle, start, end) {

    // Base Condition
    if (start > end) return false;

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key needle
    if (haystack[mid] === needle) return true;

    // If element at mid is greater than needle,
    // search in the left half of mid
    if (haystack[mid] > needle)
        return recursiveFunction(haystack, needle, start, mid - 1);
    else

        // If element at mid is smaller than needle,
        // search in the right half of mid
        return recursiveFunction(haystack, needle, mid + 1, end);
}

// Driver code and some examples
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length - 1)) {
    console.log("Element found!");
}
else {
    console.log("Element not found!");
}

x = 6;

if (recursiveFunction(arr, x, 0, arr.length - 1)) {
    console.log("Element found!");
}
else {
    console.log("Element not found!");
}