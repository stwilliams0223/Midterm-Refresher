// Remove explitives from comments
// REF: http://api.jquery.com/contains-selector
// REF: http://api.jquery.com/addclass/


// array


$('.text:contains("doodoo")').addClass('bad');

console.log($('.text:contains("doodoo")').length);
$('.text:contains("doodoo")').addClass('bad');

var bad = ['doodoo', 'nerd', '378', ':-)'];



// for loop

for( var i=0; i < bad.length; i++){

console.log(bad[i]);


}
