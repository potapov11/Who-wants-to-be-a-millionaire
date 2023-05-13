const callFriendModal = document.querySelector(".callfriendmodal");
import { audio } from "./audio.js";
import {
  btnCallFriend,
  count,
  callFriendInner,
  questionTitle,
  questionRandItemPlus,
  questionRandItemHeavyPlus,
} from "../js/main.js";
import { questionsL, questionRandItem } from "../modules-js/easyquestions.js";

function getTimeoutAnswer() {
  setTimeout(() => {
    callFriendInner.innerHTML += `<h2 class = 'callmodaltitle'>Привет, подскажи ответ на этот вопрос</h2>`;
  }, 1000);
  setTimeout(() => {
    callFriendInner.innerHTML += `<p class = 'callmodaltext'> ${(questionTitle.innerHTML =
      questionsL[questionRandItemPlus].question)}</p>`;
  }, 3000);
  setTimeout(function () {
    callFriendInner.innerHTML += `<p class = 'callmodaltextanswer'>Это просто! Думаю что ответ ${questionsL[questionRandItemPlus].correctAnswer}</p>`;
  }, 7000);
}

function getTimeoutHeavyAnswer() {
  setTimeout(() => {
    callFriendInner.innerHTML += `<h2 class = 'callmodaltitle'>Привет, подскажи ответ на этот вопрос</h2>`;
  }, 1000);
  setTimeout(() => {
    callFriendInner.innerHTML += `<p class = 'callmodaltext'> ${(questionTitle.innerHTML =
      questionsHeavy[questionRandItemHeavyPlus].question)}</p>`;
  }, 3000);
  setTimeout(function () {
    callFriendInner.innerHTML += `<p class = 'callmodaltext'>Надо подумать...</p>`;
  }, 7000);
  setTimeout(function () {
    callFriendInner.innerHTML += `<p class = 'callmodaltextanswer'> Я конечно сомневаюсь, но попробую ответ ${questionsHeavy[questionRandItemHeavyPlus].correctAnswer}</p>`;
  }, 11000);
}

const callFriendModalFunc = function () {
  if (callFriendModal.classList.value == "callfriendmodal hide") {
    audio.playAudioCall();
  }

  callFriendModal.classList.toggle("show");
  btnCallFriend.classList.add("tipOpacity");
  if (count < 5) {
    getTimeoutAnswer();
  } else {
    getTimeoutHeavyAnswer();
  }
};

const closeModalCallFriend = function () {
  callFriendModal.classList.toggle("show");
  if (callFriendModal.classList.value == "callfriendmodal hide") {
    audio.stopAudioPlay();
  }
};

export { callFriendModalFunc };
export { closeModalCallFriend };
