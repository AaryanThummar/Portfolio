$(document).ready(function(){
    // === Sticky Navbar on Scroll ===
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // === Mobile Menu Toggle ===
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    // === Close Mobile Menu on Link Click ===
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // === Typing Animation (Home) ===
    new Typed(".typing", {
        strings: ["Full Stack Developer", "Automation Creator", "Security Learner", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // === Typing Animation (About) ===
    new Typed(".typing-2", {
        strings: ["Full Stack Developer", "Automation Creator", "Security Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // === Owl Carousel (Skills & Goals) ===
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });

    // === AOS (Animate on Scroll) Initialization ===
    AOS.init({
        duration: 1000, // duration of animation
        once: true,     // whether animation should happen only once
        offset: 120     // offset (in px) from the original trigger point
    });
    
    // === Certificate Modal Logic (From your old script) ===
    const modal = document.getElementById('certificate-modal');
    const viewButton = document.getElementById('view-cert-btn');
    const closeButton = document.querySelector('.close-btn');

    if (modal && viewButton && closeButton) {
        viewButton.onclick = function() { modal.style.display = 'block'; }
        closeButton.onclick = function() { modal.style.display = 'none'; }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }

    // === Copy to Clipboard Logic (From your old script) ===
    const phoneButton = document.getElementById('phone-btn');
    const tooltip = document.getElementById('copy-tooltip');

    if (phoneButton && tooltip) {
        phoneButton.onclick = function() {
            const phoneNumber = '8369390069';
            
            navigator.clipboard.writeText(phoneNumber).then(() => {
                tooltip.classList.add('visible');
                setTimeout(() => {
                    tooltip.classList.remove('visible');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    }
});