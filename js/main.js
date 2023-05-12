"use strict";

import { costWiningColumn } from "../modules-js/costWinning.js";
import { audio } from "../modules-js/audio.js";
import { tip50 } from "../modules-js/tip_50.js";
import { questionsL, questionRandItem } from "../modules-js/easyquestions.js";
import {
  questionRandItemHeavy,
  questionsHeavy,
} from "../modules-js/heavyquestion.js"; //Случайный элемент массива

const questionTitle = document.querySelector(".question-title"),
  questionHTMLList = document.querySelector(".question-list"),
  btnCallFriend = document.querySelector(".callFriend"),
  btn50 = document.querySelector(".tips__50"),
  callFriendModal = document.querySelector(".callfriendmodal"),
  callFriendInner = document.querySelector(".callfriendinner"),
  closemodal = document.querySelector(".closemodal"),
  tipPollAudience = document.querySelector(".pollAudience"),
  pollAudienceModal = document.querySelector(".pollaudiencemodal"),
  closemodalPoll = document.querySelector(".closemodalPoll"),
  pollAnswers = document.querySelector(".pollAnswers"),
  bckgMusicBtn = document.querySelector(".bckgMusic"),
  arrLet = ["A", "B", "C", "D"];

let questionRandItemPlus = questionRandItem;
let questionRandItemHeavyPlus = questionRandItemHeavy;
export { questionRandItemPlus };
export { questionRandItemHeavyPlus };
export { questionHTMLList };
export { btn50 };

let count = 0;
export { count };
let deleteTwoAnswerCount = 0;

function removeDisabled() {
  questionHTMLList.classList.remove("disabled");
}

createQuestion();
getAnswer();

function createQuestion() {
  removeDisabled();
  if (count >= 5) {
    questionRandItemHeavyPlus = Math.floor(
      Math.random() * questionsHeavy.length
    );

    questionsHeavy.splice(questionRandItemHeavyPlus - 1, 1);

    questionTitle.innerHTML = "";
    questionHTMLList.innerHTML = "";

    questionTitle.innerHTML =
      questionsHeavy[questionRandItemHeavyPlus].question;

    questionsHeavy[questionRandItemHeavyPlus].answers.forEach((item, index) => {
      questionHTMLList.innerHTML += `<li class="question-item"><span class=question-letter>${arrLet[index]}  </span>${item}</li>`;
    });
  } else {
    questionRandItemPlus = Math.floor(Math.random() * questionsL.length);
    questionsL.splice(questionRandItemPlus - 1, 1);

    questionTitle.innerHTML = "";
    questionHTMLList.innerHTML = "";
    questionTitle.innerHTML = questionsL[questionRandItemPlus].question;

    questionsL[questionRandItemPlus].answers.forEach((item, index) => {
      questionHTMLList.innerHTML += `<li class="question-item"><span class=question-letter>${arrLet[index]}  </span>${item}</li>`;
    });
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

      setTimeout(function () {
        count++;
      }, 1300);

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
      playWrong();
      setTimeout(function () {
        location.reload();
      }, 3000);
    }
  });
}

//50 на 50
btn50.addEventListener("click", tip50);
btn50.addEventListener("click", audio.playAudio_50, { once: true });

// Звонок другу

btnCallFriend.addEventListener("click", showCallFriendModal, { once: true });
function showCallFriendModal() {
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
}

closemodal.addEventListener("click", () => {
  callFriendModal.classList.toggle("show");
  if (callFriendModal.classList.value == "callfriendmodal hide") {
    audio.stopAudioPlay();
  }
});

//----------------//

function upWiningColumn() {
  costWiningColumn.childNodes[count].classList.add("costWinGold");

  if (costWiningColumn.childNodes[count - 1]) {
    costWiningColumn.childNodes[count - 1].classList.remove("costWinGold");
  }
}

//Кнопка включения аудио
let isPlaying = true;
bckgMusicBtn.addEventListener("click", function () {
  if (isPlaying) {
    audio.playAudioBckg();
    isPlaying = false;
    bckgMusicBtn.classList.toggle("bckgMusicStop");
  } else {
    audio.stopAudioPlayBckg();
    isPlaying = true;
    bckgMusicBtn.classList.remove("bckgMusicStop");
  }
});

//Отложенные действия в подсказке звонок другу

function getTimeoutAnswer() {
  setTimeout(() => {
    callFriendInner.innerHTML += `<h2 class = 'callmodaltitle'>Привет, подскажи ответ на это вопрос</h2>`;
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
    callFriendInner.innerHTML += `<h2 class = 'callmodaltitle'>Привет, подскажи ответ на это вопрос</h2>`;
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
//-------------------------------------------------//

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
