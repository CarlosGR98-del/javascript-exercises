const palindromes = function (palindrome) {
    const ALPHABET = '123456789abcdefghijklmnopqrstuvwxyz'.split("");
    palindrome = palindrome.trim().toLowerCase().split("");

    palindrome = palindrome.filter((element) => {
        if (ALPHABET.includes(element)) {
            return true;
        } else {
            return false;
        }
    }).join("");
    let reversePalindrome = palindrome.split("").reverse().join("");
    return palindrome === reversePalindrome;
};

// Do not edit below this line
module.exports = palindromes;
