var mapchunks = {
	0: {
		name: 'The Colorado Trail',
		desc: 'All 486 miles of The Colorado Trail, as well as the 80-mile Collegiate West trail. Navigate through maps of each segment using the arrows above or the links below. The five Collegiate West trail segments are after the 28 segments of the main trail.',
		notes: '',
		lat: '38.452261',
		lon: '-106.358304',
		zoom: 8,
		url: 'ct-all-routes.kml',
		elimg: 'elevation-all.png',
		elmin: '5,505',
		elmax: '13,264',
		elgain: '89,354'
	},
	1: {
		name: 'CT Segment 1',
		desc: 'Kassler to South Platte Canyon &mdash; 16.8 miles',
		notes: 'The Colorado Trail&rsquo;s northern trailhead will be crowded with hikers and cyclists, but the crowds fade (and big horn sheep might appear) as the trail follows the river through the canyon. ',
		lat: '39.449150',
		lon: '-105.138734',
		zoom: 11,
		url: 's1route.kmz',
		elimg: 'elev-ct-1.png',
		elmin: '5,505',
		elmax: '7,516',
		elgain: '2,338'
	},
	2: {
		name: 'CT Segment 2',
		desc: 'South Platte Canyon to Colorado Trailhead FS 550 &mdash; 11.5 miles',
		notes: 'Some of this segment passes through the old Hayman Fire burn, so there&rsquo;s not much shade, nor water. The stark beauty of the burn grows into timber near Forest Service Road 550.',
		lat: '39.376788',
		lon: '-105.215726',
		zoom: 11,
		url: 's2route.kmz',
		elimg: 'elev-ct-2.png',
		elmin: '6,148',
		elmax: '7,858',
		elgain: '1,981'
	},
	3: {
		name: 'CT Segment 3',
		desc: 'Colorado Trailhead FS 550 to FS 560 (Wellington Lake Road) &mdash; 12.2 miles',
		notes: 'Here the trail rolls through ponderosa pine and aspen groves. This segment is popular with mountain bikers and trail runners.',
		lat: '39.336438',
		lon: '-105.321126',
		zoom: 11,
		url: 's3route.kmz',
		elimg: 'elev-ct-3.png',
		elmin: '7,385',
		elmax: '8,307',
		elgain: '1,268'
	},
	4: {
		name: 'CT Segment 4',
		desc: 'FS 560 (Wellington Lake Road) to Long Gulch &mdash; 16.6 miles',
		notes: 'This quiet section takes a moderate climb through forest. Part of the segment is in the Lost Creek Wilderness.',
		lat: '39.337500',
		lon: '-105.506864',
		zoom: 11,
		url: 's4route.kmz',
		elimg: 'elev-ct-4.png',
		elmin: '8,294',
		elmax: '10,978',
		elgain: '3,123'
	},
	5: {
		name: 'CT Segment 5',
		desc: 'Long Gulch to Kenosha Pass &mdash; 15.1 miles',
		notes: 'A long meadow and a low saddle &mdash; Kenosha Pass &mdash; dominate this segment of the hike.',
		lat: '39.390322',
		lon: '-105.690192',
		zoom: 11,
		url: 's5route.kmz',
		elimg: 'elev-ct-5.png',
		elmin: '9,534',
		elmax: '10,528',
		elgain: '1,792'
	},
	6: {
		name: 'CT Segment 6',
		desc: 'Kenosha Pass to Goldhill Trailhead &mdash; 32.9 miles',
		notes: 'Between the stretches of aspen grove and forest, you&rsquo;ll catch open views into South Park and some of the nearby peaks. The pyramid of Mount Guyot towers over Georgia Pass on this segment.',
		lat: '39.479417',
		lon: '-105.897565',
		zoom: 11,
		url: 's6route.kmz',
		elimg: 'elev-ct-6.png',
		elmin: '9,196',
		elmax: '11,873',
		elgain: '4,495'
	},
	7: {
		name: 'CT Segment 7',
		desc: 'Goldhill Trailhead to Copper Mountain &mdash; 12.8 miles',
		notes: 'This high, exposed section of trail crosses the Tenmile Range before dropping down to Copper Mountain.',
		lat: '39.523127',
		lon: '-106.108365',
		zoom: 11,
		url: 's7route.kmz',
		elimg: 'elev-ct-7.png',
		elmin: '9,229',
		elmax: '12,503',
		elgain: '3,611'
	},
	8: {
		name: 'CT Segment 8',
		desc: 'Copper Mountain to Tennessee Pass &mdash; 25.4 miles',
		notes: 'Departing Copper under the chair lifts, the trail climbs primo singletrack to Searle and Kokomo passes. At U.S. 24, near Ski Cooper, there&rsquo;s a hiker box on the trail near the rest area.',
		lat: '39.431171',
		lon: '-106.234364',
		zoom: 11,
		url: 's8route.kmz',
		elimg: 'elev-ct-8.png',
		elmin: '9,337',
		elmax: '12,251',
		elgain: '3,909'
	},
	9: {
		name: 'CT Segment 9',
		desc: 'Tennessee Pass to Hagerman Pass Road &mdash; 13.6 miles',
		notes: 'In this segment, the trail enters the Holy Cross Wilderness, where there&rsquo;s plentiful water in rushing streams &hellip; and then a long climb over a ridge before the trail drops to Hagerman Pass Road.',
		lat: '39.319707',
		lon: '-106.382680',
		zoom: 11,
		url: 's9route.kmz',
		elimg: 'elev-ct-9.png',
		elmin: '10,079',
		elmax: '11,729',
		elgain: '2,306'
	},
	10: {
		name: 'CT Segment 10',
		desc: 'Hagerman Pass Road to Halfmoon Creek &mdash; 13 miles',
		notes: 'Here the trail is a beautiful, rocky walk along a roaring stream that heads down almost to Turquoise Lake. You&rsquo;ll have to walk out to the road from the Timberline Lake trailhead to see it, though.',
		lat: '39.213652',
		lon: '-106.418385',
		zoom: 11,
		url: 's10route.kmz',
		elimg: 'elev-ct-10.png',
		elmin: '10,108',
		elmax: '11,325',
		elgain: '2,310'
	},
	11: {
		name: 'CT Segment 11',
		desc: 'Half Moon Creek to Clear Creek Road &mdash; 21.5 miles',
		notes: 'This segment heads deep in the woods of the Mount Massive Wilderness, then to Twin Lakes. Here, hikers have to decide whether to stick to the tried-and-true Colorado Trail on the Collegiate East route or the new Collegiate West trail, which takes a detour (you guessed it) west at Twin Lakes.',
		lat: '39.085321',
		lon: '-106.344914',
		zoom: 11,
		url: 's11route.kmz',
		elimg: 'elev-ct-11.png',
		elmin: '8,947',
		elmax: '10,679',
		elgain: '2,212'
	},
	12: {
		name: 'CT Segment 12',
		desc: 'Clear Creek Road to North Cottonwood Creek &mdash; 18.5 miles',
		notes: 'There&rsquo;s good camping &mdash; and plenty of up and down &mdash; here in the Collegiate Peaks, plus an option for a big, rugged detour to Missouri Basin. ',
		lat: '38.946343',
		lon: '-106.260800',
		zoom: 11,
		url: 's12route.kmz',
		elimg: 'elev-ct-12.png',
		elmin: '8,911',
		elmax: '11,854',
		elgain: '4,274'
	},
	13: {
		name: 'CT Segment 13',
		desc: 'North Cottonwood Creek Road to Chalk Creek &mdash; 22.8 miles',
		notes: 'Pass through here at the right time of year and you&rsquo;ll be greeted by meadows of wildflowers. The trail passes close, very close, to Mt. Princeton Hot Springs.',
		lat: '38.792644',
		lon: '-106.240888',
		zoom: 11,
		url: 's13route.kmz',
		elimg: 'elev-ct-13.png',
		elmin: '8,205',
		elmax: '11,926',
		elgain: '3,762'
	},
	14: {
		name: 'CT Segment 14',
		desc: 'Chalk Creek Trailhead to U.S. 50 &mdash; 20.4 miles',
		notes: 'The trail rolls through forest, meadows and streams here before descending to U.S. 50, not far from Salida.',
		lat: '38.631103',
		lon: '-106.234021',
		zoom: 11,
		url: 's14route.kmz',
		elimg: 'elev-ct-14.png',
		elmin: '8,415',
		elmax: '10,207',
		elgain: '2,963'
	},
	15: {
		name: 'CT Segment 15',
		desc: 'U.S. 50 to Marshall Pass &mdash; 14.3 miles',
		notes: 'There are spectacular views of the Sawatch Mountains along here, and a high passage along a ridge. The section from here to Spring Creek Pass is the longest section of trail without a resupply.',
		lat: '38.476992',
		lon: '-106.272473',
		zoom: 11,
		url: 's15route.kmz',
		elimg: 'elev-ct-15.png',
		elmin: '8,842',
		elmax: '11,932',
		elgain: '3,360'
	},
	16: {
		name: 'CT Segment 16',
		desc: 'Marshall Pass to Sargents Mesa &mdash; 15.2 miles',
		notes: 'More of the same, and few sources of water through this remote section of trail.',
		lat: '38.340326',
		lon: '-106.328092',
		zoom: 11,
		url: 's16route.kmz',
		elimg: 'elev-ct-16.png',
		elmin: '10,344',
		elmax: '11,834',
		elgain: '2,446'
	},
	17: {
		name: 'CT Segment 17',
		desc: 'Sargents Mesa to Colorado 114 &mdash; 20.4 miles',
		notes: 'And still more high ranching country, still with few water sources.',
		lat: '38.278635',
		lon: '-106.484990',
		zoom: 11,
		url: 's17route.kmz',
		elimg: 'elev-ct-17.png',
		elmin: '9,734',
		elmax: '11,798',
		elgain: '2,122'
	},
	18: {
		name: 'CT Segment 18',
		desc: 'Colorado 114 to Saguache Park Road &mdash; 13.8 miles',
		notes: 'The trail often follows dirt roads through open meadows in this stretch, but the lack of water is finally relieved at Cochetopa Creek.',
		lat: '38.181411',
		lon: '-106.638455',
		zoom: 11,
		url: 's18route.kmz',
		elimg: 'elev-ct-18.png',
		elmin: '9,341',
		elmax: '10,292',
		elgain: '1,237'
	},
	19: {
		name: 'CT Segment 19',
		desc: 'Saguache Park Road to Eddiesville Trailhead &mdash; 13.7 miles',
		notes: 'There are more open roads to follow through the Cochetopa Hills in this segment. The trail climbs steadily to enter the La Garita Wilderness here.',
		lat: '38.075680',
		lon: '-106.775098',
		zoom: 11,
		url: 's19route.kmz',
		elimg: 'elev-ct-19.png',
		elmin: '9,537',
		elmax: '10,449',
		elgain: '1,987'
	},
	20: {
		name: 'CT Segment 20',
		desc: 'Eddiesville Trailhead to San Luis Pass &mdash; 12.7 miles',
		notes: 'Any boredom hikers feel in the previous few segments is alleviated in the La Garita Wilderness and the climb to San Luis Pass. The wild creeks, forests and mountains here are some of the most beautiful on the trail.',
		lat: '37.998344',
		lon: '-106.894231',
		zoom: 11,
		url: 's20route.kmz',
		elimg: 'elev-ct-20.png',
		elmin: '10,371',
		elmax: '12,621',
		elgain: '2,793'
	},
	21: {
		name: 'CT Segment 21',
		desc: 'San Luis Pass to Spring Creek Pass &mdash; 14.9 miles',
		notes: 'The trail goes through high, exposed country here, up to 12,917 feet, and passes Snow Mesa, an expanse entirely above treeline.',
		lat: '37.965059',
		lon: '-107.060056',
		zoom: 11,
		url: 's21route.kmz',
		elimg: 'elev-ct-21.png',
		elmin: '10,925',
		elmax: '12,917',
		elgain: '2,778'
	},
	22: {
		name: 'CT Segment 22',
		desc: 'Spring Creek Pass to Carson Saddle &mdash; 17.2 miles',
		notes: 'After crossing Colorado 149, the route crosses the highest portions of trail, yielding big views of endless mountains.',
		lat: '37.899798',
		lon: '-107.267766',
		zoom: 11,
		url: 's22route.kmz',
		elimg: 'elev-ct-22.png',
		elmin: '10,938',
		elmax: '13,264',
		elgain: '3,650'
	},
	23: {
		name: 'CT Segment 23',
		desc: 'Carson Saddle to Rio Grande Reservoir Road &mdash; 15.9 miles',
		notes: 'A crossing of the Rio Grande River is involved here.',
		lat: '37.834208',
		lon: '-107.459340',
		zoom: 11,
		url: 's23route.kmz',
		elimg: 'elev-ct-23.png',
		elmin: '11,903',
		elmax: '12,976',
		elgain: '4,335'
	},
	24: {
		name: 'CT Segment 24',
		desc: 'Rio Grande Reservoir Road to Molas Pass &mdash; 20.2 miles',
		notes: '',
		lat: '37.750103',
		lon: '-107.614865',
		zoom: 11,
		url: 's24route.kmz',
		elimg: 'elev-ct-24.png',
		elmin: '8,930',
		elmax: '12,707',
		elgain: '3,880'
	},
	25: {
		name: 'CT Segment 25',
		desc: 'Molas Pass to Bolam Pass Road &mdash; 20.9 miles',
		notes: '',
		lat: '37.736801',
		lon: '-107.808843',
		zoom: 11,
		url: 's25route.kmz',
		elimg: 'elev-ct-25.png',
		elmin: '10,869',
		elmax: '12,470',
		elgain: '3,167'
	},
	26: {
		name: 'CT Segment 26',
		desc: 'Bolam Pass Road to Hotel Draw Road &mdash; 10.9 miles',
		notes: '',
		lat: '37.682207',
		lon: '-107.954926',
		zoom: 11,
		url: 's26route.kmz',
		elimg: 'elev-ct-26.png',
		elmin: '10,338',
		elmax: '11,978',
		elgain: '1,126'
	},
	27: {
		name: 'CT Segment 27',
		desc: 'Hotel Draw Road to Cumberland Basin &mdash; 20.6 miles',
		notes: '',
		lat: '37.539694',
		lon: '-108.001103',
		zoom: 11,
		url: 's27route.kmz',
		elimg: 'elev-ct-27.png',
		elmin: '10,469',
		elmax: '12,247',
		elgain: '2,911'
	},
	28: {
		name: 'CT Segment 28',
		desc: 'Kennebec Trailhead to Junction Creek Trailhead &mdash; 21.5 miles',
		notes: '',
		lat: '37.388725',
		lon: '-107.957501',
		zoom: 11,
		url: 's28route.kmz',
		elimg: 'elev-ct-28.png',
		elmin: '7,018',
		elmax: '11,791',
		elgain: '1,425'
	},
	29: {
		name: 'CW Segment 1',
		desc: 'Twin Lakes to Sheep Gulch &mdash; 9.8 miles',
		notes: '',
		lat: '39.042936',
		lon: '-106.382680',
		zoom: 11,
		url: 'cw1route.kmz',
		elimg: 'elev-cw-1.png',
		elmin: '9,232',
		elmax: '12,523',
		elgain: '3,606'
	},
	30: {
		name: 'CW Segment 2',
		desc: 'Sheep Gulch to Cottonwood Pass Road Trailhead &mdash; 25.2 miles',
		notes: '',
		lat: '38.916698',
		lon: '-106.452374',
		zoom: 11,
		url: 'cw2route.kmz',
		elimg: 'elev-cw-2.png',
		elmin: '9,856',
		elmax: '12,605',
		elgain: '4,912'
	},
	31: {
		name: 'CW Segment 3',
		desc: 'Cottonwood Pass Road Trailhead to Garden Basin Trailhead &mdash; 10.2 miles',
		notes: '',
		lat: '38.793713',
		lon: '-106.436925',
		zoom: 11,
		url: 'cw3route.kmz',
		elimg: 'elev-cw-3.png',
		elmin: '10,410',
		elmax: '12,123',
		elgain: '2,218'
	},
	32: {
		name: 'CW Segment 4',
		desc: 'Garden Basin Trailhead to Hancock Trailhead &mdash; 14.2 miles',
		notes: '',
		lat: '38.694101',
		lon: '-106.413235',
		zoom: 11,
		url: 'cw4route.kmz',
		elimg: 'elev-cw-4.png',
		elmin: '10,860',
		elmax: '12,313',
		elgain: '2,853'
	},
	33: {
		name: 'CW Segment 5',
		desc: 'Hancock Trailhead to Ridge Above South Fooses Creek &mdash; 22.6 miles',
		notes: '',
		lat: '38.547107',
		lon: '-106.343197',
		zoom: 11,
		url: 'cw5route.kmz',
		elimg: 'elev-cw-5.png',
		elmin: '10,410',
		elmax: '12,123',
		elgain: '4,889'
	}
}

