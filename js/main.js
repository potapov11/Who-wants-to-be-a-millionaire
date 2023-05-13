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
import {
  getPollTip,
  showEasyPollAnswers,
  showHeavyPollAnswers,
} from "../modules-js/tipPollAudience.js";

const questionTitle = document.querySelector(".question-title"),
  questionHTMLList = document.querySelector(".question-list"),
  btnCallFriend = document.querySelector(".callFriend"),
  btn50 = document.querySelector(".tips__50"),
  callFriendInner = document.querySelector(".callfriendinner"),
  closemodal = document.querySelector(".closemodal"),
  tipPollAudience = document.querySelector(".pollAudience"),
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
export { pollAnswers };
export { tipPollAudience };

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
tipPollAudience.addEventListener("click", getPollTip, { once: true });
