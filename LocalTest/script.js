// Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const startHalfBtn = document.getElementById('start-half-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const showAnswerBtn = document.getElementById('show-answer-btn');
const restartBtn = document.getElementById('restart-btn');

const questionCounterText = document.getElementById('question-counter');
const timerText = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// Modal Elements
const modal = document.getElementById('question-modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalQuestionBadge = document.getElementById('modal-question-badge');
const modalQuestionText = document.getElementById('modal-question-text');
const modalOptionsContainer = document.getElementById('modal-options-container');

// State
let allQuestions = [];
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = []; // Array of arrays containing selected indices
let revealedAnswers = []; // Array of booleans
let timer;
let timeLeft = 60 * 60; // 60 minutes in seconds
let TOTAL_QUESTIONS = 80;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // quizData is loaded from quiz-data.js
    if (typeof quizData !== 'undefined') {
        allQuestions = quizData;
    } else {
        alert("Error loading question database! (quiz-data.js missing)");
    }
});

startBtn.addEventListener('click', startQuiz);
startHalfBtn.addEventListener('click', startHalfQuiz);
prevBtn.addEventListener('click', () => navigate(-1));
nextBtn.addEventListener('click', () => navigate(1));
showAnswerBtn.addEventListener('click', revealAnswer);
restartBtn.addEventListener('click', () => {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
});

modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

function startHalfQuiz(){
    TOTAL_QUESTIONS = 40;
    startQuiz(true);
}

function startQuiz(isHalf) {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    // Select 80 random questions
    let shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    selectedQuestions = shuffled.slice(0, TOTAL_QUESTIONS);
    
    // Reset state
    currentQuestionIndex = 0;
    userAnswers = new Array(TOTAL_QUESTIONS).fill(null).map(() => []);
    revealedAnswers = new Array(TOTAL_QUESTIONS).fill(false);
    if(isHalf){
        timeLeft = 30 * 60
    }
    else{
        timeLeft = 60 * 60;
    }
    startTimer();
    renderQuestion();
}

function startTimer() {
    clearInterval(timer);
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            finishQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerText.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft < 300) { // last 5 minutes
        timerText.parentElement.style.animation = "pulse 1s infinite alternate";
    } else {
        timerText.parentElement.style.animation = "none";
    }
}

function renderQuestion() {
    const qData = selectedQuestions[currentQuestionIndex];
    questionCounterText.textContent = `Question: ${currentQuestionIndex + 1} / ${TOTAL_QUESTIONS}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / TOTAL_QUESTIONS) * 100}%`;
    
    // Clean and set question text
    questionText.textContent = qData.question;
    optionsContainer.innerHTML = '';
    
    // Determine if it's multiple choice
    const correctCount = qData.options.filter(o => o.correct).length;
    const inputType = correctCount > 1 ? 'checkbox' : 'radio';
    
    qData.options.forEach((opt, index) => {
        const isSelected = userAnswers[currentQuestionIndex].includes(index);
        const isRevealed = revealedAnswers[currentQuestionIndex];
        
        const label = document.createElement('label');
        label.className = 'option-label';
        if (isSelected) label.classList.add('selected');
        
        const input = document.createElement('input');
        input.type = inputType;
        input.name = `question-${currentQuestionIndex}`;
        input.value = index;
        input.className = 'option-input';
        input.checked = isSelected;
        
        if (isRevealed) {
            input.disabled = true;
            label.classList.add('disabled');
            if (opt.correct) {
                label.classList.add('correct');
            } else if (isSelected && !opt.correct) {
                label.classList.add('incorrect');
            }
        }
        
        input.addEventListener('change', (e) => {
            if (inputType === 'radio') {
                userAnswers[currentQuestionIndex] = [index];
                // Update styling for radio
                Array.from(optionsContainer.children).forEach(lbl => lbl.classList.remove('selected'));
                label.classList.add('selected');
            } else {
                if (e.target.checked) {
                    if (!userAnswers[currentQuestionIndex].includes(index)) {
                        userAnswers[currentQuestionIndex].push(index);
                    }
                    label.classList.add('selected');
                } else {
                    userAnswers[currentQuestionIndex] = userAnswers[currentQuestionIndex].filter(i => i !== index);
                    label.classList.remove('selected');
                }
            }
        });
        
        const span = document.createElement('span');
        span.className = 'option-text';
        span.textContent = opt.text;
        
        label.appendChild(input);
        label.appendChild(span);
        optionsContainer.appendChild(label);
    });
    
    updateControls();
}

