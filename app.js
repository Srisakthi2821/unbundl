let captchaText1=document.getElementById('captcha');
let captchaText2=document.getElementById('captcha2');
let generateRandomNumber=Math.ceil(1000+Math.random()*9000)
captchaText1.textContent=generateRandomNumber
captchaText2.textContent=generateRandomNumber


 document.addEventListener('DOMContentLoaded', function() {
      const accordianItems = document.querySelectorAll('.accordian_item');
      const accordianImage = document.getElementById('accordian_image');
      accordianItems.forEach((item, index) => {
        const title = item.querySelector('.accordian_title');
        const toggleIcon = title.querySelector('.accordian_toggle_icon');
        title.addEventListener('click', () => {
          const isOpen = item.classList.toggle('active');
          toggleIcon.src = isOpen ? './assets/minus.png' : './assets/plus.png';
          if (isOpen) {
            accordianImage.src = `./assets/accordian${index + 1}.png`;
          }
          accordianItems.forEach((otherItem, otherIndex) => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
              otherItem.querySelector('.accordian_toggle_icon').src = './assets/plus.png';
            }
          });
        });
      });
    });