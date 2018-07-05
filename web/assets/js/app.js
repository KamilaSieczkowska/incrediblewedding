$( document ).ready(function() {
    
    var imgArr = [
        "assets/images/mini/dywan_bialy-mini.jpg",
        "assets/images/mini/litery-mini.jpg",
        "assets/images/mini/podtalerze_zlote-mini.jpg",
        "assets/images/mini/scianka_bukszpan-mini.jpg",
        "assets/images/mini/scianka_kwiaty.jpg",
        "assets/images/mini/dywan_bialy-mini.jpg",
        "assets/images/mini/litery-mini.jpg",
        "assets/images/mini/podtalerze_zlote-mini.jpg",
        "assets/images/mini/scianka_bukszpan-mini.jpg",
        "assets/images/mini/scianka_kwiaty.jpg",
        "assets/images/mini/dywan_bialy-mini.jpg",
        "assets/images/mini/litery-mini.jpg",
        "assets/images/mini/podtalerze_zlote-mini.jpg",
        "assets/images/mini/scianka_bukszpan-mini.jpg",
        "assets/images/mini/scianka_kwiaty.jpg",
        "assets/images/mini/dywan_bialy-mini.jpg",
        "assets/images/mini/litery-mini.jpg",
        "assets/images/mini/podtalerze_zlote-mini.jpg",
        "assets/images/mini/scianka_bukszpan-mini.jpg",
        "assets/images/mini/scianka_kwiaty.jpg",
        "assets/images/mini/dywan_bialy-mini.jpg",
        "assets/images/mini/litery-mini.jpg",
        "assets/images/mini/podtalerze_zlote-mini.jpg",
        "assets/images/mini/scianka_bukszpan-mini.jpg"
    ];

    var bigImgArr = [
        "assets/images/dywan_bialy.jpg"
    ];

    var tempImgLink = '';
    var tempImgLinksArr = [];

    for(var i=0; i<imgArr.length; i++){
        tempImgLink = '<a href="'+bigImgArr+'"><img src="'+imgArr[i]+'"></a>';
        tempImgLinksArr.push(tempImgLink);
    }
    var galleryCnt = tempImgLinksArr.join(' ');

    $('#gallery-box').html(galleryCnt);

    $('#gallery-box a').on('click', function(e) {
        e.preventDefault();

        var imgSrc = $(this).attr('href');

        var lightbox = '<div class="lightbox"><div class="lightbox__container"><button class="lightbox__close"><img src="assets/images/icons/times.svg"></button><div class="lightbox__img"><img src="'+imgSrc+'"/></div></div></div>';
        $('#lightbox').html(lightbox);
    });

    $(document).on('click', '.lightbox__close', function() {
        $(this).closest('.lightbox').fadeOut(function() {
            $(this).remove();
        })
    })


          
          




});