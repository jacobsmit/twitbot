 var Twitter = require('twitter');

var client = new Twitter({
	consumer_key: 'mxkwIKNlrXZ2Ri4oDhXJmUzWy',
	consumer_secret: 'TqiGmhlYs0YNAw0mDmBE6jdHpzhXt1PMKdk8VADvsqOMgeJCTZ',
	access_token_key: '1000041914186448896-rxsZcs82y9sHFB0kRkifjuHdngWGzX',
	access_token_secret: 'z1I7p4p0E92BHVrGlnkP8Vt3LatjFgiyH0eLi2hItHKKC',
	timeout_ms: 120000
});
 
var comp = ['best', 'kindest', 'nicest', 'hottest', 'sexiest', 'most epic', 'coolest', 'most swag', 'most honest' , 'most beautiful' , 'smartest' , 'most amazing' , 'most awesome' , 'cutest' , 'neatest' , 'most supreme' , 'most excellent' ,  'boldest' , 'brightest' , 'classiest' , 'cleverest' , 'fittest' , 'finest' , 'friendliest' , 'gentlest' , 'softest' , 'wisest', 'most talented']
var RanComp = function() {
	compliment = comp[Math.floor(Math.random() * comp.length)];
	return compliment;
}

var comp1 = [' I have ever met', ' I have ever seen', ' I know', ' I have ever witnessed'];
var RanComp1 = function() {
	compliment = comp1[Math.floor(Math.random() * comp1.length)];
	return compliment;
}

var comp2 = ['love', 'appreciate', 'respect' , 'like', 'really love' , 'really like' , 'respect' , 'adore' , 'want to spend my life with']
var RanComp2 = function() {
	compliment = comp2[Math.floor(Math.random() * comp2.length)];
	return compliment;
}

client.stream('statuses/filter', {track: '#depressed'}, function(stream) {
	
  stream.on('data', function(tweet) {
	  
	var reply = "@" + tweet.user.screen_name + " You are the " + RanComp() + ' and ' + RanComp() + ' person' + RanComp1() + ' and I ' + RanComp2() + ' you!';
	
	client.post('statuses/update', {status:reply}, function(error, tweetReply, response){
		
		if(error){
			console.log(error);
		}	
		
		console.log(tweetReply.text);
	});
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});


