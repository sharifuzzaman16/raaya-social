document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Initialize first item as open
    const firstItem = accordionItems[0];
    if (!firstItem.classList.contains('active')) {
        firstItem.classList.add('active');
        firstItem.querySelector('.accordion-icon').classList.replace('fa-plus', 'fa-minus');
        firstItem.querySelector('.accordion-content').style.maxHeight = '500px';
    }

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const icon = item.querySelector('.accordion-icon');

        header.addEventListener('click', () => {
            // Close all other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-icon').classList.replace('fa-minus', 'fa-plus');
                    otherItem.querySelector('.accordion-content').style.maxHeight = '0';
                }
            });

            // Toggle current item
            item.classList.toggle('active');

            // Change icon and set height
            if (item.classList.contains('active')) {
                icon.classList.replace('fa-plus', 'fa-minus');
                item.querySelector('.accordion-content').style.maxHeight = item.querySelector('.accordion-content').scrollHeight + 'px';
            } else {
                icon.classList.replace('fa-minus', 'fa-plus');
                item.querySelector('.accordion-content').style.maxHeight = '0';
            }
        });
    });
});

// Select all testimonial slider containers
const sliders = document.querySelectorAll('.testimonial-slider-container');

// Loop through each slider and set up individual functionality
sliders.forEach((slider) => {
    const sliderWrapper = slider.querySelector('.testimonial-slider-wrapper');
    const cards = slider.querySelectorAll('.testimonial-slider-card');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');

    let index = 0;
    const cardWidth = 266; // 256px width + 10px margin-right
    const totalCards = cards.length;
    const visibleCards = 4;
    const totalSlides = totalCards - visibleCards;

    // Move to Next Slide
    function nextSlide() {
        if (index >= totalSlides) {
            index = 0;
            sliderWrapper.style.transition = 'none';
            sliderWrapper.style.transform = `translateX(0px)`;
        } else {
            index++;
            sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
            sliderWrapper.style.transform = `translateX(-${index * cardWidth}px)`;
        }
    }

    // Move to Previous Slide
    function prevSlide() {
        if (index <= 0) {
            index = totalSlides;
            sliderWrapper.style.transition = 'none';
            sliderWrapper.style.transform = `translateX(-${index * cardWidth}px)`;
        } else {
            index--;
            sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
            sliderWrapper.style.transform = `translateX(-${index * cardWidth}px)`;
        }
    }

    let autoSlide = setInterval(nextSlide, 2000);

    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 3000);
    });

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});

document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    const menu = document.querySelector(".mobile-menu");
    const hamburger = document.querySelector(".hamburger");

    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("active");
    }
});
