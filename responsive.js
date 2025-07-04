
document.addEventListener('DOMContentLoaded', function () {
    function isMobile() {
        return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (isMobile()) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.add('desktop');
    }
});
