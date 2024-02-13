
        /**--- Fixed Title Header. - SCRIPT START--- */
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.fixed-header');
            const scrollY = window.scrollY;

            if (scrollY > 500) {
                header.classList.add('active');
                header.style.transition = "all 1s ease-out";
            } else {
                header.classList.remove('active');
                header.style.transition = "all 1s ease-in";
            }
        });
        /**--- Fixed Title Header. - SCRIPT END--- */




        /**--- Main Hero Section Background size will reduce when scrolling. - SCRIPT START--- */
        const bg = document.getElementById('home-bg-image');
        window.addEventListener('scroll', function () {
            bg.style.transition = '0.2s ease-out';
            bg.style.backgroundSize = 140 - +window.pageYOffset / 13 + '%';

            bg.style.opacity = 1 - +window.pageYOffset / 700 + '';
        });
        /**--- Main Hero Section Background size will reduce when scrolling. - SCRIPT END--- */




        function callCategoryMethod(val) {

            if(val==1)
            {
                window.location.href = 'category.html';
            }
            
        }



        $(window).on('load', function () {

            /**--- Menu Section with ink effect when we click the menuicon - SCRIPT START--- */
            function smokeeffect() {
                var modalTrigger = $('.menu-section'),
                    transitionLayer = $('.cd-transition-layer'),
                    transitionBackground = transitionLayer.children(),
                    modalWindow = $('.full-menu');

                //open modal window
                modalTrigger.on('click', function (event) {
                    document.getElementById('body').style.overflow = 'hidden';
                    document.getElementById('cd-transition-layer').style.display = "block";
                    event.preventDefault();
                    transitionLayer.addClass('visible opening');
                    var delay = ($('.no-cssanimations').length > 0) ? 0 : 600;
                    setTimeout(function () {
                        modalWindow.addClass('visible');
                    }, delay);
                });

                //close modal window
                modalWindow.on('click', '.modal-close', function (event) {
                    document.getElementById('body').style.overflowY = 'visible';
                    $(window).on('scroll');
                    event.preventDefault();
                    transitionLayer.addClass('closing');
                    modalWindow.removeClass('visible');
                    transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                        transitionLayer.removeClass('closing opening visible');
                        transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
                    });
                });
            }
            smokeeffect();
            /**--- Menu Section with ink effect when we click the menuicon - SCRIPT END--- */






            /**--- Social Media Popup Icon Links For Mobile - SCRIPT START--- */
            $(function () {
                var flag = 0;
            
                $('.social-link-for-mobile-tab-shareicon').on('click', function () {
                    if (flag == 0) {
                        // Calculate the desired top value based on the UI width
                        var uiWidth = $(window).width();
                        var topValue = uiWidth <= 768 ? '60%' : '60%';
            
                        $(this).siblings('.social-link-for-mobile-tab-link1').animate({
                            top: topValue
                        }, 200);
            
                        $(this).siblings('.social-link-for-mobile-tab-link2').delay(200).animate({
                            top: topValue === '60%' ? '70%' : '70%' // Adjust the second element's top value accordingly
                        }, 200);
            
                        $(this).siblings('.social-link-for-mobile-tab-link3').delay(300).animate({
                            top: topValue === '60%' ? '80%' : '80%' // Adjust the third element's top value accordingly
                        }, 200);
            
                        $('.social-link-for-mobile-tab-link1 i,.social-link-for-mobile-tab-link2 i, .social-link-for-mobile-tab-link3 i').delay(500).fadeIn(200);
                        flag = 1;
                    } else {
                        // Reset the top values to their default
                        $('.social-link-for-mobile-tab-link1, .social-link-for-mobile-tab-link2, .social-link-for-mobile-tab-link3').animate({
                            top: '91%'
                        }, 200);
            
                        $('.social-link-for-mobile-tab-link1 i,.social-link-for-mobile-tab-link2 i, .social-link-for-mobile-tab-link3 i').delay(500).fadeOut(200);
                        flag = 0;
                    }
                });
            });
            /**--- Social Media Popup Icon Links For Mobile - SCRIPT END--- */


            /**--- Previous and Next Slide section for what's new section - SCRIPT START--- */
            const slides = document.querySelectorAll('.slide');
            let currentSlide = 0;

            function showSlide(slideIndex) {
                slides.forEach(slide => slide.style.display = 'none');
                slides[slideIndex].style.display = 'block';
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            function prevSlide() {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            }

            document.querySelector('.next-slide').addEventListener('click', nextSlide);
            document.querySelector('.prev-slide').addEventListener('click', prevSlide);

            showSlide(currentSlide);
            /**--- Previous and Next Slide section for what's new section - SCRIPT END--- */

        });