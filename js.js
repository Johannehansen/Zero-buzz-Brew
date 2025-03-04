let step = 1;
let answers = [];

function nextQuestion(answer) {
    answers.push(answer);

    if (step === 1) {
        document.getElementById('question').innerText = 'Foretrækker du Pilsner, IPA eller Classic?';
        document.getElementById('options').innerHTML = `
            <div class="option" onclick="nextQuestion('Pilsner')">Pilsner</div>
            <div class="option" onclick="nextQuestion('IPA')">IPA</div>
            <div class="option" onclick="nextQuestion('Classic')">Classic</div>
        `;
    } else if (step === 2) {
        document.getElementById('question').innerText = 'Kan du lide din øl fyldig eller bitter?';
        document.getElementById('options').innerHTML = `
            <div class="option" onclick="nextQuestion('Fyldig')">Fyldig</div>
            <div class="option" onclick="nextQuestion('Bitter')">Bitter</div>
        `;
    } else if (step === 3) {
        let result = `Din perfekte øl er en ${answers[1]} der er ${answers[2]}!`;
        document.getElementById('question').innerText = result;
        document.getElementById('options').innerHTML = '';

        let imgSrc = '';
        if (answers[1] === 'Pilsner') imgSrc = '/images/øl1.png';
        else if (answers[1] === 'IPA') imgSrc = '/images/øl2.png';
        else if (answers[1] === 'Classic') imgSrc = '/images/øl3.png';

        document.getElementById('resultImg').src = imgSrc;
        document.getElementById('resultImg').style.display = 'block';
        document.getElementById('backButton').style.display = 'block';
    }
    step++;
}


document.getElementById("cta-button").addEventListener("click", function() {
    window.location.href = "Produkter.html"; // Link til produktsiden
})