function updateControls() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === TOTAL_QUESTIONS - 1) {
        nextBtn.innerHTML = '<i class="fa-solid fa-flag-checkered"></i> Finish test';
        nextBtn.classList.remove('primary-btn');
        nextBtn.classList.add('btn'); // Custom success style could be added
        nextBtn.style.backgroundColor = 'var(--success-color)';
        nextBtn.style.color = 'white';
    } else {
        nextBtn.innerHTML = 'Next <i class="fa-solid fa-arrow-right"></i>';
        nextBtn.style.backgroundColor = '';
        nextBtn.style.color = '';
        nextBtn.classList.add('primary-btn');
    }
}

function navigate(dir) {
    if (dir === 1 && currentQuestionIndex === TOTAL_QUESTIONS - 1) {
        if(confirm("Are you sure you want to finish the test?")) {
            finishQuiz();
        }
        return;
    }
    
    currentQuestionIndex += dir;
    renderQuestion();
}

function revealAnswer() {
    revealedAnswers[currentQuestionIndex] = true;
    renderQuestion();
}

function finishQuiz() {
    clearInterval(timer);
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    let correctTotal = 0;
    const resultTilesContainer = document.getElementById('result-tiles');
    resultTilesContainer.innerHTML = ''; // clear any existing tiles
    
    selectedQuestions.forEach((qData, qIndex) => {
        const correctIndices = qData.options.map((o, i) => o.correct ? i : -1).filter(i => i !== -1);
        const userSelected = userAnswers[qIndex] || [];
        
        // Exact match check
        const isCorrect = correctIndices.length === userSelected.length && correctIndices.every(val => userSelected.includes(val));
        
        if (isCorrect) {
            correctTotal++;
        }
        
        // Build tile
        const tile = document.createElement('div');
        tile.className = `result-tile ${isCorrect ? 'correct' : 'incorrect'}`;
        tile.textContent = qIndex + 1;
        tile.addEventListener('click', () => openModal(qIndex, qData, userSelected));
        resultTilesContainer.appendChild(tile);
    });
    
    const percentage = Math.round((correctTotal / TOTAL_QUESTIONS) * 100);
    
    const scoreCirclePath = document.getElementById('score-circle-path');
    const scoreTextPct = document.getElementById('score-text-percentage');
    const scoreDetails = document.getElementById('score-details');
    const passStatus = document.getElementById('pass-status');
    
    // Animation for ring
    setTimeout(() => {
        scoreCirclePath.setAttribute('stroke-dasharray', `${percentage}, 100`);
    }, 100);
    
    scoreTextPct.textContent = `${percentage}%`;
    scoreDetails.textContent = `You answered ${correctTotal} out of ${TOTAL_QUESTIONS} questions correctly.`;
    
    if (percentage >= 85) {
        passStatus.textContent = "Passed! Congratulations!";
        passStatus.className = "pass-status passed";
        scoreCirclePath.style.stroke = "var(--success-color)";
    } else {
        passStatus.textContent = "Failed. Minimum passing score is 85%.";
        passStatus.className = "pass-status failed";
        scoreCirclePath.style.stroke = "var(--danger-color)";
    }
}

function openModal(qIndex, qData, userSelected) {
    modalQuestionBadge.textContent = `Question ${qIndex + 1}`;
    modalQuestionText.textContent = qData.question;
    modalOptionsContainer.innerHTML = '';
    
    const correctCount = qData.options.filter(o => o.correct).length;
    const inputType = correctCount > 1 ? 'checkbox' : 'radio';
    
    qData.options.forEach((opt, index) => {
        const label = document.createElement('label');
        label.className = 'option-label disabled';
        
        const isSelected = userSelected.includes(index);
        
        const input = document.createElement('input');
        input.type = inputType;
        input.disabled = true;
        input.checked = isSelected;
        input.className = 'option-input';
        
        // Highlight logic for modal
        if (opt.correct) {
            label.classList.add('correct');
        } else if (isSelected && !opt.correct) {
            label.classList.add('incorrect');
        } else if (isSelected) {
            label.classList.add('selected');
        }
        
        const span = document.createElement('span');
        span.className = 'option-text';
        span.textContent = opt.text;
        
        label.appendChild(input);
        label.appendChild(span);
        modalOptionsContainer.appendChild(label);
    });
    
    modal.classList.remove('hidden');
}

// Add a simple pulse animation for timer dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.4); }
    100% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(230, 57, 70, 0); }
}
`;
document.head.appendChild(style);
