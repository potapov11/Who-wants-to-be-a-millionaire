const audio50 = document.getElementById("my-audio"),
  audioCall = document.getElementById("my-audiocall"),
  audioPoll = document.getElementById("my-audiopoll"),
  audioBckg = document.getElementById("my-audiobckg"),
  audioCorrect = document.getElementById("my-audiocorrect"),
  audioWrong = document.getElementById("my-audiowrong");

const audio = {
  playAudio_50: function () {
    audio50.play();
  },

  playAudioCall: function () {
    audioCall.play();
  },
  stopAudioPlay: function () {
    audioCall.currentTime = 0;
    audioCall.pause();
  },

  playAdioPoll: function () {
    audioPoll.play();
  },
  stopAudioPlayPoll: function () {
    audioPoll.currentTime = 0;
    audioPoll.pause();
  },
  playAudioBckg: function () {
    audioBckg.play();
  },
  stopAudioPlayBckg: function () {
    audioBckg.currentTime = 0;
    audioBckg.pause();
  },

  playCorrect: function () {
    audioCorrect.play();
  },
  playWrong: function () {
    audioWrong.play();
  },
};

export { audio };
export { audio50 };
export { audioCall };
export { audioPoll };
export { audioBckg };
export { audioCorrect };
export { audioWrong };
