//variables
let text = 0;
const textElement = document.getElementById("word-display");

const Freeman = [
  "Rise", "and", "shine,", "Mister", "Freeman.",
  "Rise", "and", "shine.", "Not", "that", "I", "wish", "to", "imply", "you",
  "have", "been", "sleeping", "on", "the", "job.",
  "No", "one", "is", "more", "deserving", "of", "a", "rest,",
  "and", "all", "the", "effort", "in", "the", "world", "would", "have", "gone", "to", "waste", "until...",
  "well,", "let's", "just", "say", "your", "hour", "has", "come", "again.",
  "The", "right", "man", "in", "the", "wrong", "place", "can", "make", "all", "the", "difference", "in", "the", "world.",
  "So,", "wake", "up,", "Mister", "Freeman.", "Wake", "up", "and", "smell", "the", "ashes.",
]

function FollowingWord() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      return;
    }

    textElement.style.left = `${event.clientX}px`;
    textElement.style.top = `${event.clientY}px`;
    textElement.style.transform = 'translate(-50%, -50%)';
    textElement.style.opacity = 1;

    if (text < Freeman.length) {
      textElement.textContent = Freeman[text];
      text++;
    } else {
      text = 0;
      textElement.textContent = Freeman[text];
      text++;
    }

    setTimeout(() => {
        textElement.style.opacity = 0;
      }, 1000);
  });
}

FollowingWord();
