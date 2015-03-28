function createMap(){
	var mapCanvas = document.getElementById('map-canvas');

	var latlng = new google.maps.LatLng(41.87913, -87.63410);
	var mapOptions = {
      center: latlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

	var map = new google.maps.Map(mapCanvas, mapOptions);

	var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: 'Hello World!'
  	});
}