let slideIndex = 1;
        showSlides(slideIndex);
 
        function passarImagem(n) {
            showSlides(slideIndex += n);
        }
 
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
 
        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("slides");
            //let dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            /*for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }*/
            slides[slideIndex - 1].style.display = "block";
            //dots[slideIndex - 1].className += " active";
 
            // Adicionando setTimeout para avançar automaticamente após 3 segundos
            setTimeout(() => {
                showSlides(slideIndex += 1);
            }, 3000);
        }

