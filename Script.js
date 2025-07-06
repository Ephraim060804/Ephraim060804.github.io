window.addEventListener('load', function () {
    const paragraphe = document.querySelector('.apparence');
    
    // Apparition
    setTimeout(() => {
      paragraphe.style.opacity = '1';
      paragraphe.style.transform = 'translateY(0)';
    }, 1000); // Petite attente de 1 seconde

    // Disparition après 30 secondes
    setTimeout(() => {
      paragraphe.style.opacity = '0';
      paragraphe.style.transform = 'translateY(100px)';
    }, 31000); // 1s + 30s
  });