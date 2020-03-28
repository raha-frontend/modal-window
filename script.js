function modal() {
    var body = document.body;
    var openModal = document.querySelector('.open-modal');
    var modal = document.querySelector('.modal');
    var shadow = document.querySelector('.shadow');
    var closeModal = document.querySelector('.modal-close');

    // переменные формы
    var formName = document.querySelector('.form-name');
    var formPhone = document.querySelector('.form-phone');
    var formSendBtn = document.querySelector('.modal-send-btn');

    // открываем модальное окно
    openModal.addEventListener('click', function () {
        body.classList.add('no-scroll');
        shadow.classList.add('shadow-show');
        modal.classList.add('modal-show');
    });

    // функция очистки ошибок
    function clearErrors() {
        formName.classList.remove('modal-field-error');
        formPhone.classList.remove('modal-field-error');
    }

    // закрываем модальное окно
    function close() {
        body.classList.remove('no-scroll');
        shadow.classList.remove('shadow-show');
        modal.classList.remove('modal-show');

        formName.value = '';
        formPhone.value = '';

        clearErrors();
    }

    shadow.addEventListener('click', close);
    closeModal.addEventListener('click', close);

    document.addEventListener('keydown', function (event) {
        console.log('event', event);
        if (event.keyCode === 27) {
            close();
        }
    });

    // работа с формой
    formSendBtn.addEventListener('click', function () {
        if (formName.value && formPhone.value) {
            alert('Спасибо, мы вам перезвоним!');
            clearErrors();
            close();
        } else {
            alert('Заполните поля');
            formName.classList.add('modal-field-error');
            formPhone.classList.add('modal-field-error');
        }
    })
}

window.addEventListener('load', modal);
