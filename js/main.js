'use strict';

const questionTitle = document.querySelector('.question-title'),
      questionHTMLList = document.querySelector('.question-list'),
      btn50 = document.querySelector('.bnt50');

      import {costWiningColumn} from './costWinning.js';
      import {expCostWiningColumn} from './costWinning.js';
      import { questionsL} from './easyquestions.js';


let count = 0;

createQuestion();

function createQuestion() {
  questionTitle.innerHTML = '';
  questionHTMLList.innerHTML = '';
  questionTitle.innerHTML = questionsL[count].question;
  questionsL[count].answers.forEach(item => {
    questionHTMLList.innerHTML += `<li class="question-item">${item}</li>`;
  });
}



function getAnswer() {

  questionHTMLList.addEventListener('click', (e) => {
    console.log('есть клик');
    if(e.target.tagName !== 'LI') return;
    if(e.target.textContent == questionsL[count].correctAnswer) { //Если ответ правильный
      console.log(questionsL[count].correctAnswer);
      alert('все верно');
      count++;
      upWiningColumn();
      console.log(count);
      createQuestion();
    } else {
      alert('попробуй еще раз');
    }

  });
}

btn50.addEventListener('click', deleteTwoAnswer);

  function deleteTwoAnswer() { //50/50
  questionHTMLList.childNodes.forEach(item => {
    console.log(item.textContent);
    if(item.textContent == questionsL[count].incorrectAnswer[0] || item.textContent == questionsL[count].incorrectAnswer[1]) {
      item.textContent = '';
    }
  });
};

function upWiningColumn() {
  let winCount = 15 - count;
  console.dir(costWiningColumn.childNodes[winCount].classList.add('costWinRed'));
}  

getAnswer();


