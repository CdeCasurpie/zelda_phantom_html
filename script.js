document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        // Reintentar reproducción si falla inicialmente
        video.addEventListener('error', function() {
            console.log('Error al cargar el video, reintentando...');
            const currentSrc = video.querySelector('source').src;
            video.querySelector('source').src = currentSrc;
            video.load();
            video.play();
        });
        
        // Garantizar que el video esté en loop
        video.addEventListener('ended', function() {
            video.play();
        });
    });
    
    // Añadir efecto de paralaje a las nubes cuando se hace scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const nubes = document.querySelector('.nubes');
        
        if (nubes) {
            // Efecto de paralaje suave
            nubes.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        }
    });
}); 