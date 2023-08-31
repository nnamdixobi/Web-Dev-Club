// Wait for the HTML document to be fully loaded before running the JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Get references to various elements in the HTML document
    const questionContainer = document.getElementById("question-container");
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-button");

    // Define an array of quiz questions with choices and correct answers
    const questions = [
        {
            question: "What side of the website are you currently viewing?",
            choices: ["User-side", "Server-side", "Client-side"],
            correctAnswer: 2, // The correct answer is the second choice (index 2)
        },
        {
            question: "What does HTML stand for?",
            choices: ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "Hyper Tech Markup Language"],
            correctAnswer: 1, // The correct answer is the second choice (index 1)
        },
        {
            question: "What does CSS stand for?",
            choices: ["Cascading Style Sheet", "Creative Style Sheet", "Computer Style Sheet"],
            correctAnswer: 0, // The correct answer is the first choice (index 0)
        },
        {
            question: "What is CSS primarily used for?",
            choices: ["Writting text on webpages", "Styling web pages", "Publishing websites"],
            correctAnswer: 1, // The correct answer is the third choice (index 1)
        },
        {
            question: "What is JavaScript primarily used for?",
            choices: ["Styling web pages", "Building databases", "Adding interactivity to web pages"],
            correctAnswer: 2, // The correct answer is the third choice (index 2)
        },
    ];

    // Initialize variables to keep track of the current question and score
    let currentQuestionIndex = 0;
    let score = 0;

    // Function to load and display the current question and its choices
    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        choicesElement.innerHTML = "";
        // Create and add HTML elements for each answer choice
        currentQuestion.choices.forEach((choice, index) => {
            const choiceItem = document.createElement("li");
            choiceItem.textContent = choice;
            // Add an event listener to check the answer when a choice is clicked
            choiceItem.addEventListener("click", () => checkAnswer(index));
            choicesElement.appendChild(choiceItem);
        });
    }

    // Function to check the selected answer and provide feedback
    function checkAnswer(selectedIndex) {
        const currentQuestion = questions[currentQuestionIndex];

        if (selectedIndex === currentQuestion.correctAnswer) {
            score++; // Increase the score if the answer is correct
            feedbackElement.textContent = "Correct!";
        } else {
            feedbackElement.textContent = "Incorrect!";
        }

        nextButton.style.display = "block"; // Show the "Next Question" button
        choicesElement.style.pointerEvents = "none"; // Disable further clicks on choices
    }

    // Modify the "Next Question" button text based on the current question
    function updateButtonLabel() {
        if (currentQuestionIndex < questions.length - 1) {
            nextButton.textContent = "Next Question";
        } else {
            nextButton.textContent = "Submit"; // Change to "Submit" on the last question
        }
    }

    // Add an event listener to the "Next Question" button
    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion(); // Load the next question if there are more questions
            feedbackElement.textContent = ""; // Clear the feedback
            nextButton.style.display = "none"; // Hide the "Next Question" button
            choicesElement.style.pointerEvents = "auto"; // Enable choice clicks
            updateButtonLabel(); // Update the button label
        } else {
            showFinalScore(); // Display the final score when all questions are answered
            nextButton.style.display = "none"; // Hide the button at the end of the quiz
        }
    });

    // Function to display the final quiz score
    function showFinalScore() {
        questionContainer.style.display = "none"; // Hide the question container
        feedbackElement.textContent = `You scored ${score} out of ${questions.length} questions!`; // Display the score
    }

    // Load the first question and set the initial button label
    loadQuestion();
    updateButtonLabel();
});
