function socialHover() {

    /* Github */
    var github = document.getElementById('github');

    github.addEventListener('mouseover', githubOver);
    github.addEventListener('mouseout', githubOut);

    function githubOver() {
        github.setAttribute('src','images/icons/social/githubOver.png');
    }
    function githubOut() {
        github.setAttribute('src','images/icons/social/github.png');
    }

    /* Linkedin */
    var linkedin = document.getElementById('linkedin');

    linkedin.addEventListener('mouseover', linkedinOver);
    linkedin.addEventListener('mouseout', linkedinOut);

    function linkedinOver() {
        linkedin.setAttribute('src','images/icons/social/linkedinOver.png');
    }
    function linkedinOut() {
        linkedin.setAttribute('src','images/icons/social/linkedin.png');
    }

    /* Facebook */
    var facebook = document.getElementById('facebook');

    facebook.addEventListener('mouseover', facebookOver);
    facebook.addEventListener('mouseout', facebookOut);

    function facebookOver() {
        facebook.setAttribute('src','images/icons/social/facebookOver.png');
    }
    function facebookOut() {
        facebook.setAttribute('src','images/icons/social/facebook.png');
    }

    /* Twitter */
    var twitter = document.getElementById('twitter');

    twitter.addEventListener('mouseover', twitterOver);
    twitter.addEventListener('mouseout', twitterOut);

    function twitterOver() {
        twitter.setAttribute('src','images/icons/social/twitterOver.png');
    }
    function twitterOut() {
        twitter.setAttribute('src','images/icons/social/twitter.png');
    }

    /* Instagram */
    var instagram = document.getElementById('instagram');

    instagram.addEventListener('mouseover', instagramOver);
    instagram.addEventListener('mouseout', instagramOut);

    function instagramOver() {
        instagram.setAttribute('src','images/icons/social/instagramOver.png');
    }
    function instagramOut() {
        instagram.setAttribute('src','images/icons/social/instagram.png');
    }

    /* Whatsapp */
    var whatsapp = document.getElementById('whatsapp');

    whatsapp.addEventListener('mouseover', whatsappOver);
    whatsapp.addEventListener('mouseout', whatsappOut);

    function whatsappOver() {
        whatsapp.setAttribute('src','images/icons/social/whatsappOver.png');
    }
    function whatsappOut() {
        whatsapp.setAttribute('src','images/icons/social/whatsapp.png');
    }
}

function profileBackgroundHeight() {
    var windowHeightLessMenu = document.documentElement.clientHeight - 50;

    document.getElementById("profileBackground").style.height = windowHeightLessMenu+"px";
}

function certificadoMaxHeight() {
    var imgMaxHeight = document.documentElement.clientHeight - 100;
    var thumbList = document.getElementsByClassName("thumb");

    var count;
    for (count = 0; count < thumbList.length; count++) {
        thumbList[count].style.maxHeight = imgMaxHeight+"px";
    }
}