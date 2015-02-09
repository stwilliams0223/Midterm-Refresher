// Remove explitives from comments
// REF: http://api.jquery.com/contains-selector
// REF: http://api.jquery.com/addclass/
// Extend into an array of explitives




$('.text:contains("doodoo")').addClass('bad');

console.log($('.text:contains("doodoo")').length);