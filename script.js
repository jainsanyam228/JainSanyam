$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });

    var typed = new Typed(".typing",{
        strings: ["Student" , "Competitive Programmer" , "App Developer" , "Student" , "Competitive Programmer"],
        typeSpeed:100,
        backSpeed:60,
        loop: true
    });
    var typedl = new Typed(".typing-2",{
        strings: ["Student" , "Competitive Programmer" , "App Developer" , "Student" , "Competitive Programmer"],
        typeSpeed:100,
        backSpeed:60,
        loop: true
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
