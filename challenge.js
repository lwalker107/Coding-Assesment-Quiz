window.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('section button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentIndex = Array.from(button.parentNode.parentNode.parentNode.children).indexOf(button.parentNode.parentNode);

            if (currentIndex < buttons.length - 1) {
                const nextPage = currentIndex + 2;
                const nextPage = currentIndex + 3;
                const nextPage = currentIndex + 4;
                const nextPage = currentIndex + 5;
                const nextPage = currentIndex + 6;
                const nextPage = currentIndex + 7;
                const nextPageURL = 'section' + nextPage + '_index.html';
                stopTimer();
                location.href = nextPageURL;
            }
        });
    });

    startTimer(); 
});