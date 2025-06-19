const express = require("express");
const cors = require("cors");

const QUESTIONS_DATA = [
  {
    "question": "What is the capital of France?",
    "options": ["Paris", "London", "Rome", "Berlin"],
    "answer": "Paris"
  },
  {
    "question": "Who wrote the play 'Romeo and Juliet'?",
    "options": ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    "answer": "William Shakespeare"
  },
  {
    "question": "What is the largest planet in our solar system?",
    "options": ["Earth", "Jupiter", "Mars", "Venus"],
    "answer": "Jupiter"
  },
  {
    "question": "Which continent is known as the 'Dark Continent'?",
    "options": ["Asia", "Africa", "Europe", "Australia"],
    "answer": "Africa"
  },
  {
    "question": "In which year did World War II end?",
    "options": ["1945", "1939", "1918", "1965"],
    "answer": "1945"
  },
  {
    "question": "Which gas do plants absorb from the atmosphere?",
    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    "answer": "Carbon Dioxide"
  },
  {
    "question": "What is the smallest prime number?",
    "options": ["0", "1", "2", "3"],
    "answer": "2"
  },
  {
    "question": "What is the currency of Japan?",
    "options": ["Yen", "Won", "Dollar", "Rupee"],
    "answer": "Yen"
  },
  {
    "question": "Who painted the Mona Lisa?",
    "options": ["Michelangelo", "Leonardo da Vinci", "Raphael", "Van Gogh"],
    "answer": "Leonardo da Vinci"
  },
  {
    "question": "Which is the longest river in the world?",
    "options": ["Amazon", "Nile", "Yangtze", "Ganges"],
    "answer": "Nile"
  },
  {
    "question": "Who is known as the father of computers?",
    "options": ["Alan Turing", "Charles Babbage", "Tim Berners-Lee", "Bill Gates"],
    "answer": "Charles Babbage"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Earth", "Mars", "Saturn", "Venus"],
    "answer": "Mars"
  },
  {
    "question": "Which is the national animal of India?",
    "options": ["Lion", "Elephant", "Tiger", "Peacock"],
    "answer": "Tiger"
  },
  {
    "question": "How many continents are there on Earth?",
    "options": ["5", "6", "7", "8"],
    "answer": "7"
  },
  {
    "question": "Which country is famous for the Great Wall?",
    "options": ["India", "Japan", "China", "Russia"],
    "answer": "China"
  },
  {
    "question": "What is H2O commonly known as?",
    "options": ["Hydrogen", "Oxygen", "Water", "Acid"],
    "answer": "Water"
  },
  {
    "question": "Who discovered gravity?",
    "options": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    "answer": "Isaac Newton"
  },
  {
    "question": "What is the national language of Brazil?",
    "options": ["Spanish", "Portuguese", "English", "French"],
    "answer": "Portuguese"
  },
  {
    "question": "How many players are there in a football (soccer) team on the field?",
    "options": ["9", "10", "11", "12"],
    "answer": "11"
  },
  {
    "question": "Which organ pumps blood in the human body?",
    "options": ["Lungs", "Brain", "Liver", "Heart"],
    "answer": "Heart"
  }
]

const TODOS = [
  { "task": "Buy groceries", "completed": false },
  { "task": "Walk the dog", "completed": true },
  { "task": "Finish homework", "completed": false },
  { "task": "Call mom", "completed": true },
  { "task": "Clean the kitchen", "completed": false },
  { "task": "Read a book", "completed": false },
  { "task": "Pay electricity bill", "completed": true },
  { "task": "Water the plants", "completed": false },
  { "task": "Write blog post", "completed": false },
  { "task": "Attend online meeting", "completed": true },
  { "task": "Fix the leaking tap", "completed": false },
  { "task": "Update resume", "completed": true },
  { "task": "Schedule a dentist appointment", "completed": false },
  { "task": "Reply to emails", "completed": true },
  { "task": "Workout for 30 minutes", "completed": false },
  { "task": "Organize bookshelf", "completed": true },
  { "task": "Back up files", "completed": false },
  { "task": "Send birthday card", "completed": false },
  { "task": "Learn a new recipe", "completed": true },
  { "task": "Vacuum the living room", "completed": false }
]


function getRandomValue(start, end) {
  const range = end - start + 1;
  if (range <= 0) throw new Error("Invalid range");

  const max = Math.floor(0xFFFFFFFF / range) * range; // Avoid bias
  let rand;
  const array = new Uint32Array(1);

  do {
    crypto.getRandomValues(array);
    rand = array[0];
  } while (rand >= max);

  return start + (rand % range);
}


const app = express();
app.use(express.json());
app.use(cors());


app.get("/questions", (req, res) => {
  let questions = [];

  const randomAmount = getRandomValue(1, QUESTIONS_DATA.length - 1);
  for (let i = 0; i < randomAmount; i++) {
    questions.push(QUESTIONS_DATA[getRandomValue(0, QUESTIONS_DATA.length)])
  }

  res.json(questions.map(q => q && q));
  return;
})

app.get("/todos", (req, res) => {
  let todos = [];

  const randomAmount = getRandomValue(1, TODOS.length);
  for (let i = 0; i < randomAmount; i++) {
    todos.push(TODOS[getRandomValue(0, TODOS.length - 1)]);
  }

  res.json(todos.map(q => q && q));
  return;
})


app.listen(3000, () => { console.log("server running on port 3000") })
