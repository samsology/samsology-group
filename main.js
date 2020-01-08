const responsive = {
  0:{
    items:1
  },
  320:{
    items:1
  },
  560:{
    items:2
  },
  960:{
    items:3
  }
}

$(document).ready(function(){ 
  
  $nav= $('.nav');
  $toggleCollapse =$('.toggle-collapse');
  
  
  // click event on toggle menu
  $toggleCollapse.click(function(){
    
    $nav.toggleClass('collapse');
  })
  //owl-carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:true,
    nav:true,
    navTest:[$('.owl-navigation.owl-nav-prev'),$('.owl-navigation.owl-nav-next')],
    responsive:responsive
  });
  
  //click to stroll up
  $('.move-up span').click(function() {
    $('html,body').animate({
      scrollTop:0
    }, 1000);
  })
  
  //AOS instance
  AOS.init();
});

const subNumber=document.querySelector('.subNum');
const emailSub=document.querySelector('.form-element');
const msg=document.querySelector('.message')

subNumber.addEventListener('click', onSubmit);


function onSubmit(e) {
  e.preventDefault();
if(emailSub.value==='') {
  msg.innerHTML = 'please enter field';
  setTimeout(()=> msg.remove(),3000)
}else  {
alert('congrats')

nameInput.value='';
emailInput.value='';
}
  console.log(nameInput.value,emailInput.value);
}

