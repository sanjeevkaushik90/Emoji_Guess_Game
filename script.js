import { questions } from "./question.js";

document.addEventListener("DOMContentLoaded", () => {

   let Index = 0;

   function loadquestions() {
      const hint = document.querySelector('#hint');
      const emoji = document.querySelector('#emoji');
      const answer = document.querySelector('#answer');

      hint.innerHTML = questions[Index].hint;
      emoji.innerHTML = questions[Index].emoji;
      answer.innerHTML = questions[Index].answer;
   }

   loadquestions();

   
   document.querySelector('#nextBtn').addEventListener('click', () => {

      Index++;

      if (Index >= questions.length) {
         Index = 0;
      }

      loadquestions();

      const card = document.querySelector('.flip-card');
      card.classList.remove('flipped');
   });

   window.flipCard = function () {
      const card = document.querySelector('.flip-card');
      card.classList.toggle('flipped');
   };

});
