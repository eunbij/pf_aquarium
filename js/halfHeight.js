// 브라우저 너비, 높이 변수 할당하기
let bw = $(window).width();
let bh = $(window).height();
$('#wrap').css({height:bh});
// 브라우저 높이의 반을 변수(halfHeight) 할당
var halfHeight = bh/2;
// 콘솔에 문자열 포함 출력
console.log('브라우저 너비값 : '+bw);
console.log('브라우저 높이값 : '+bh);
console.log('브라우저 높이의 반 : '+halfHeight);
// 적용 (margin-top을 동적으로 css)
// $('#contents .youtube').css({'margin-top':halfHeight});
$('.youtube').css({'margin-top':halfHeight});