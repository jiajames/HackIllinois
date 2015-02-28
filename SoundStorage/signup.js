<script src="http://connect.soundcloud.com/sdk.js"></script>
<script>
// initialize client with app credentials
SC.initialize({
  client_id: 'ada2ef9470a5b24e4858550357ca9a5b',
  redirect_uri: 'http://localhost:3000/soundcloud/connected'
});

// initiate auth popup
SC.connect(function() {
  SC.get('/me', function(me) { 
    alert('Hello, ' + me.username); 
  });
});
</script>