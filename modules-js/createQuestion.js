import { questionsL, questionRandItem } from "../modules-js/easyquestions.js";

import {
  questionRandItemHeavy,
  questionsHeavy,
} from "../modules-js/heavyquestion.js"; //Случайный элемент массива

import {
  questionTitle,
  getNewRandHeavyPlus,
  getNewRandPlus,
  questionRandItemPlus,
  questionRandItemHeavyPlus,
  count,
  questionHTMLList,
  arrLet,
} from "../js/main.js";

function removeDisabled() {
  questionHTMLList.classList.remove("disabled");
}

function createQuestion() {
  removeDisabled();
  if (count >= 5) {
    getNewRandHeavyPlus();

    questionsHeavy.splice(questionRandItemHeavyPlus - 1, 1);

    questionTitle.innerHTML = "";
    questionHTMLList.innerHTML = "";

    questionTitle.innerHTML =
      questionsHeavy[questionRandItemHeavyPlus].question;

    questionsHeavy[questionRandItemHeavyPlus].answers.forEach((item, index) => {
      questionHTMLList.innerHTML += `<li class="question-item"><span class=question-letter>${arrLet[index]}  </span>${item}</li>`;
    });
  } else {
    getNewRandPlus();
    questionsL.splice(questionRandItemPlus - 1, 1);

    questionTitle.innerHTML = "";
    questionHTMLList.innerHTML = "";
    questionTitle.innerHTML = questionsL[questionRandItemPlus].question;

    questionsL[questionRandItemPlus].answers.forEach((item, index) => {
      questionHTMLList.innerHTML += `<li class="question-item"><span class=question-letter>${arrLet[index]}  </span>${item}</li>`;
    });
  }
}

export { createQuestion };
