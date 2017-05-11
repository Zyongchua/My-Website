// 1. It should link the checkbox to our script.
// 2. It should test if checkbox is toggled on or off.
// 3. If checked, it should test each article
  // 4. It should only show the article that is non-dairy...
  // 5. ...and hide the rest

var dairyCheckbox = $('.dairy-checkbox');
// var articles = document.querySelectorAll('article');
var articles = $('article');
//console.log(articles);

dairyCheckbox.change(function(){
  if (this.checked) {
    //console.log('yes it is checked!');

articles.each(function(){
//console.log($(this));

if(!$(this).hasClass('non-dairy')){
  $(this).fadeOut();
}
})
} else {
  articles.each(function(){
$(this).fadeIn()});
}
})
;
