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
