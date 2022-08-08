import wordBank from "../word-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet, todaysWord, randomNumber;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArray = result.split("\n");
      randomNumber = Math.floor(Math.random() * wordArray.length);
      todaysWord = wordArray[randomNumber];
      wordSet = new Set(wordArray);
    })
    .catch((err) => console.log("Error: ", err));

  return { wordSet, todaysWord };
};
