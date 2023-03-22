
/* 스크롤 이펙트 */ 
function scrollProgress(){

    let info = document.querySelector('#info-wrap').offsetTop,
    hospital = document.querySelector('#hospital-wrap').offsetTop,
    check = document.querySelector('#check-wrap').offsetTop,
    pethotel = document.querySelector('#pethotel-wrap').offsetTop,
    reserve = document.querySelector('#reserv-wrap').offsetTop,
    scrollTop = window.scrollY;


    if( scrollTop >= info - 500 && window.innerWidth > 709 ){
        document.querySelector('#visual-wrap p').classList.add('textout');
    }else if ( scrollTop <= 10 ){
        document.querySelector('#visual-wrap p').classList.remove('textout');
        document.querySelector('#visual-wrap p').classList.add('textin');
    }

    if( scrollTop >= info -300){
        document.querySelector('.info-left').classList.add('color');
    }

    if( scrollTop >= hospital - 200){
        document.querySelector('#hospital-wrap').classList.add('boxin');
    }

    if( scrollTop >= check - 200){
        document.querySelector('.check-list').classList.add('boxdown');
    }
    
    if( scrollTop >= pethotel - 150 ){
        document.querySelector('.pet-facility').classList.add('fade');
    }
    if( scrollTop >= pethotel + 200){
        document.querySelector('.reserv-cont').classList.add('circleup');
    }
}

window.addEventListener("scroll",scrollProgress);
    