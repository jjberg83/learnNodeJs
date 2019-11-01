const tid = 8000;
const intervall = 1000;
let tidTilNå = 0;

console.log(`En forsinkelse på ${tid / 1000} sekunder har blitt satt i gang.`);

const venteBeskjed = () => {
    tidTilNå += intervall;
    let prosent = Math.floor( (tidTilNå / tid) * 100 );
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Venter....${prosent}% `);
}

function visBeskjed() {
    clearInterval(mellomTid);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(`Sånn! Nå har du ventet i ${tid / 1000} sekunder.`);
}

const mellomTid = setInterval(venteBeskjed, intervall);
setTimeout(visBeskjed, tid);