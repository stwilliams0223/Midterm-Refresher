// Three *new* message when page loads
// Show Number of Messages in Inbox
// Add JavaScript to close button

var msg1 = "Check your Inbox";
var msg2 = "Interesting points";
var total = 100 + 4561;

$('.header').text(msg1);

$('.content p').text('You have ' + total + ' unread messages');


$('.message .close').on('click', function() {
  $(this).closest('.message').fadeOut(200);
});
