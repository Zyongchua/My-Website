var ingredientsCheckbox = $('.ingredients-checkbox');
var stepsCheckbox = $('.steps-checkbox');
var infoCheckbox = $('.info-checkbox');


var sections = $('section');

ingredientsCheckbox.change(function(){
  if(this.checked){
    sections.each(function(){


      if(!$(this).hasClass('ingredients'))
      $(this).fadeOut();
    })
  } else {
    sections.each(function(){
      $(this).fadeIn()});
    }
  })



    infoCheckbox.change(function(){
      if (this.checked) {
        sections.each(function(){


        if(!$(this).hasClass('info')){
          $(this).fadeOut();
        }
        })
        } else {
          sections.each(function(){
        $(this).fadeIn()});
        }
        })
        ;



        stepsCheckbox.change(function(){
          if (this.checked) {
            sections.each(function(){


            if(!$(this).hasClass('steps')){
              $(this).fadeOut();
            }
            })
            } else {
              sections.each(function(){
            $(this).fadeIn()});
            }
            })
            ;
