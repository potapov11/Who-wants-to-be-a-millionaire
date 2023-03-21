'use strict';

const questionTitle = document.querySelector('.question-title'),
      questionHTMLList = document.querySelector('.question-list');

let count = 0;

createQuestion();

function createQuestion() {
  questionTitle.innerHTML = '';
  questionHTMLList.innerHTML = '';
  questionTitle.innerHTML = questionsL[count].question;
  questionsL[count].answers.forEach(item => {
    console.log(item);
    questionHTMLList.innerHTML += `<li class="question-item">${item}</li>`;
  });
}

function getAnswer() {
  questionHTMLList.addEventListener('click', (e) => {
    console.log('есть клик');
    if(e.target.tagName !== 'LI') return;
    if(e.target.textContent == questionsL[count].correctAnswer) {
      console.log(questionsL[count].correctAnswer);
      alert('все верно');
      count++;
      console.log(count);
      createQuestion();
    }
  });
}

getAnswer();

