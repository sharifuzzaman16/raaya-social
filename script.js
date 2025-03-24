document.addEventListener('DOMContentLoaded', function() {
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