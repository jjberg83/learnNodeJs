// process.stdout.write('Hello');
// process.stdout.write(' World! \n\n\n');

let questions = [
    'Hva heter du?',
    'Hva vil du heller gjøre enn å bære for Reidar?',
    'Hva er ditt foretrukne programmeringsspråk?',
];

const ask = (i = 0) => {
    console.log(`\n\n\n ${questions[i]}`);
    console.log(` > `);
}

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    const [navn, aktivitet, språk] = answers;
    console.log(`

Takk for svarene dine.

${navn}, husk at det ER mulig for meg å ${aktivitet} ved å bli knallgod i ${språk}! Thomas hos CIA koder.
    `)
});