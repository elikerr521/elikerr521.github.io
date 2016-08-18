var url = "http://maps.googleapis.com/maps/api/staticmap?center=601+W+26th+Street,NY,NY&zoom=15&scale=false&size=600x300&maptype=roadmap&key=AIzaSyDJXU9P8ieyia_jPLo26RSrj4tx7Kq1rg4&format=png&visual_refresh=true&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/150-mewtwo-icon.png%7Cshadow:true%7C601+W+26th+Street,NY,NY&markers=icon:http://orig11.deviantart.net/9adf/f/2014/019/7/4/charizard_hgss_sprite_64x64_by_15crashbandicoot15-d72tiya.png%7Cshadow:true%7C608+W+30th+Street,NY,NY&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/010-caterpie-icon.png%7Cshadow:true%7C580+W+27th+Street,NY,NY&markers=icon:http://megaicons.net/static/img/icons_sizes/388/1147/64/007-squirtle-icon.png%7Cshadow:true%7C601+W+25th+Street,NY,NY";
var markerStart= "&markers=icon:http://icons.iconarchive.com/icons/hektakun/pokemon/64/035-Clefairy-icon.png%7Cshadow:true%7CAlbany,+NY";

//var pik1 = encodeURI("601 W 26th St. NY");

//var pik2 = encodeURI("320 E 166th St. NY")
var pikas = ["601 W 26th St. NY,NY",]


for ( var i=0; i<pikas.length; i ++){
    var pika = encodeURI(pikas[i])
    url = url + markerStart +  pika;

}

var htmlIMG = document.createElement( "img" );
$("body").append(htmlIMG);
$("img").attr("src", url);