//查詢瀏覽器
var WHAT = navigator.userAgent;
console.log(WHAT);

/**
 * Modernizr
 */
if(Modernizr.textshadow){
    // console.log('你的瀏覽器支援textshadow');
}else{
  // not support
  console.log("你的瀏覽器不支援textshadow");
}
if(Modernizr.input.placeholder){
    // console.log('你的瀏覽器支援input placeholder');
}else{
  // not support
  console.log("你的瀏覽器不支援input placeholder");
}
if(Modernizr.inputtypes.search){
    // console.log('你的瀏覽器支援input search');
}else{
  // not support
  console.log("你的瀏覽器不支援input search");
}
if(Modernizr.input.pattern){
    // console.log('你的瀏覽器支援input pattern');
}else{
  // not support
  console.log("你的瀏覽器不支援input pattern");
}
if(Modernizr.input.required){
    // console.log('你的瀏覽器支援input required');
}else{
  // not support
  console.log("你的瀏覽器不支援input required");
}
if(Modernizr.csscolumns){
    // console.log('你的瀏覽器支援csscolumns');
}else{
  // not support
  console.log("你的瀏覽器不支援csscolumns");
}


