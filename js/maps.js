var extendedDesc = {
	1: '',
	2: '',
}

var mapchunks = {
	wholetrail: {
		name: 'The Colorado Trail',
		desc: 'This is the whole trail',
		descex: '',
		lat: '39.052002',
		lon: '-105.457425',
		zoom: 7,
		url: 'ct-all-routes.kml',
		el: ''
	}
}

var map;
var kmlBase = 'http://extras.denverpost.com/long-haul/kml/';

var firemapcenter = (typeof getUrlVars()["fire"] != 'undefined') ? getUrlVars()["fire"] : 'state_view';

var firecenter = new Array();
		
//   [zoom level,latitude,longitude]
firecenter[0] = [7,39.052002,-105.457425]; //default -- state of Colorado

function mapCreate(mapDiv,seg) {

	segment = typeof seg !== 'undefined' ? mapchunks[seg] : mapchunks['wholetrail'];
	
	var mapZoom = null;

	var mapOptions = {
		zoom: segment['zoom'],
		disableDefaultUI: true,
		panControl: false,
		mapTypeControl: false,
		scaleControl: true,
		streetViewControl: false,
		overviewMapControl: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},
		center: new google.maps.LatLng(segment['lat'],segment['lon']),
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	
	map = new google.maps.Map(document.getElementById(mapDiv), mapOptions);

/* layer toggles */
	newLayer = new google.maps.KmlLayer({url: kmlBase + segment['url'], preserveViewport: true});
	//newLayer = new google.maps.KmlLayer({url: 'http://extras.denverpost.com/media/maps/kml/2013/Coloradowildfireperimeters2013.kml', preserveViewport: true});
	newLayer.setMap(map);
	console.log(newLayer);
	console.log(newLayer.getStatus());

	google.maps.event.addListener(map, 'idle', function(){ console.log(map.getZoom() + ', ' + map.getCenter()) })
}

function toggleLayer(i,caller) {
	if(layers[i].getMap() === null) {
		layers[i].setMap(map);
		$(caller).removeClass('unselected');
		$(caller).addClass('selected');
		$('wrapper-dropdown-1').removeClass('active');
	} else {
		layers[i].setMap(null);
		$(caller).removeClass('selected');
		$(caller).addClass('unselected');
		$('wrapper-dropdown-1').removeClass('active');
	}
}

/* end layer toggles */


function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function centerFire(newcenter,caller) {
	map.setCenter(new google.maps.LatLng(newcenter[1],newcenter[2]));
	map.setZoom(newcenter[0]);
	$('#dd2 > ul.dropdown > li > a').removeClass('selected').addClass('unselected');
	$(caller).removeClass('unselected').addClass('selected');
	$('wrapper-dropdown-1').removeClass('active');
}
