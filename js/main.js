'use strict';

const questionTitle = document.querySelector('.question-title'),
      questionHTMLList = document.querySelector('.question-list'),
      btn50 = document.querySelector('.tips__50'),
      audio50 = document.getElementById('my-audio'),
      audioCall = document.getElementById('my-audiocall'),
      btnCallFriend = document.querySelector('.callFriend'),
      callFriendModal = document.querySelector('.callfriendmodal'),
      callFriendInner= document.querySelector('.callfriendinner'),
      closemodal = document.querySelector('.closemodal'),
      tipPollAudience = document.querySelector('.pollAudience'),
      pollAudienceModal = document.querySelector('.pollaudiencemodal'),
      closemodalPoll = document.querySelector('.closemodalPoll'),
      pollAnswers = document.querySelector('.pollAnswers');


      import {costWiningColumn} from './costWinning.js';
      import {expCostWiningColumn} from './costWinning.js';
      import { questionsL} from './easyquestions.js';
      import { questionRandItem} from './easyquestions.js'; //Случайный элемент массива
      import { questionsHeavy} from './heavyquestion.js'; 
      import { questionRandItemHeavy} from './heavyquestion.js'; //Случайный элемент массива
      
let questionRandItemPlus = questionRandItem;
let questionRandItemHeavyPlus = questionRandItemHeavy;

let count = 0;
let deleteTwoAnswerCount = 0;

createQuestion();

getAnswer();

function createQuestion() {
  console.log(count);
  if(count >= 5) {
    questionRandItemHeavyPlus++;
    questionRandItemPlus++;

    questionTitle.innerHTML = '';
    questionHTMLList.innerHTML = '';

    questionTitle.innerHTML = questionsHeavy[questionRandItemHeavyPlus].question;

    questionsHeavy[questionRandItemHeavyPlus].answers.forEach(item => {
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
}

function getAnswer() {

  questionHTMLList.addEventListener('click', (e) => {
    if(e.target.tagName !== 'LI') return;
    if(e.target.textContent == questionsL[questionRandItemPlus].correctAnswer || e.target.textContent == questionsHeavy[questionRandItemHeavyPlus].correctAnswer) { 
      console.log(questionRandItemHeavyPlus);

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
      alert('Вы проиграли');
      setTimeout(function(){
        location.reload();
      }, 1000);
      }  
  });
}

//50 на 50
btn50.addEventListener('click', deleteTwoAnswer);
btn50.addEventListener('click', playAudio50, { once: true });
  
  function deleteTwoAnswer() { //50/50
    btn50.classList.add('tipOpacity');
    deleteTwoAnswerCount++;
    if(deleteTwoAnswerCount == 1) {
      console.log(deleteTwoAnswerCount);

      questionHTMLList.childNodes.forEach(item => {
        if(count>=5) {
          if(item.textContent == questionsHeavy[questionRandItemHeavyPlus].incorrectAnswer[0] || item.textContent == questionsHeavy[questionRandItemHeavyPlus].incorrectAnswer[1]) {
            item.textContent = '';
          }
        }       
        if(count < 5) {
          if(item.textContent == questionsL[questionRandItemPlus].incorrectAnswer[0] || item.textContent == questionsL[questionRandItemPlus].incorrectAnswer[1]) {
            item.textContent = '';
          }
        }
      });
    }
};
//--------//

// Звонок другу

btnCallFriend.addEventListener('click', showCallFriendModal, {once: true});
function showCallFriendModal() {

  if(callFriendModal.classList.value == 'callfriendmodal hide') {
    playAudioCall();
  }

  console.log(callFriendModal.classList.value);

  callFriendModal.classList.toggle('show');
  btnCallFriend.classList.add('tipOpacity');
  if(count < 5) {

    getTimeoutAnswer();

  } else {

    getTimeoutHeavyAnswer();
  }
}

closemodal.addEventListener('click', ()=> {
  callFriendModal.classList.toggle('show');
  console.log(callFriendModal.classList.value);

  if(callFriendModal.classList.value == 'callfriendmodal hide') {
    stopAudioPlay();
  }
});


//----------------//


function upWiningColumn() {

  costWiningColumn.childNodes[count].classList.add('costWinGold');

  if(costWiningColumn.childNodes[count-1]) {
    costWiningColumn.childNodes[count-1].classList.remove('costWinGold');
  }
}  

//audio
function playAudio50() {
  audio50.play();
}

function playAudioCall() {
  audioCall.play();
}
function stopAudioPlay() {
  audioCall.currentTime = 0;
  audioCall.pause();
  console.log('stopAudio');
}

//Отложенные действия в подсказке звонок другу

function getTimeoutAnswer(){
  setTimeout(()=>{
    callFriendInner.innerHTML += `<h2 class = 'callmodaltitle'>Привет, подскажи ответ на это вопрос</h2>`;
    console.log('1');
  }, 1000);
  setTimeout(()=>{
    callFriendInner.innerHTML += `<p class = 'callmodaltext'> ${questionTitle.innerHTML = questionsL[questionRandItemPlus].question}</p>`;
    console.log('2');
  }, 3000);
  setTimeout(function(){
    callFriendInner.innerHTML += `<p class = 'callmodaltextanswer'>Это просто! Думаю что ответ ${questionsL[questionRandItemPlus].correctAnswer}</p>`;
    console.log('3');
  }, 7000);
}

function getTimeoutHeavyAnswer(){
  setTimeout(()=>{
    callFriendInner.innerHTML += `<h2 class = 'callmodaltitle'>Привет, подскажи ответ на это вопрос</h2>`;
    console.log('1');
  }, 1000);
  setTimeout(()=>{
    callFriendInner.innerHTML +=  `<p class = 'callmodaltext'> ${questionTitle.innerHTML = questionsHeavy[questionRandItemHeavyPlus].question}</p>`;
    console.log('2');
  }, 3000);
  setTimeout(function(){
    callFriendInner.innerHTML += `<p class = 'callmodaltext'>Надо подумать...</p>`
    console.log('3');
  }, 7000);
  setTimeout(function(){
    callFriendInner.innerHTML += `<p class = 'callmodaltextanswer'> Я конечно сомневаюсь, но попробую ответ ${questionsHeavy[questionRandItemHeavyPlus].correctAnswer}</p>`;
    console.log('3');
  }, 11000);
}
//-------------------------------------------------//

//Помощь зала
tipPollAudience.addEventListener('click', getPollTip, {once: true});

function getPollTip() {
  pollAudienceModal.classList.toggle('show');
  questionsL[questionRandItemPlus].answers.forEach(item=>{
    pollAnswers.innerHTML+=`<p class='pollAnswertext'>${item}</p>`;
    console.log('pollansw');
  });
}

closemodalPoll.addEventListener('click', function(){
  pollAudienceModal.classList.toggle('show');
  console.log('pollclose');
});
