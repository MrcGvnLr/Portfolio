document.addEventListener("DOMContentLoaded",function(){
    
    const texts = [
        "Marc Gavin Lor",
        "a Gamer",
        "a Student",
        "an Intern",
        "a Learner",
        "a Programmer",
        "a Developer",

    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type(){
        const currentText = texts[textIndex];
        const typingElement = document.querySelector(".typing-text");

        if(isDeleting){
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typingElement.textContent = currentText.substring(0,charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }
        if (!isDeleting && charIndex === currentText.length){
            isDeleting = true;
            typingDelay = 1500;
        } else if(isDeleting && charIndex === 0){
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingDelay = 500;
        }
        setTimeout(type, typingDelay);
    }

    //typing effect after delay
    setTimeout(type, 1000);
    //smooth scrolling
});




let swiper = new Swiper(".swiper-container",{
    slidesPerView:3,
    spaceBetween:30,
    grabCursor:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
        dynamicBullets:true
    }
});


//background//


