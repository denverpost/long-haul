var extendedDesc = {
	1: '',
	2: '',
}

var mapchunks = {
	0: {
		name: 'The Colorado Trail',
		desc: 'This is the whole trail',
		descex: '',
		lat: '38.452261',
		lon: '-106.358304',
		zoom: 8,
		url: 'ct-all-routes.kml',
		el: ''
	},
	29: {
		name: 'The Colorado Trail Main Route',
		desc: 'This is the whole trail',
		descex: '',
		lat: '38.452261',
		lon: '-106.358304',
		zoom: 8,
		url: 'ct-full-route.kmz',
		el: ''
	},
	30: {
		name: 'The Colorado Trail West Route',
		desc: 'This is the whole trail',
		descex: '',
		lat: '38.774177',
		lon: '-106.347318',
		zoom: 9,
		url: 'ct-west-route.kmz',
		el: ''
	}
}

var map;
var kmlBase = 'http://extras.denverpost.com/long-haul/kml/';
firstRun = true;

function mapCreate(seg) {

	segment = typeof seg !== 'undefined' ? mapchunks[seg] : mapchunks[0];
	
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
	
	map = new google.maps.Map(document.getElementById('map'), mapOptions);

/* layer toggles */
	newLayer = new google.maps.KmlLayer({url: kmlBase + segment['url'], preserveViewport: true});
	//newLayer = new google.maps.KmlLayer({url: 'http://extras.denverpost.com/media/maps/kml/2013/Coloradowildfireperimeters2013.kml', preserveViewport: true});
	newLayer.setMap(map);

	$('#segTitle').html(segment['name']);
	$('#segDesc').html(segment['desc']);

	if (!firstRun) {
		scrollDownTo('#map');
	} else {
		firstRun = false;
	}

	google.maps.event.addListener(map, 'idle', function(){ console.log(map.getZoom() + ', ' + map.getCenter()) });
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
