<?php
     $fbid = $_GET['userid'];
?>

<!doctype html>
<html lang="en">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <meta charset="utf-8">
  <title>Looklikecard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta property="fb:app_id" content="275825912927485" />
<meta property="og:url" content="<?= "http://". $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" />
	<meta property="og:type" content="website">
        <meta property="og:title" content="Which footballer do you look like?" >
        <meta property="og:description" content="Find it out" >
	<meta property="og:image"        content="<?= "https://coldplayadmin.sportsocial.in/footballgame/". explode('=',$_SERVER['REQUEST_URI'])[1] .".jpg";?>" />
        <meta property="og:image:width" content="1200" >
      <meta property="og:image:height" content="630" >
<script id="facebook-jssdk" src="//connect.facebook.net/en_US/sdk.js"></script>
<style>
*{
	margin:0px;
	padding:0px;
}
.sharePage{
	margin:1%;
	width:50%;
	margin:auto;
	border:1px solid #024771;
	padding:0px;
}
.heading{
	display:inline-block;
	width:65%;
	vertical-align:middle;
	text-align:center;
	font-weight:700;
	font-size:1.3em;
	color:#024771;
}
.logoHolder{
	display:inline-block;
	vertical-align:middle;
	width:100px;
	height:70px;
	margin:1%;
}
.logoHolder> img{
	display:block;
	margin:auto;
	width:40px;
	height:40px;
	
}
.brandTitle{
	text-align:center;
	width:100%;
	font-size:1em;
	font-weight:700;
	margin:auto;
}
.brandTitle >span:first-child{
	color:#024771;
}
.brandTitle >span:last-child{
	color:#ffa600;
}
.content{
	width:90%;
	border:1px solid black;
}
.similarity,.personImage, .celebrityImage{
	display:inline-block;
	vertical-align:top;
	width:32%;
	margin:0px;
	height:180px;
}
.personImage{
	margin-left:6.5%;
}
.similarity{
	width:25%;
	height:145px;
	margin-left:-2px;
	border:1px solid #024771;
}
.celebrityImage{
	margin-left:-2px;
}
.similarity>p{
	font-family:'Roboto',sans-serif;
	font-size:1.5em;
	font-weight:700;
	text-align:center;
	color:#ffa600
	
}
.similarity>p:first-child{
	margin-top:30%;
}
.share{
	display:block;
	width:30%;
	margin:1% auto;
}
.nameStyle{
	font-family:'Roboto',sans-serif;
	font-size:1.2em;
	text-align:center;
}
.personImage > img,.celebrityImage>img{
	width:100%;
	height:80%;
}
@media (max-width:1000px) and (min-width:850px) {
	.similarity>p{
	 font-size:1.3em;
    }
	.sharePage{
		width:55%;
	}
}
@media (max-width:850px) and (min-width:700px) {
	.similarity>p{
	
	  font-size:1.2em;
    }
	.personImage{
		margin-left:6%;
    }
	.heading{
		font-size:1.2em;
	}
	.sharePage{
		width:60%;
	}
}
@media (max-width:700px) and (min-width:540px) {
	.similarity>p{
	
	  font-size:1.2em;
    }
	.personImage{
		margin-left:6%;
    }
	.heading{
		font-size:1.1em;
	}
	.sharePage{
		width:80%;
	}
}	
@media (max-width:540px) and (min-width:430px){
	.similarity>p{
	
	  font-size:1.1em;
    }
	.personImage{
		margin-left:5%;
    }
	.heading{
		font-size:1em;
	}
	.sharePage{
		width:100%;
	}
}
@media (max-width:430px){
	.similarity>p{
	
	  font-size:1.1em;
    }
	.personImage{
		margin-left:4%;
    }
	.heading{
		font-size:1em;
	}
	.sharePage{
		width:100%;
	}
}
</style>
</head>
<body>
<script>

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '275825912927485',
      xfbml      : true,
      version    : 'v2.10'
		});
		

FB.AppEvents.logPageView();
    // ADD ADDITIONAL FACEBOOK CODE HERE

function onLogin(response) {

  if (response.status == 'connected') {
    FB.api('/me',{locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'}, function(response) {
var picture=response.picture.data.url
 document.getElementById("myImg").src="https://graph.facebook.com/"+response.id+"/picture?width=450";
 console.log(response.id);
window.userfbid=response.id;
 document.getElementById('name').innerHTML=response.first_name;
var host = window.location.host;
$.ajax({
    url: 'https://coldplayadmin.sportsocial.in/user/getFootballerImage',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify({"fbid":response.id,"gender":response.gender,"name":response.first_name}),
    processData: false,
    success: function( data, textStatus, jQxhr ){
        document.getElementById("ftimg").src=data.image;
	document.getElementById("ftname").innerHTML=data.playername;
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
});
                 //     var welcomeBlock = document.getElementById('fb-welcome');
      //welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
    });
  }
}

FB.getLoginStatus(function(response) {
  // Check login status on load, and if the user is
  // already logged in, go directly to the welcome message.
  if (response.status == 'connected') {
    onLogin(response)
    {

    }
  } else {
    // Otherwise, show Login dialog first.
    FB.login(function(response) {
      onLogin(response)
      {

      };
    }, {scope: 'user_friends, email'});
  }
});

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
           // Window.open('page.html');
            getFbUserData();
        } else {
            document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
        }
    }, {scope: 'email'});
}

function share() {
//window.newurl="https://www.facebook.com/dialog/share?app_id=698597133671520&display=popup&href=https%3A%2F%2Fchaseyoursport.sportsocial.in%2Fpage.php%3Fuserid%3D"+window.userfbid;
			//window.popupWindow = window.open(window.newurl,'facebooksharer','height=567,width=572');
			var location  = 'https://chaseyoursport.sportsocial.in/page.php?userid=' + window.userfbid;
			FB.ui(
				{
					method: 'share',
					href: location,
				},
				// callback
				function(response) {
					if (response && !response.error_message) {
						console.log(response);
					} else {
						alert('Error while posting.');
					}
				}
			);
}

</script>

    <div class="sharePage">
<div class="logoHolder">
			<img src="https://coldplayadmin.sportsocial.in/images/Logo.png">
			<p class="brandTitle">
				<span>Sports</span>
				<span>Social</span>
			</p>
	    </div>
                <p class="heading"> Which Footballer do you look like?</p>
                <div class="personImage">
                        <img id="myImg" src="https://coldplayadmin.sportsocial.in/images/player1.jpg">
<p class="nameStyle"  id="name">Nadeem</p>
                </div>
		<div class="similarity">
			<p>Similarity</p>
			<p>90%</p>
		</div>

                <div class="celebrityImage">
                        <img id="ftimg" src="https://coldplayadmin.sportsocial.in/images/player2.jpg"">
<p class="nameStyle" id="ftname">Nadeem</p>
  </div>
      <img src="https://coldplayadmin.sportsocial.in/images/share.png" class="share" role="button"  onclick="share()">
        </div>
  </div>
</body>
</html>


