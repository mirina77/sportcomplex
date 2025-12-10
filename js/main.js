//Знаходимо форму по id
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); //не перзавантажувати сторінку

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const phone = formData.get('phone');
        //Перевірка
        if (!name || !phone){
            alert('Будь ласка, заповніть імя та телефон.')
            return;
        }
        alert(`Дякуємо за заявку, ${name}! Ми звяжимося з вами за номером ${phone}.`);

        contactForm.reset(); //очистити форму
        })
}