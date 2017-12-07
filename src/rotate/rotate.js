import $ from 'jquery';

$(function(){
    $(".sausage").on('click',function(){
        $('.img').removeClass('active');
        $('.sausege-img').addClass('active');
    });
      $(".hamburger").on('click',function(){
        $('.img').removeClass('active');
        $('.hamburger-img').addClass('active');
    });
   
     
     // function moveTab (sel,sel2) {
     //   var tab = '.' + sel
     //   var img = '.' + sel + '-img'
     //   $(tab).on("click",function(){
     //     $(".img").removeClass('active');
     //     $("img").addClass('active');
     //     console.log(img)
     //   })
     // }  
     // moveTab('sausage','hamburber');
   });