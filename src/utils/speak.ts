export const speakWord = function(word) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US"; // angol kiejtés
      utterance.rate = 1;
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }