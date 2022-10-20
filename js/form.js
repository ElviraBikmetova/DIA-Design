'use strict'
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);
        let formData = new FormData(form);
        if (error === 0) {
            form.classList.add('_sending');
            setTimeout(function () {
                alert('Спасибо! Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время, чтобы уточнить все детали.');
                form.reset();
                form.classList.remove('_sending');
            }, 1000);
            // let response = await fetch('sendmail.php', {
            //     method: 'POST',
            //     body: formData
            // });
            // if (response.ok) {
            //     let result = await response.json();
            //     alert(result.message);
            //     form.reset();
            //     form.classList.remove('_sending');
            // } else {
            //     alert('Ошибка!');
            //     form.classList.remove('_sending');
            //     }
        } else {
            alert('Заполните все поля ввода!');
        }
        function formValidate(form) {
            let error = 0;
            let formReq = document.querySelectorAll('._req');
            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index];
                formRemoveError(input);
                if (input.classList.contains('_num')) {
                    if (numTest(input)) {
                        formAddError(input);
                        error++;
                    }
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            }
            return error;
        }
    }
    function formAddError(input) {
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.classList.remove('_error');
    }
    // Функция теста номера телефона
    function numTest(input) {
        return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
    }
    // Маска для номера телефона
    // jQuery(function($){
    //     $("#formNum").mask("+7(999) 999-9999");
    //     });
    // let elements = document.getElementById('formNum');

    // for (let i = 0; i < elements.length; i++) {
    //   new IMask(elements[i], {
    //     mask: '+{7}(000)000-00-00',
    //   });
    // }
// Маска для номера телефона (рабочая)
    // $('#formNum').mask('+7 (999) 999-99-99');
    // $.fn.setCursorPosition = function(pos) {
    //   if ($(this).get(0).setSelectionRange) {
    //     $(this).get(0).setSelectionRange(pos, pos);
    //   } else if ($(this).get(0).createTextRange) {
    //     var range = $(this).get(0).createTextRange();
    //     range.collapse(true);
    //     range.moveEnd('character', pos);
    //     range.moveStart('character', pos);
    //     range.select();
    //   }
    // };
    // $('input[type="tel"]').click(function(){
    //     $(this).setCursorPosition(4);  // set position number
    //   });
});