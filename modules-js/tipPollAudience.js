import { questionsL, questionRandItem } from "./easyquestions.js";
import { audio } from "./audio.js";
import {
  questionRandItemPlus,
  questionRandItemHeavyPlus,
  arrLet,
  pollAnswers,
  count,
  tipPollAudience,
} from "../js/main.js";
import { questionRandItemHeavy, questionsHeavy } from "./heavyquestion.js"; //Случайный элемент массива

const pollAudienceModal = document.querySelector(".pollaudiencemodal");
const closemodalPoll = document.querySelector(".closemodalPoll");

let textHeight;
let textHeightMin;

const textHeightMore60 = function (min, max) {
  textHeight = Math.floor(Math.random() * (max - min)) + min;
};

textHeightMore60(60, 90);

const textHeightMin60 = function (min, max) {
  textHeightMin = Math.floor(Math.random() * (max - min)) + min;
};

textHeightMin60();

function showEasyPollAnswers() {
  arrLet.forEach((arrLetItem) => {
    pollAnswers.innerHTML += `
  //   <div class = pollAnswercolumn>
  //   <div class = pollcolorcolumn></div>
  //   <p class='pollAnswertext'>${arrLetItem}</p>
  //   </div>`;
    const pollAnswertext = document.querySelectorAll(".pollAnswertext");
    pollAnswertext.forEach((textItem) => {
      if (
        typeof questionsL[questionRandItemPlus].correctPollAnswer == "number"
      ) {
        questionsL[questionRandItemPlus].correctPollAnswer = String(
          questionsL[questionRandItemPlus].correctPollAnswer
        );
      }
      if (
        questionsL[questionRandItemPlus].correctPollAnswer == textItem.innerText
      ) {
        textItem.previousElementSibling.style.cssText = `background-color: green; height: ${textHeight}%`;
      } else {
        textHeightMin60(10, 50);
        textItem.previousElementSibling.style.cssText = `background-color: red; height: ${textHeightMin}%`;
      }
    });
  });
}

function showHeavyPollAnswers() {
  arrLet.forEach((arrLetItem) => {
    pollAnswers.innerHTML += `
    <div class = pollAnswercolumn>
    <div class = pollcolorcolumn></div>
    <p class='pollAnswertext'>${arrLetItem}</p>
    </div>`;
  });
  const pollAnswertext = document.querySelectorAll(".pollAnswertext");
  pollAnswertext.forEach((textItem) => {
    if (
      typeof questionsHeavy[questionRandItemHeavyPlus].correctPollAnswer ==
      "number"
    ) {
      questionsHeavy[questionRandItemHeavyPlus].correctPollAnswer = String(
        questionsHeavy[questionRandItemHeavyPlus].correctPollAnswer
      );
    }
    if (
      textItem.textContent ===
      questionsHeavy[questionRandItemHeavyPlus].correctPollAnswer
    ) {
      textItem.previousElementSibling.style.cssText = `background-color: green; height: ${textHeight}%`;
    } else {
      textHeightMin60(10, 50);
      textItem.previousElementSibling.style.cssText = `background-color: red; height: ${textHeightMin}%`;
    }
  });
}

function getPollTip() {
  pollAudienceModal.classList.toggle("show");
  if (
    pollAudienceModal.classList.value ==
    "pollaudiencemodal pollaudience hide show"
  ) {
    audio.playAdioPoll();
  }

  if (count < 5) {
    showEasyPollAnswers();
  } else {
    showHeavyPollAnswers();
  }
  tipPollAudience.classList.add("tipOpacity");
}

closemodalPoll.addEventListener("click", function () {
  pollAudienceModal.classList.toggle("show");
  if (
    pollAudienceModal.classList.value == "pollaudiencemodal pollaudience hide"
  ) {
    audio.stopAudioPlayPoll();
  }
});

export { showHeavyPollAnswers, showEasyPollAnswers, getPollTip };
