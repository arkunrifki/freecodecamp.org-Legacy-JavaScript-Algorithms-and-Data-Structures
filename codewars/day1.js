"Diggits vs Letters - 1";

// Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

// Digits consist of 0-9.
// Letters consist of a-z in upper or lower case.
// Ignore any other characters.

function digitsOrLetters(str) {
  let letters = 0;
  let digits = 0;

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      // cek huruf (a-z / A-Z)
      letters++;
    } else if (/[0-9]/.test(char)) {
      // cek angka (0-9)
      digits++;
    }
    // karakter lain diabaikan
  }

  if (digits > letters) {
    return "digits";
  } else if (letters > digits) {
    return "letters";
  } else {
    return "tie";
  }
}
