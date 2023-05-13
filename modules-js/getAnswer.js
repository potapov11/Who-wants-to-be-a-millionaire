import { questionsL, questionRandItem } from "../modules-js/easyquestions.js";
import { audio } from "./audio.js";
import { costWiningColumn } from "../modules-js/costWinning.js";
import { createQuestion } from "../modules-js/createQuestion.js";
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
  countPlus,
} from "../js/main.js";

function upWiningColumn() {
  costWiningColumn.childNodes[count].classList.add("costWinGold");
  if (costWiningColumn.childNodes[count - 1]) {
    costWiningColumn.childNodes[count - 1].classList.remove("costWinGold");
  }
}

function getAnswer() {
  let x = 20;
  questionHTMLList.addEventListener("click", (e) => {
    if (
      e.target.lastChild.data ==
        questionsL[questionRandItemPlus].correctAnswer ||
      e.target.lastChild.data ==
        questionsHeavy[questionRandItemHeavyPlus].correctAnswer
    ) {
      questionHTMLList.classList.add("disabled");
      e.target.classList.add("disabled");
      function classAdd() {
        e.target.classList.add("correctAnswer");
      }

      audio.playCorrect();

      setTimeout(classAdd, 1000);

      function changeCostWiningColumn(arg) {
        if (document.body.clientWidth < 479) {
          costWiningColumn.style.cssText = `top: ${
            -15 + x
          }px; transition: top 1s;`;
          x += 24;
        }
      }
      changeCostWiningColumn(document.body.clientWidth);

      setTimeout(upWiningColumn, 1200);

      setTimeout(countPlus, 1300);

      // swohWinModal();

      setTimeout(swohWinModal, 2000);
      function swohWinModal() {
        if (count == 14) {
          const modalWin = document.querySelector(".modalWin");
          const modalWinInner = modalWin.querySelector(".modalwininner");
          const gameBox = document.querySelector(".game-box");
          const modalWinBtn = document.querySelector(".modalwin-btn");
          gameBox.classList.add("hide");
          modalWin.classList.add("show");
          modalWinInner.classList.add("show");
          modalWinInner.style = "display: flex";
          modalWin.classList.add("zindex");
          modalWinBtn.addEventListener("click", (e) => {
            setTimeout(function () {
              window.location.reload();
            }, 4000);
          });
        }
      }

      setTimeout(createQuestion, 2000);
    } else {
      e.target.classList.add("incorrectAnswer");
      audio.playWrong();
      setTimeout(function () {
        location.reload();
      }, 3000);
    }
  });
}

export { getAnswer };
