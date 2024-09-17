const {program} = require('commander');
const {generateKenken} = require('./js/kenken');
const {renderKenkenToConsole, csvOutput} = require('./js/render-cli');

program
    .version('1.0.0')
    .option('-s, --size <number>', 'Size of the KenKen puzzle, 2 - 20', parseInt)
    .option('-o, --operations <items>', 'Operations to use, comma-seperated without space between them: addition, subtraction, multiplication, division, max, min, range, mod, avg, par, gcd', (val) => val.split(','))
    .option('-d, --difficulty <number>', 'Difficulty level, 1 - 5', parseInt)
    .option('-m, --max-group-size <number>', 'Maximum group size, 2 - 8', parseInt)
    .option('-t, --torus', 'Use torus board')
    .option('-a, --amount <number>', 'Amount of KenKen puzzles to generate', parseInt)
    .option('-c, --csv', 'Output as CSV')
    .parse(process.argv);

const options = program.opts();

const defaultOptions = {
    size: 5,
    operations: {
        addition: true,
        subtraction: true,
        multiplication: true,
        division: true
    },
    difficulty: 1,
    maxGroupSize: 4,
    torus: false,
    seed: new Date().getTime(),
    amount: 1,
    csv: false,
};

const mergedOptions = {
    ...defaultOptions,
    ...options,
    operations: options.operations
        ? Object.fromEntries(
            Object.keys(defaultOptions.operations).map(op => [
                op,
                options.operations.includes(op)
            ])
        )
        : defaultOptions.operations
};

function generateKenkenFromConsole(settings) {
    if (settings.csv) {
        console.log('GroupIDs,Operations-Numbers,Solution, Torus');
    }
    for (let i = 0; i < settings.amount; i++) {
        const myKenken = generateKenken(settings);
        if (!settings.csv) {
            renderKenkenToConsole(myKenken);
        } else {
            csvOutput(myKenken)
        }
        settings.seed = Date.now() + performance.now();
    }
}

generateKenkenFromConsole(mergedOptions);