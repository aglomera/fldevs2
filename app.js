document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.carousel-container');
    const cards = document.querySelectorAll('.carousel-card');
  
    let currentIndex = 0;
  
    function showCard(index) {
      const translationValue = -index * (70 + 20) + 'px'; // Largura do card + margem
      cardContainer.style.transform = 'translateX(' + translationValue + ')';
    }
  
    function nextCard() {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
    }
  
    // Adicione aqui a lógica para o botão de próxima imagem
    // Exemplo:
    const nextButton = document.querySelector('.btn');
    nextButton.addEventListener('click', nextCard);
  });
  