function initialize() {

}

    var latLng = new google.maps.LatLng(49.47805, -123.84716);
     var homeLatLng = new google.maps.LatLng(49.47805, -123.84716);

     var map = new google.maps.Map(document.getElementById('map_canvas'), {
       zoom: 12,
       center: latLng,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     });

     var pictureLabel = document.createElement("img");
     pictureLabel.src = "home.jpg";

     var marker = new MarkerWithLabel({
       position: homeLatLng,
       map: map,
       draggable: true,
       raiseOnDrag: true,
       labelContent: pictureLabel,
       labelAnchor: new google.maps.Point(50, 0),
       labelClass: "labels", // the CSS class for the label
       labelStyle: {opacity: 0.50}
     });

     var iw = new google.maps.InfoWindow({
       content: "Home For Sale"
     });
     google.maps.event.addListener(marker, "click", function (e) { iw.open(map, this); });

//google.maps.event.addDomListener(window, 'load', initialize);



