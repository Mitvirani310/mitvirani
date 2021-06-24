

  $(document).ready(function()
  {
      $(window).scroll(function()
      {
          if(this.scrollY > 20)
          {
              $('.navbar').addClass('sticky');
          }
          else
          {
              $('.navbar').removeClass('sticky');
          }
      });
  
      $('.menu-btn').click(function()
      {
          $('.navbar .menu').toggleClass('active'); 
      });
  
      $('.navbar .menu li a').click(function()
      {
              $('.navbar .menu').toggleClass('active');
      });
  
  });    

  $(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });
  