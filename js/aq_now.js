$('#myBtn').on('click',myFunction);
function myFunction(){
    var dots = $('#dots');
    var moreButton = $('#more');
    var btnText = $('#myBtn');
    console.log(dots);
    var result = $('#dots').css('display');
    if(result=='none'){
        dots.css({display:'inline'});
        moreButton.css({display:'none'});
        btnText.text('+ 더 보기');
        btnText.css({cursor:'pointer'});
    }else{
        dots.css({display:'none'});
        moreButton.css({display:'inline'});
        btnText.text('- 그만 보기');
        btnText.css({cursor:'pointer'});
    }
};
