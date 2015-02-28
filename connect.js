 SC.initialize({
          client_id: 'ada2ef9470a5b24e4858550357ca9a5b',
          redirect_uri: 'http://external.codecademy.com/soundcloud.html'
          
        });

 
$(document).ready(function() {
  $('a.connect').click(function(e) {
    e.preventDefault();
    SC.connect(function() {
      SC.get('/me', function(me) {
        $('#username').html(me.username);
      });
    });
  });
});

