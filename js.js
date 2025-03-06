let step = 1;  // Start på første spørgsmål
let answers = []; // Array til at gemme svarene

// Funktion der opdaterer spørgsmålet baseret på step-værdien
function showQuestion() {
    if (step === 1) { // første spørgsmål vises
        document.getElementById('question').innerText = 'Hvornår drikker du? I sportslige eller sociale sammenhænge?';
        document.getElementById('options').innerHTML = ` 
            <div class="option" onclick="nextQuestion('Sport')">Sport</div>
            <div class="option" onclick="nextQuestion('Social')">Social</div>
        `;
    } else if (step === 2) { // andet spørgsmål
        document.getElementById('question').innerText = 'Foretrækker du Pilsner, IPA eller Classic?';
        document.getElementById('options').innerHTML = ` 
            <div class="option" onclick="nextQuestion('Pilsner')">Pilsner</div>
            <div class="option" onclick="nextQuestion('IPA')">IPA</div>
            <div class="option" onclick="nextQuestion('Classic')">Classic</div> 
        `;
    } else if (step === 3) { // tredje spørgsmål
        document.getElementById('question').innerText = 'Kan du lide din øl fyldig eller bitter?';
        document.getElementById('options').innerHTML = `
            <div class="option" onclick="nextQuestion('Fyldig')">Fyldig</div> 
            <div class="option" onclick="nextQuestion('Bitter')">Bitter</div>
        `;
    } else if (step === 4) { // resultat
        let result = `Din perfekte øl er en ${answers[1]} der er ${answers[2]}!`;
        document.getElementById('question').innerText = result;
        document.getElementById('options').innerHTML = '';
        
        let imgSrc = '';

        // Logik for at vælge billede baseret på øltype og fyldighed/bitterhed
        if (answers[1] === 'Pilsner') {
            if (answers[2] === 'Fyldig') imgSrc = '/images/øl1.png';
            else if (answers[2] === 'Bitter') imgSrc = '/images/øl2.png';
        } else if (answers[1] === 'IPA') {
            if (answers[2] === 'Fyldig') imgSrc = '/images/øl5.png';
            else if (answers[2] === 'Bitter') imgSrc = '/images/øl6.png';
        } else if (answers[1] === 'Classic') {
            if (answers[2] === 'Fyldig') imgSrc = '/images/øl3.png';
            else if (answers[2] === 'Bitter') imgSrc = '/images/øl4.png';
        }

        // Sæt det valgte billede som resultatbillede
        document.getElementById('resultImg').src = imgSrc;
        document.getElementById('resultImg').style.display = 'block';
        document.getElementById('backButton').style.display = 'block';
    }
}

// Funktion der kaldes når et svar vælges
function nextQuestion(answer) {
    answers.push(answer);  // Tilføj svaret til arrayet
    step++; // Øg step for at gå videre til næste spørgsmål
    showQuestion(); // Opdater spørgeskemaet
}

// Funktion til at starte quizzen forfra
function restartQuiz() {
    step = 1;  // Nulstil step
    answers = [];  // Tøm svarene
    showQuestion(); // Opdater til første spørgsmål
}

// Start quizzen ved at vise første spørgsmål
showQuest
