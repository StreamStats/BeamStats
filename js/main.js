$(document).ready(function(event){
   $('#submit').click(function(event){
      getData();
      
   });
   $('#formThing').submit(function(event){
      event.preventDefault();
      getData();
   });
});
function getData(){
    $.get('https://beam.pro/api/v1/channels/' + $('#inputText').val(), "", function(data){
         var avatar = "https://beam.pro/api/v1/users/" + data['user']['id'] + "/avatar";
         var username = data['user']['username'];
         var followers = data['numFollowers'];
         var experience = data['user']['experience'];
         var sparks = data['user']['sparks'];
         var channelID = data['user']['id'];
         var totalViews = data['viewersTotal'];
         var online = data['online'];
         if(data['type'] != null){
            var lastPlayed = data['type']['name'];
         }else{
            var lastPlayed = "None";
         }
         var joined = data['createdAt'];
         var html = '<center><img src="' + avatar + '"width="100px" height="100px" style="border:3px solid #fff">';
         html += '<h1>' + username + '</h1>';
         html += '<br><b>Followers: </b>' + followers;
         html += '<br><b>Experience: </b>' + experience;
         html += '<br><b>Sparks: </b>' + sparks;
         html += '<br><b>Channel ID: </b>' + channelID;
         html += '<br><b>Total Views: </b>' + totalViews;
         html += "<br>";
         if(online){
             html += '<br><b><font color="green"><a href="https://beam.pro/' + username + '">Online</a></font></b>';
         }else{
             html += '<br><b><font color="red">Offline</font></b>';
         }
         html+= '<br><b>Last Played: </b>' + lastPlayed;
         html += '<br><b>Joined on: </b>' + joined.replace('T', ' at ');
         $('.profile').html(html);
      }).fail(function(data){
            html = '<h1>A user with that name does not exist.';
             $('.profile').html(html);
            return;
      });;
}