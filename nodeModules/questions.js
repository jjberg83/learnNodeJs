const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "Hva er navnet ditt?",
    "Hvor bor du?",
    "Hva ønsker du å bruke Node til?",
    "Når tror du at du er god nok til å søke?"
];

collectAnswers(questions, answers => {
    console.log("Takk for at du tok deg tid til å svare. ");
    console.log(answers);
    process.exit();
});