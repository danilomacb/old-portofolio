function start() {
    var facebook = document.getElementById('facebook');

    facebook.addEventListener('mouseover', facebookOver);
    facebook.addEventListener('mouseout', facebookOut);

    function facebookOver() {
        facebook.setAttribute('src','images/icons/social/facebook2.png');
    }
    function facebookOut() {
        facebook.setAttribute('src','images/icons/social/facebook1.png');
    }
}