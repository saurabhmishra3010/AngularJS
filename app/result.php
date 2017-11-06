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
        <meta property="fb:app_id" content="698597133671520" />
<meta property="og:url"content="<?= "http://". $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>" />
        <meta property="og:type" content="website">
        <meta property="og:title" content="Which footballer do you look like?" >
        <meta property="og:description" content="Find it out" >
        <meta property="og:image"        content="<?= "https://coldplayadmin.sportsocial.in/footballgame/". explode('=',$_SERVER['REQUEST_URI'])[1] .".jpg";?>" />
        <meta property="og:image:width" content="1200" >
        <meta property="og:image:height" content="630" >
<script id="facebook-jssdk" src="//connect.facebook.net/en_US/sdk.js"></script>
<style>
.sharePage{
        margin:1%;
        margin:auto;
        padding:0px;
}
</style>
</head>
<body>
 <div class="sharePage">
 <img class="img-responsive" src="<?= "https://coldplayadmin.sportsocial.in/footballgame/". explode('=',$_SERVER['REQUEST_URI'])[1] .".jpg";?>">
</div>
</body>
</html>

