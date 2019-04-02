/* global Rectangle: true */
$(function(){
  var $width   = $('#width'),
      $height  = $('#height'),
      $btnCal  = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area    = $('#area');
$width.keypress(function(e){
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]"']`]/.test(e.key)){
    e.preventDefault();
  }
  if(e.key === '.'){
    if(e.target.value === '') e.preventDefault();
    if(e.target.value.indexOf('.' !== -1)){

    }
  }
})

$width.focusout(function(){
  var result = valid($width.val());

  if(!result.isOK){
    $width
  }
})

$btnCal.click(function(){
  var w = Number($width.val()),
      h = Number($height.val());
  
  var r = new Rectangle(w,h);
  
  $perimeter.val(r.perimeter());
  $area.val(r.area());
})
});
