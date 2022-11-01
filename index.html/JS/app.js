var password = document.getElementById('password')
var password_eye = document.getElementById('password_eye')
var modeIcon = document.getElementById('mode')
var toggle_menu = document.getElementById('sidemenu_bar')



password_eye.addEventListener('click', function(){
    if(password.type === password){
        password.tpe = 'text'
    }
    else{
        password.tpe = 'password' 
    }
})

modeIcon.addEventListener('click',function(){
    document.body.classList.toggle('darkmode');

    if(modeIcon.classList.contains('fa-moon')){
        modeIcon.classList.add('fa-sun')
        modeIcon.classList.remove('fa-moon')
    }
    else{
        modeIcon.classList.remove('fa-sun')
        modeIcon.classList.add('fa-moon')
    }
})

toggle_menu.addEventListener('click',function(){
    document.getElementById('sidemenu').classList.toggle('active')
})

$(function() {
    // Menu_fixd
    $(window).on('scroll', function(){
        let scrollsize = $(window).scrollTop();

        if(scrollsize > 70){
            $('#nav').addClass('active');
        }
        else{
            $('#nav').removeClass('active');
        }
    })
    // Preloader
    $(window).on('load', function() {

        $('#preloader').hide();
      console.log(window)

    })
})