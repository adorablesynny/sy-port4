/* go to top 버튼 */
document.querySelectorAll(".gotoTop > a").forEach(el => {
    el.addEventListener("click", li => {
        li.preventDefault();
        document.querySelector(el.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

/* 모바일 크기에서 모바일 메뉴 보이기 */
window.addEventListener('resize',function(){
    if( window.innerWidth <= 709){
        document.querySelector('header').classList.add('mob');
        document.querySelector('#visual-wrap p').classList.add('textin');
    }else{
        document.querySelector('header').classList.remove('mob');
    }
});

let mobmenu = document.querySelector('#mob-menu'),
    moblnb = document.querySelector('.mob-lnb');

mobmenu.addEventListener('click',function(){
    mobmenu.classList.toggle('menuon');
});
