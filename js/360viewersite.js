
// 기능부
// page_transition animation
animationLoading = ()=> {

    let loader = document.getElementById('loading'),
    loadContents = document.getElementsByClassName('loading_content'),
    pageStart = document.getElementById('pageStart');

    tlLoader = new TimelineLite({onComplete:byeLoading});

    // Loader Timeline
    tlLoader
        .staggerFromTo(loadContents, 0.3,
            {y:0, autoAlpha: 0},
            {y:16, autoAlpha: 1, ease:Back.easeInOut},
            0.1    
        )
        .fromTo(loader,0.3,
            {autoAlpha: 1},
            {autoAlpha: 0, ease:Power0.easeNone},
            1
        );

    // Loading page out   
    function byeLoading(){
        // console.log("test");
        let tlLoaderOut = new TimelineLite({onComplete: appearMain});
        tlLoaderOut
            .set(loadContents, {backgroundColor:'#67AFC2', color:'#fff'})
            .to(loader, 0.3, {autoAlpha: 1, scale: 1, ease:Power0.easeNone})
            .staggerFromTo(loadContents, 0.3,
                {y:0, autoAlpha: 0},
                {y:16, autoAlpha: 1, ease:Back.easeInOut},
                0.1
            )
            .to(loader, 0.3, { autoAlpha:0, ease:Back.easeIn},'+=0.3');
    }

    // Appear mainPage
    appearMain = () => {
        tlAppear = new TimelineLite({});
        // tlAppear.play();
        tlAppear
            .set(pageStart, {display:'block',visibility:'visible'})
            .to(pageStart,null,{autoAlpha: 1});
    }
}

// container_03 card animation
animationCard = ()=> {

  var w = $(window).width();
  var h = $(window).height();

  $('.img_03').on('mousemove', function(e) {
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h; 
    var dy = e.pageY - h / 2; 
    var dx = e.pageX - w / 2;
    var theta = Math.atan2(dy, dx); 
    var angle = theta * 180 / Math.PI - 90;
    var offsetPoster = $(this).data('offset');
    var transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 3)) + 'deg) scale(1.01)'; // poster transform
    if (angle < 0) {
      angle = angle + 360;
    }
    $(this).css({
      'transform': transformPoster,
      'box-shadow': '0 45px 60px rgba(14,21,47,0.2), 0 16px 40px rgba(14,21,47,0.2)',
    });
  });

  $('.img_03').on('mouseout', function(){
    $(this).css({
      'transform': 'translate(0px)',
      'box-shadow': '0 8px 30px rgba(14,21,47,0.4)'
    });
  });
}

// 작동부

if (matchMedia("screen and (min-width: 1025px)").matches) {

  animationCard(),
  animationLoading();
  
} else {

  animationLoading();
  
}

