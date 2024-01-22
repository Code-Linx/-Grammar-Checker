function checkGrammar() {
  const textInput = document.getElementById("textInput");
  const resultParagraph = document.getElementById("result");

  const sentences = textInput.value.split(". ");

  const incorrectSentences = sentences.filter((sentence) => {
    // Check if the sentence starts with a capital letter
    return sentence.trim() && sentence[0] !== sentence[0].toUpperCase();
  });

  if (incorrectSentences.length === 0) {
    resultParagraph.textContent = "Grammar is correct!";
    resultParagraph.style.color = "green";
  } else {
    resultParagraph.textContent =
      "Grammar issues found. Please check capitalization at the beginning of each sentence.";
    resultParagraph.style.color = "red";
  }
}
