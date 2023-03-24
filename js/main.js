'use strict';

const questionTitle = document.querySelector('.question-title'),
      questionHTMLList = document.querySelector('.question-list'),
      btn50 = document.querySelector('.tips__50');

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

// function classAdd() {
//   e.target.classList.add('correctAnswer');
// }

function getAnswer() {

  questionHTMLList.addEventListener('click', (e) => {
    console.log('есть клик');
    if(e.target.tagName !== 'LI') return;
    if(e.target.textContent == questionsL[count].correctAnswer) { //Если ответ правильный
      // e.target.classList.add('correctAnswer');

      function classAdd() {
        e.target.classList.add('correctAnswer');
      }
      setTimeout(classAdd, 1000);

      console.log(questionsL[count].correctAnswer);

      // alert('все верно');
      // upWiningColumn();
      setTimeout(upWiningColumn, 1200);
      count++;
      // console.log(count);
      setTimeout(createQuestion, 2000)
      // createQuestion();
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
  console.log(count);
  costWiningColumn.childNodes[count].classList.add('costWinGold');
  if(costWiningColumn.childNodes[count-1]) {
    costWiningColumn.childNodes[count-1].classList.remove('costWinGold');
  }
}  

getAnswer();
