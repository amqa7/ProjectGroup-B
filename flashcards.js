const questionBanks = [
    [
      { q: "What is decomposition?", a: "Breaking problems into smaller parts." },
      { q: "What is pattern recognition?", a: "Identifying similarities in problems." }
    ],
    [
      { q: "What is abstraction?", a: "Focusing on important details only." },
      { q: "What is an algorithm?", a: "Step-by-step instructions." }
    ]
  ];
  
  let currentBank = 0;
  const flashcardContainer = document.getElementById('flashcardContainer');
  const newQuestionsBtn = document.getElementById('newQuestions');
  
  function createFlashcards() {
    flashcardContainer.innerHTML = '';
    questionBanks[currentBank].forEach((item) => {
      const card = document.createElement('div');
      card.className = 'card flashcard';
      card.innerHTML = `<h3>${item.q}</h3><div class="answer">${item.a}</div>`;
      card.addEventListener('click', () => {
        card.classList.toggle('show');
      });
      flashcardContainer.appendChild(card);
    });
  }
  
  newQuestionsBtn.addEventListener('click', () => {
    currentBank = (currentBank + 1) % questionBanks.length;
    createFlashcards();
  });
  
  createFlashcards();
  