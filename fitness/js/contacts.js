// Функционал страницы контаков
document.addEventListener('DOMContentLoaded', function() {
    // Элементы
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const modalClose = document.getElementById('modalClose');

    // Обработка формы обратной связи
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Получаем данные из формы
        const name = document.getElementById('contactName').value;
        const phone = document.getElementById('contactPhone').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;

        // Простая валидация
        if (!name || !phone || !message) {
            alert('Пожалуйста, заполните обязательные поля (имя, телефон, сообщение)');
            return;
        }
            
        // Здесь можно отправить данные на сервер
        console.log('Данные формы:', { name, phone, email, message });

        // Показываем всплывающие окно успеха
        successModal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Очищаем форму
        contactForm.reset();
    });

    // Закрытие модального окна
    modalClose.addEventListener('click', closeModal);

    // Закрытие по клику вне окна
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            closeModal();
        }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && successModal.style.display === 'block') {
            closeModal();
        }
    });
});

// Функция закрытия модального кода
function closeModal() {
    document.getElementById('successModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}