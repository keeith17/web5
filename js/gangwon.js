(function($){

    // 네비게이션
    // $('.main-btn').mouseenter(function(){
    //     $('.sub').stop().slideUp(0);
    //     $(this).next().stop().slideDown(300);

    //     $('.main-btn').removeClass('on');
    //     $(this).addClass('on');
    // });
    //내비게이션 온 방식
    // $('.main-btn').on('mouseenter', function(){
    //     $('.sub').stop().slideUp(0);
    //     $(this).next().stop().slideDown(300);

    //     $('.main-btn').removeClass('on');
    //     $(this).addClass('on');
    // });
    //객체(object) 형식의 이벤트
    // #('.main-btn').on({});
    $('.main-btn').on({
        mouseenter: function(){
            $('.sub').stop().slideUp(0);
            $(this).next().stop().slideDown(300);
    
            $('.main-btn').removeClass('on');
            $(this).addClass('on');     
        },
        focusin: function(){
            $('.sub').stop().slideUp(0);
            $(this).next().stop().slideDown(300);
    
            $('.main-btn').removeClass('on');
            $(this).addClass('on');    
        }
    });

     




    //네비게이션 접근성
    // $('.main-btn').focusin(function(){
    //     $('.sub').stop().slideUp(0);
    //     $(this).next().stop().slideDown(300);

    //     $('.main-btn').removeClass('on');
    //     $(this).addClass('on');
    // });

    //내비게이션 마우스 뗄 때
    // $('#nav').mouseleave(function(){
    //     $('.sub').stop().slideUp(300);
    //     $('.main-btn').delay(300).removeClass('on');
    // });

    $('#nav').on({
        mouseleave:function(){
            $('.sub').stop().slideUp(300);
            $('.main-btn').delay(300).removeClass('on');
        }
    });



    //부드럽게 보이고(fadeIn(300))
    //부드럽게 사라지고(fadeOut(0))

    // $('.main-btn').mouseenter(function(){
    //     $('.sub').stop().fadeOut(0);
    //     $(this).next().stop().fadeIn(300);

    //     $('.main-btn').removeClass('on');
    //     $(this).addClass('on');
    // });

    // $('#nav').mouseleave(function(){
    //     $('.sub').stop().fadeOut(300);
    //     $('.main-btn').delay(300).removeClass('on');
    // });





    //메인슬라이드
    // let cnt=0;
    // const slideWrap = $('.slide-wrap');
    // const n = 3; //전체 슬라이드 개수

    //1.메인슬라이드 함수
    // function mainSlide(){
    //     slideWrap.animate({left:`${-100*cnt}%`}, 600, function(){
    //         cnt>n-1?cnt=0:cnt;
    //         slideWrap.animate({left:`${-100*cnt}%`}, 0);
    //     })
    // }
    //1-2 메인슬라이드 페이드인아웃



    //2.다음카운트 함수
    // function nextCount(){
    //     cnt++;
    //     mainSlide();
    // }


    //3.자동타이머 함수
    // function autoTimer(){
    //     setInterval(nextCount, 3000);
    // }

    // autoTimer();




    //1메인슬라이드 함수 상하
    let cnt = 0;
    function mainSlide(){
        $('.slide-wrap').animate({top:-300*cnt},600, function(){
            cnt>2?cnt=0:cnt;
            cnt<0?cnt=2:cnt;
            $('.slide-wrap').animate({top:-300*cnt},0);
        });
    }



    //2다음카운트 함수
    function nextCount(){
        cnt++;
        mainSlide();
    }
    function prevCount(){
        cnt--;
        mainSlide();
    }



    //3자동타이머 함수
    function autoTimer(){
        setInterval(prevCount, 2000);
    }

    autoTimer();







    //공지사항 갤러리 탭메뉴 클릭이벤트
    // $('.gallery-btn').click(function(){
    //     $('.notice-btn').addClass('on');
    //     $('.gallery-btn').addClass('on');

    //     $('.notice-box').addClass('on');
    //     $('.gallery-box').addClass('on');

    // });

    $('.gallery-btn').on({
        click:function(){
            $('.notice-btn').addClass('on');
            $('.gallery-btn').addClass('on');
    
            $('.notice-box').addClass('on');
            $('.gallery-box').addClass('on');    
        }
    });



    // $('.notice-btn').click(function(){
    //     $('.notice-btn').removeClass('on');
    //     $('.gallery-btn').removeClass('on');

    //     $('.notice-box').removeClass('on');
    //     $('.gallery-box').removeClass('on');
    // });
    
    $('.notice-btn').on({
        click:function(){
            $('.notice-btn').removeClass('on');
            $('.gallery-btn').removeClass('on');
    
            $('.notice-box').removeClass('on');
            $('.gallery-box').removeClass('on');    
        }
    });





    //팝업메뉴
    // $('.link-btn').click(function(){
    //     $('#modal').stop().fadeIn(300);
    // });
    // $('.close-btn').click(function(){
    //     $('#modal').stop().fadeOut(300);
    // });


    $('.link-btn').on({
        click:function(){
            $('#modal').stop().fadeIn(300);
        }
    });
    $('.close-btn').on({
        click:function(){
            $('#modal').stop().fadeOut(300);
        }
    });


})(jQuery);