var map;
var kmlBase = 'http://extras.denverpost.com/long-haul/kml/';
var layers = new Array;
var baseSet = false;

function removeLayer(element,index,array) {
	layers[index].setMap(null);
}

function mapHash() {
	if (window.location.hash) {
		var hash = parseInt(window.location.hash.toString().replace('#',''),10);
        if (hash <= 33 && hash >= 1) {
        	mapSeg(hash);
        }
    }
}

function setMapLinks(seg) {

	seg = typeof seg !== 'undefined' ? seg : 0;
	segment = typeof seg !== 'undefined' ? mapchunks[seg] : mapchunks[0];

	var next = seg + 1;
	var prev = seg - 1;
	var next = (next == 33) ? 0 : next;
	var prev = (prev == -1) ? 33 : prev;
	var pageCurr = 'li#seg' + seg;

	$('a#mapNext').attr('href','javascript:mapSeg(' + next + ')');
	$('a#mapPrev').attr('href','javascript:mapSeg(' + prev + ')');
	$('a#segPagNext').attr('href','javascript:mapSeg(' + next + ')');
	$('a#segPagPrev').attr('href','javascript:mapSeg(' + prev + ')');
	$('.pagination > .current').removeClass('current');
	$(pageCurr).addClass('current');
	$('#segTitle').html(segment['name']);
	$('#segDesc').html(segment['desc']);
	//$('#Dnotes').html(segment['notes']);
	$('#elevpng').attr('src','./kml/' + segment['elimg']);
	$('#elmin').html('<strong>Min:</strong> ' + segment['elmin'] + ' feet');
	$('#elmax').html('<strong>Max:</strong> ' + segment['elmax'] + ' feet');
	$('#elgain').html('<strong>Gain:</strong> ' + segment['elgain'] + ' feet');
	var mapLink = '<a href="' + window.location + '#' + seg + '">Link directly to this segment</a>';
	$('#mapLink').html(mapLink);
}

