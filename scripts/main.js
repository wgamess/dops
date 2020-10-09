"use strict";

window.onload = function () {
       
  if (localStorage.getItem('tems')) {
    $('.notice').addClass('notice-destroy');
  } else {
    $('.notice').removeClass('notice-destroy');
  }



  

  $('.btn-true').on('click', function (e) {
    e.preventDefault();
    destroyNotice();
    localStorage.setItem('tems', 'true');
  });
  $('.btn-false').on('click', function (e) {
    e.preventDefault();
    destroyNotice(); //localStorage.setItem('tems','false');
  });

  function destroyNotice() {
    $('.notice').addClass('notice-destroy');
  }

  function utilsCookie(data) {
    let arr = [];
    
    data.map((el)=>{
      arr.push(el);
    });
    
    return arr;
  }
};