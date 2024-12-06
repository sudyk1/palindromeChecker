const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const getString = () => {
  return textInput.value;
};

const cleanString = (string) => {
  let cleaned = string.replace(/[^a-zA-z0-9]/g, "").toLowerCase();
  cleaned = cleaned.replace(/[-_.]/g, "");
  return cleaned;
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

const isPalindrome = (string) => {
  const cleanedString = cleanString(string); // to compare with reversed
  // console.log(cleanedString);
  const reversedString = reverseString(cleanedString); // to compare with clean string
  // console.log(reversedString);

  return cleanedString === reversedString;
};

checkButton.addEventListener("click", (event) => {
  event.preventDefault();

  const string = getString();

  if (isEmpty(string)) {
    result.classList.add("hidden");
    alert("Please input a value");
    return;
  }

  const palindrome = isPalindrome(string);

  if (palindrome) {
    result.innerHTML = `${string} <span class="green">is</span> a palindrome`;
  } else {
    result.innerHTML = `${string} <span class="red">is not</span> a palindrome`;
  }
  result.classList.remove("hidden");
});

const isEmpty = (string) => {
  return string.length === 0;
};
