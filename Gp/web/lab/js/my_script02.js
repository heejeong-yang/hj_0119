var p;
function init() {
    p = document.querySelector('#msg');
            /* DOM객체 이벤트 처리기에 대해 함수 대응
            p.onmouseover = over ;
            p.onmouseout = out ; */

            /* DOM 객체의 addEventListener() 메쏘드 활용
            p.addEventListener("mouseover", over);
            p.addEventListener("mouseout", out);*/

    p.onmouseover = function () {
        p.style.backgroundColor = 'orchid';
    }
    p.onmouseout = function () {
        p.style.backgroundColor = "white";
    }
}
function over() {
    p.style.backgroundColor = "orchid";
}
function out() {
    p.style.backgroundColor = "white";
}