 $('#form').validate({
      rules: {
        // имя
        name: {
          required: true,
          minlength: 2
        },
        // почта
        email: {
          required: true,
          minlength: 3,
          email: true
        },
        // паролль
        password: {
          required: true,
          minlength: 2
        }
      },
      messages: {
        name: {
          required: 'Это поле обязательно для ввода',
          minlength: 'Не менее 2х символов'
        },
        email: {
          required: 'Это поле обязательно для ввода',
          minlength: 'Не менее 4х символов',
          email: 'Введите корректный email'
        },
        password: {
          required: 'Это поле обязательно для ввода',
          minlength: 'Не менее 4х символов'
        }
      }
    });