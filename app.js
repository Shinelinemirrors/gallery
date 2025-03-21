(function() {
    document.addEventListener("DOMContentLoaded", function() {
        var galleryLinks = document.querySelectorAll('.gallery-link');
        
        if (galleryLinks.length > 0) {
            $(galleryLinks).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                    titleSrc: function(item) {
                        var figcaption = item.el.find('figcaption');
                        return figcaption.length ? figcaption.text() : item.el.attr('title');
                    }
                },
                zoom: {
                    enabled: true
                },
                gallery: {
                    enabled: true,
                    navigateByImgClick: false,
                    tCounter: ''
                },
                disableOn: function() {
                    return window.innerWidth > 640;
                }
            });
        }
    });
})();
