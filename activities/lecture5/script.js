// Create an array of possible answers
const magic8BallAnswers = [
    "100% Percent.",
    "Ask again please.",
    "Without a doubt.",
    "Do not reply on it.",
    "Yes, without a doubt definitely.",
    "I would say no for sure.",
    "It is looking good.",
    "Do not think I can tell you now.",
    "My sources say no.",
    "Yes, definitely.",
    "You may rely on it.",
    "Yes.",
    "Very doubtful.",
    "No.",
    "Most likely."
  ];
  
// Create a function to fetch the question the user has asked 	
function askQuestion() {
    const userQuestion = document.getElementById("userQuestion").value.trim();
    const answerDisplay = document.getElementById("answer");
   
  
// Our function should also check from an empty value
if (userQuestion === "") {
    answerDisplay.textContent = "I need you to please ask a question.";
    return;
}
  
// Select a random answer from your array 



const randomIndex = Math.floor(Math.random() * magic8BallAnswers.length);
const randomAnswer = magic8BallAnswers[randomIndex];

    

	
// Display the question and answer back to the user
answerDisplay.textContent = `"${randomAnswer}"`;
// And, log the question and answer to the console
console.log("Question:", userQuestion);

console.log("Answer:", randomAnswer);
} 
