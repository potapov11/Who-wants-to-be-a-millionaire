"use strict";

import { costWiningColumn } from "../modules-js/costWinning.js";
import { audio } from "../modules-js/audio.js";
import { tip50 } from "../modules-js/tip_50.js";
import { createQuestion } from "../modules-js/createQuestion.js";
import { questionsL, questionRandItem } from "../modules-js/easyquestions.js";
import {
  questionRandItemHeavy,
  questionsHeavy,
} from "../modules-js/heavyquestion.js"; //Случайный элемент массива
import { getAnswer } from "../modules-js/getAnswer.js";
import { playBckgMusic } from "../modules-js/audio.js";
import {
  callFriendModalFunc,
  closeModalCallFriend,
} from "../modules-js/callFriendTip.js";

const questionTitle = document.querySelector(".question-title"),
  questionHTMLList = document.querySelector(".question-list"),
  btnCallFriend = document.querySelector(".callFriend"),
  btn50 = document.querySelector(".tips__50"),
  // callFriendModal = document.querySelector(".callfriendmodal"),
  callFriendInner = document.querySelector(".callfriendinner"),
  closemodal = document.querySelector(".closemodal"),
  tipPollAudience = document.querySelector(".pollAudience"),
  pollAudienceModal = document.querySelector(".pollaudiencemodal"),
  closemodalPoll = document.querySelector(".closemodalPoll"),
  pollAnswers = document.querySelector(".pollAnswers"),
  arrLet = ["A", "B", "C", "D"];

let questionRandItemPlus = questionRandItem;
let questionRandItemHeavyPlus = questionRandItemHeavy;

export { questionRandItemPlus };
export { questionRandItemHeavyPlus };
export { questionHTMLList };
export { btn50 };
export { questionTitle };
export { arrLet };
export { btnCallFriend };
export { callFriendInner };

let count = 0;
export { count };
let deleteTwoAnswerCount = 0;

createQuestion();
getAnswer();

function getNewRandHeavyPlus() {
  questionRandItemHeavyPlus = Math.floor(Math.random() * questionsHeavy.length);
  return questionRandItemHeavyPlus;
}

function getNewRandPlus() {
  questionRandItemPlus = Math.floor(Math.random() * questionsL.length);
  return questionRandItemPlus;
}

function countPlus() {
  console.log(count + " func");
  count++;
  console.log(count + " func");
  return count;
}

export { getNewRandHeavyPlus };
export { getNewRandPlus };
export { countPlus };

//50 на 50
btn50.addEventListener("click", tip50);
btn50.addEventListener("click", audio.playAudio_50, { once: true });

// Звонок другу
btnCallFriend.addEventListener("click", callFriendModalFunc, { once: true });
closemodal.addEventListener("click", closeModalCallFriend);

//Функция включения фоновой музыки
playBckgMusic();

//Помощь зала
// let pollAnswertext;
let textHeight;
function getRandomNumMore60(min, max) {
  textHeight = Math.floor(Math.random() * (max - min)) + min;
  return textHeight;
}
getRandomNumMore60(60, 90);

let textHeightMin;
function getRandomNumLess60(min, max) {
  textHeightMin = Math.floor(Math.random() * (max - min)) + min;
  return textHeight;
}

tipPollAudience.addEventListener("click", getPollTip, { once: true });

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
        getRandomNumLess60(10, 50);
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
      getRandomNumLess60(10, 50);
      textItem.previousElementSibling.style.cssText = `background-color: red; height: ${textHeightMin}%`;
    }
  });
}
