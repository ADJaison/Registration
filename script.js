function validateForm() {
    let fullname = document.getElementById('fullname').value;
    let phone = document.getElementById('phone').value;
    let region = document.getElementById('region').value;
    let address = document.getElementById('address').value;
    let errorMessage = document.getElementById('error-message');

    if (/[\d]/.test(fullname)) {
        errorMessage.textContent = "ФИО не может содержать цифры.";
        return false;
    }

    if (!/^\d+$/.test(phone)) {
        errorMessage.textContent = "Номер телефона должен содержать только цифры.";
        return false;
    }

    if (region === "" || region === null) {
        errorMessage.textContent = "Выберите регион из списка.";
        return false;
    }

    errorMessage.textContent = "";

    const formData = {
        fullname: fullname,
        phone: phone,
        region: region,
        address: address
    };

    const jsonData = JSON.stringify(formData);

    fetch('https://your-server.com/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => response.json())
    .then(data => {
        console.log("Успех:", data);
        alert("Регистрация прошла успешно!");
    })
    .catch(error => {
        console.error("Ошибка:", error);
        errorMessage.textContent = "Произошла ошибка при отправке данных.";
    });

    return false;
}