function mapCreate(seg,alone) {
	alone = typeof alone !== 'undefined' ? true : false;
	seg = typeof seg !== 'undefined' ? seg : 0;
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
	if (!alone) {
		layers.forEach(removeLayer);

		if (baseSet) {
			baseLayer.setMap(null);
			baseSet = false;
		}

		setMapLinks(seg);
	}

	newLayer = new google.maps.KmlLayer({
		url: kmlBase + segment['url'],
		preserveViewport: true,
		suppressInfoWindows: true,
		clickable: false
	});
	layers[seg] = newLayer;
	layers[seg].setMap(map);

	//google.maps.event.addListener(map, 'idle', function(){ console.log(map.getZoom() + ', ' + map.getCenter()) });

	mapHash();
}

function mapSeg(seg) {

	if (!baseSet) {
		baseLayer = new google.maps.KmlLayer({
			url: kmlBase + 'ct-all-routes-light.kml',
			preserveViewport: true,
			suppressInfoWindows: true,
			clickable: false
		});
		baseLayer.setMap(map);
		baseSet = true;
	}

	seg = typeof seg !== 'undefined' ? seg : 0;
	segment = typeof seg !== 'undefined' ? mapchunks[seg] : mapchunks[0];

	layers.forEach(removeLayer);

	newLayer = new google.maps.KmlLayer({
		url: kmlBase + segment['url'],
		preserveViewport: true,
		suppressInfoWindows: true,
		clickable: false
	});
	layers[seg] = newLayer;
	layers[seg].setMap(map);

	var newLatLng = new google.maps.LatLng(segment['lat'],segment['lon']);
	map.setZoom(segment['zoom']);
	map.panTo(newLatLng);

	setMapLinks(seg);

	scrollDownTo('#map');
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
