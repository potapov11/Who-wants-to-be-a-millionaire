'use strict';

const questionTitle = document.querySelector('.question-title'),
      questionHTMLList = document.querySelector('.question-list'),
      btn50 = document.querySelector('.tips__50');

      import {costWiningColumn} from './costWinning.js';
      import {expCostWiningColumn} from './costWinning.js';
      import { questionsL} from './easyquestions.js';


let count = 0;

createQuestion();

getAnswer();

function createQuestion() {

  questionTitle.innerHTML = '';
  questionHTMLList.innerHTML = '';
  questionTitle.innerHTML = questionsL[count].question;
  questionsL[count].answers.forEach(item => {
    questionHTMLList.innerHTML += `<li class="question-item">${item}</li>`;
  });

}

//new changes

function getAnswer() {

  questionHTMLList.addEventListener('click', (e) => {
    // if(e.target.tagName !== 'LI') return;

    if(e.target.textContent == questionsL[count].correctAnswer) { 

      function classAdd() {
        e.target.classList.add('correctAnswer');
      }

      setTimeout(classAdd, 1000);

      setTimeout(upWiningColumn, 1200);

      setTimeout(function(){
        count++;
      }, 1300);

      setTimeout(createQuestion, 2000);

    } else {
      console.log('incorrect');
      e.target.classList.add('incorrectAnswer');
      createQuestion();
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
  costWiningColumn.childNodes.forEach((item, i)=> {
  });

  costWiningColumn.childNodes[count].classList.add('costWinGold');

  if(costWiningColumn.childNodes[count-1]) {
    costWiningColumn.childNodes[count-1].classList.remove('costWinGold');
  }
}  
