function showCustomAlert(message) {
  // Создаем элементы модального окна
  const overlay = document.createElement('div');
  const modal = document.createElement('div');
  const text = document.createElement('p');
  const closeBtn = document.createElement('button');
  
  // Стилизуем overlay
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;
  
  // Стилизуем модальное окно
  modal.style.cssText = `
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  `;
  
  // Добавляем текст
  text.textContent = message;
  text.style.marginBottom = '20px';
  
  // Создаем кнопку закрытия
  closeBtn.textContent = 'OK';
  closeBtn.style.cssText = `
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;
  
  // Добавляем обработчик закрытия
  closeBtn.addEventListener('click', function() {
    document.body.removeChild(overlay);
  });
  
  // Собираем модальное окно
  modal.appendChild(text);
  modal.appendChild(closeBtn);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  
  // Закрытие по клику на overlay
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });
}

// Использование
const btn = document.querySelector('.btn');
btn.addEventListener('click', function(event) {
  event.preventDefault();
  showCustomAlert('Извините, я ещё не доработал эту кнопку.\nСвяжитесь со мной через Telegram по ссылке вверху.');
});


// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function(event) {
//   event.preventDefault();
//   confirm('Извините, я ещё не доработал эту кнопку.\nСвяжитесь со мной через Telegram по ссылке вверху.');
// });


// // Sorry, I haven\'t finished this button yet.\nContact me via Telegram using the link at the top.\n\n