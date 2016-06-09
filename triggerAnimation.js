;(function() {
    window.addEventListener('scroll', function() {
        var revealDetect = document.querySelectorAll('.taos-reveal-detect:not(.taos-animated)');
        revealDetect = [].slice.call(revealDetect);  // may improve some performance?
        for(var i=0; i<revealDetect.length; i++) {
            if(revealDetect[i].getBoundingClientRect().top < window.innerHeight) {
                revealDetect[i].classList.add('taos-animated');
            }
        }
    });
})();