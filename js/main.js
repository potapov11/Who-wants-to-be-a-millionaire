'use strict';

const questionTitle = document.querySelector('.question-title'),
      questionHTMLList = document.querySelector('.question-list'),
      btn50 = document.querySelector('.tips__50');

      import {costWiningColumn} from './costWinning.js';
      import {expCostWiningColumn} from './costWinning.js';
      import { questionsL} from './easyquestions.js';
      import { questionRandItem} from './easyquestions.js'; //Случайный элемент массива
      import { questionRandItemHeavy} from './heavyquestion.js'; //Случайный элемент массива
      import { questionsHeavy} from './heavyquestion.js'; 
      
      console.log(questionRandItem);
      // let questionRandItemPlus = questionRandItem;
      let questionRandItemPlus = questionRandItem;

      console.log(questionsHeavy[questionRandItemHeavy].question);
let count = 0;
let deleteTwoAnswerCount = 0;
createQuestion();

getAnswer();

function createQuestion() {
  console.log(count);
  if(count >= 5) {
    questionRandItemPlus++;

    questionTitle.innerHTML = '';
    questionHTMLList.innerHTML = '';

    questionTitle.innerHTML = questionsHeavy[questionRandItemHeavy].question;

    questionsHeavy[questionRandItemHeavy].answers.forEach(item => {
    questionHTMLList.innerHTML += `<li class="question-item">${item}</li>`;
    });

  } else {

    questionRandItemPlus++;

    questionTitle.innerHTML = '';
    questionHTMLList.innerHTML = '';
    questionTitle.innerHTML = questionsL[questionRandItemPlus].question;

    questionsL[questionRandItemPlus].answers.forEach(item => {
    questionHTMLList.innerHTML += `<li class="question-item">${item}</li>`;

  });
  }

  // questionRandItemPlus++;

  // questionTitle.innerHTML = '';
  // questionHTMLList.innerHTML = '';

  // questionTitle.innerHTML = questionsL[questionRandItemPlus].question;

  // questionsL[questionRandItemPlus].answers.forEach(item => {

  // questionHTMLList.innerHTML += `<li class="question-item">${item}</li>`;
  // });
}

function getAnswer() {

  questionHTMLList.addEventListener('click', (e) => {
    if(e.target.tagName !== 'LI') return;
    if(e.target.textContent == questionsL[questionRandItemPlus].correctAnswer) { 

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
      e.target.classList.add('incorrectAnswer');
      setTimeout(function(){
        count++;
      }, 1300);
      setTimeout(createQuestion, 2000);
      }  
    // }  
  });
}


// btn50.addEventListener('click', deleteTwoAnswer);

//   function deleteTwoAnswer() { //50/50
//   questionHTMLList.childNodes.forEach(item => {
//     console.log(item.textContent);
//     if(item.textContent == questionsL[count].incorrectAnswer[0] || item.textContent == questionsL[count].incorrectAnswer[1]) {
//       item.textContent = '';
//     }
//   });

// };

btn50.addEventListener('click', deleteTwoAnswer);

  function deleteTwoAnswer() { //50/50
    deleteTwoAnswerCount++;
    if(deleteTwoAnswerCount == 1) {
      console.log(deleteTwoAnswerCount);

      questionHTMLList.childNodes.forEach(item => {
        // console.log(item.textContent);
        if(item.textContent == questionsL[questionRandItemPlus].incorrectAnswer[0] || item.textContent == questionsL[questionRandItemPlus].incorrectAnswer[1]) {
            item.textContent = '';
        } else {
          return;
        }
      });
    }

};

function upWiningColumn() {
  costWiningColumn.childNodes.forEach((item, i)=> {
  });

  costWiningColumn.childNodes[count].classList.add('costWinGold');

  if(costWiningColumn.childNodes[count-1]) {
    costWiningColumn.childNodes[count-1].classList.remove('costWinGold');
  }
}  
