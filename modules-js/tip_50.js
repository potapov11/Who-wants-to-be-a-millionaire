import { questionsL, questionRandItem } from "../modules-js/easyquestions.js";
import {
  questionRandItemHeavy,
  questionsHeavy,
} from "../modules-js/heavyquestion.js"; //Случайный элемент массива
import {
  questionRandItemPlus,
  questionRandItemHeavyPlus,
  count,
  questionHTMLList,
  btn50,
} from "../js/main.js";

let deleteTwoAnswerCount = 0;

const tip50 = function () {
  btn50.classList.add("tipOpacity");
  deleteTwoAnswerCount++;
  if (deleteTwoAnswerCount == 1) {
    questionHTMLList.childNodes.forEach((item) => {
      if (count >= 5) {
        if (
          item.innerText ==
            questionsHeavy[questionRandItemHeavyPlus].incorrectAnswer[0] ||
          item.innerText ==
            questionsHeavy[questionRandItemHeavyPlus].incorrectAnswer[1]
        ) {
          item.textContent = "";
        }
      }
      if (count < 5) {
        if (
          item.innerText ==
            questionsL[questionRandItemPlus].incorrectAnswer[0] ||
          item.innerText == questionsL[questionRandItemPlus].incorrectAnswer[1]
        ) {
          item.textContent = "";
        }
      }
    });
  }
};

export { tip50 };
