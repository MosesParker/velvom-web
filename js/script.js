
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
            var uiWidth = $(window).width();
            bg.style.transition = '0.2s ease-out';
           
            if(uiWidth > 1024)
            {
                bg.style.backgroundSize = 100 - +window.pageYOffset / 13 + '%';
            }

           

            bg.style.opacity = 1 - +window.pageYOffset / 700 + '';
        });
        /**--- Main Hero Section Background size will reduce when scrolling. - SCRIPT END--- */




        function callCategoryMethodFromCategory(paintingTypeCnt)
    {
        if(paintingTypeCnt == "1")
        {
            window.location.href="caricature.html";
        }
        else if(paintingTypeCnt == "2")
        {
            window.location.href="printedposters.html";
        }
        else if(paintingTypeCnt == "3")
        {
            window.location.href="digitalpainting.html";
        }
        else if(paintingTypeCnt == "4")
        {
            window.location.href="stencil.html";
        }
        else if(paintingTypeCnt == "5")
        {
            window.location.href="leafart.html";
        }
        else if(paintingTypeCnt == "6")
        {
            window.location.href="portraits.html";
        }
        else if(paintingTypeCnt == "7")
        {
            window.location.href="bookfolding.html";
        }
        else if(paintingTypeCnt == "8")
        {
            window.location.href="event.html";
        }
        else if(paintingTypeCnt == "9")
        {
            window.location.href="magic_vr.html";
        }
        else if(paintingTypeCnt == "10")
        {
            window.location.href="keychains.html";
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
                        var topValue1 = uiWidth <= 700 ? '59%' : uiWidth <= 800 ? '59%' : '40%';
                        var topValue2 = uiWidth <= 700 ? '67%' : uiWidth <= 800 ? '67%' : '45%';
                        var topValue3 = uiWidth <= 700 ? '75%' : uiWidth <= 800 ? '75%' : '50%';
                        var topValue4 = uiWidth <= 700 ? '83%' : uiWidth <= 800 ? '83%' : '55%';
            
                        $(this).siblings('.social-link-for-mobile-tab-link1').animate({top: topValue1}, 200);
                        $(this).siblings('.social-link-for-mobile-tab-link2').animate({top: topValue2}, 200);
                        $(this).siblings('.social-link-for-mobile-tab-link3').animate({top: topValue3}, 200);
                        $(this).siblings('.social-link-for-mobile-tab-link4').animate({top: topValue4}, 200);
            
                        $('.social-link-for-mobile-tab-link1 i,.social-link-for-mobile-tab-link2 i, .social-link-for-mobile-tab-link3 i, .social-link-for-mobile-tab-link4 i').delay(500).fadeIn(200);
                        flag = 1;
                    } else {
                        // Reset the top values to their default
                        $('.social-link-for-mobile-tab-link1, .social-link-for-mobile-tab-link2, .social-link-for-mobile-tab-link3, .social-link-for-mobile-tab-link4').animate({
                            top: '91%'
                        }, 200);
            
                        $('.social-link-for-mobile-tab-link1 i,.social-link-for-mobile-tab-link2 i, .social-link-for-mobile-tab-link3 i, .social-link-for-mobile-tab-link4 i').delay(500).fadeOut(200);
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