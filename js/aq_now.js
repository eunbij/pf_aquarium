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

$('#contents .search_container').hover(function(){
    $(this).children('i').css({backGround:'#fff'});
},function(){
    $(this).children('i').css({backGround:'#1D496A'});
});