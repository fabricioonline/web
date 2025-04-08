let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: 'KZwC0RJkDNM', 
        playerVars: {
            'autoplay': 1,
            'loop': 1,
            'controls': 0,  
            'mute': 1,
            'playlist': 'KZwC0RJkDNM',
            'modestbranding': 1,  
            'showinfo': 0,        
            'iv_load_policy': 3   
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    
    // Adjust video size on initial load and when the window resizes
    adjustVideoSize();
    window.addEventListener('resize', adjustVideoSize);
}

function adjustVideoSize() {
    if (player && player.getIframe()) {
        const iframe = player.getIframe();
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.position = 'fixed';
        iframe.style.top = '0';
        iframe.style.left = '0';
    }
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo(); // Loop video
    }
}

// Ensure the YouTube API is loaded
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

document.addEventListener('DOMContentLoaded', function() {
    const aboutPopup = document.getElementById('about-popup');
    const workPopup = document.getElementById('work-popup');
    const contactPopup = document.getElementById('contact-popup');
    const closeButtons = document.querySelectorAll('.close-button');
    const aboutLink = document.getElementById('about-link');
    const workLink = document.getElementById('work-link');
    const contactLink = document.getElementById('contact-link');

    // Function to open the popup
    function openPopup(popup) {
        popup.style.display = 'block';
    }

    // Function to close the popup
    function closePopup(popup) {
        popup.style.display = 'none';
    }

    // Event listeners for close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popup = button.closest('.popup');
            closePopup(popup);
        });
    });

    // Optional: Close popup if clicked outside the content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('popup')) {
            closePopup(event.target);
        }
    });

    // Event listeners for About link
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        openPopup(aboutPopup);
    });

     // Event listeners for Work link
     workLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        openPopup(workPopup);
    });

    // Event listener for Contact link
    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        openPopup(contactPopup);
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        updateCarousel();
    });

    function updateCarousel() {
        const translateValue = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }
    
    // Left Popup Functionality
    const leftPopup = document.getElementById('left-popup');

    // Function to show the popup
    function showLeftPopup() {
        leftPopup.style.display = 'flex';
    }

    // Set a timeout to show the popup after 10 seconds
    setTimeout(showLeftPopup, 10000);
});