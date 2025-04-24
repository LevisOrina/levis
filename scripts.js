    //TEXT CHANGER
    const textContainer = document.getElementById('text-container');
    const phrases = [
        "Logo Designing",
        "Flyer Designing",
        "Book Covers",
        "Web Designing",
        "Branding"
    ];
    let currentIndex = 0;

    function changeText() {
        textContainer.textContent = phrases[currentIndex];
        
        textContainer.classList.add('highlighted');
        setTimeout(() => {
            textContainer.classList.remove('highlighted');
        }, 500); 

        currentIndex = (currentIndex + 1) % phrases.length; 
    }

    setInterval(changeText, 2000);
