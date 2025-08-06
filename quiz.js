// Identify the Correct Answer:
function checkAnswer() {
    const correctAnswer = "4";
// Retrieve the User’s Answer:
const userAnswer = document.querySelector('input[name="quiz"]:checked');
// check if any option was selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        // Step 3: Compare answers and give feedback
        const feedback = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done";
        }else {
            feedback.textContent = "That's incorrect. Try again!"
        }
} else {
    // No option selected
    document.getElementById("feedback").textContent = "Please select and answer.";
}

// Step 4: Attach event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);