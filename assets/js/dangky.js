// Đối tượng
function Validator(options) {
    function validate(inputElement, rule) {
        
            var errorMessage = rule.test(inputElement.value);
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            
            if(errorMessage) {
                errorElement.innerText = errorMessage;
                inputElement.parentElement.classList.add('invalid')
            }
            else {
                errorElement.innerText = '';
                inputElement.parentElement.classList.remove('invalid')

            }

        
    }
    var formElement = document.querySelector(options.form)
    if (formElement) {
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);
           
            if (inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule)
                }

                // Xu ly loi khi nguoi dung nhap vao input
                inputElement.oninput = function() {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        });
    }
}

//Định nghĩa rules
// Nguyen tac cua rule
// Khi co loi tra ra message loi
// 2 khi hop le khong tra ra gi
Validator.isRequired = function(selector) {
    return {
        selector : selector,
        test: function (value) {
            return value.trim() ? undefined : "Vui lòng nhập trường này!"
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector : selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Vui lòng nhập email';
        }
    }
}

Validator.minLength = function(selector, min) {
    return {
        selector : selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min}`;
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value == getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}