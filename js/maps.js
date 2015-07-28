var extendedDesc = {
	1: '<strong>Segments 6-1:</strong> Breckenridge to Denver, 105 miles. The home stretch! I may resupply in Jefferson, on U.S. 285 here, or at Kenosha Pass. Although I&rsquo;ve only been from Breckenridge to Georgia Pass once, and that was on a mountain bike, I&rsquo;ve snowshoed and skied and run and biked and hiked all of the trails from Georgia Pass back to Denver, so this is familiar country. After climbing up and over Georgia Pass and then Kenosha Pass, the trail travels through amazing aspen and pine forest, including through the old Hayman fire burn area &mdash; a hot, dry, waterless chunk of trail. After crossing the North Fork of the South Platte River on the Gudy Gaskill bridge (hey, I&rsquo;m almost home), The Colorado Trail makes a short climb and then a short downhill that leads to the flat old road of Waterton Canyon and the northern terminus of the trail. Yahoo!',
	2: '<strong>Segments 10-7:</strong> Twin Lakes to Tennessee Pass, near Leadville, to Breckenridge. I&rsquo;m undecided about my resupply here. Tennessee Pass is a good place to meet someone. Leadville isn&rsquo;t terribly far away, but going there still eats up valuable time. With no resupply at the pass or in Leadville, the next feasible stop is Breckenridge, 72 miles away. Breckenridge sits right on The Colorado Trail. Although I&rsquo;ve been from Twin Lakes to Tennessee Pass, I&rsquo;ve not been through the country from there to Kokomo and Searle passes, and I&rsquo;ve not been from Searle Pass to Breckenridge, which involves a high crossing of the Ten Mile Range. The Holy Cross Wilderness is a beautiful highlight on this section, and the trail also passes through the old army training post, Camp Hale, where the 10th Mountain Division honed their skills during World War II.',
	3: '<strong>Segments 14-11:</strong> U.S. 50 to Twin Lakes is a 76-mile stretch that I originally had broken into two portions: one resupply at Mt. Princeton Hot Springs, which is right on The Colorado Trail, and another at Twin Lakes, the crossroad for all Colorado Trail and Continental Divide hikers. I&rsquo;ve combined this resupply into one drop at Twin Lakes. There&rsquo;s not much in Twin Lakes, but it&rsquo;s a bright-enough spot for a person that&rsquo;s been backpacking for awhile, and the general store will hold hiker packages. This stretch spends a lot of time in beautiful pine and aspen forests. It does make a steep ascent across the shoulder of Mt. Yale. Looking forward to a soak in the Mt. Princeton Hot Springs.',
	4: '<strong>Segments 21-15:</strong> Spring Creek Pass to U.S. 50. This is a long section, 105 miles, and the furthest distance between resupply points. There&rsquo;s simply nowhere to resupply, unless you walk to Creede (which is out of the way), or a friend resupplies by Jeep at Bear Town, a ghost town, or at the Eddiesville trailhead. This section is also one of the most beautiful on the entire Colorado Trail. The above-treeline expanse of Snow Mesa is one of the highlights and one of the most exposed places on the trail. The Colorado Trail also crosses the Durango/Silverton Narrow Gauge Railroad tracks at Elk Park. The trail climbs up past the peaks of the Grenadier Range, paralleling Elk Creek to the divide, plunges down to Bear Town, crosses the Rio Grande and travels through the lowlands of the Cochetopa Hills before climbing up to Marshall Pass and U.S. 50 &hellip; where in my case, a friend will be waiting with a resupply box. Otherwise, with some planning, you could hitch a ride on the train to Silverton or Durango.',
	5: '<strong>Segments 24-22:</strong> From Molas Pass, The Colorado Trail travels 53.3 miles to Spring Creek Pass, through more wide-open country at high elevation. In these segments the trail crosses Coney Summit, which is over 13,000 feet and thus the highest point on the Colorado Trail. My resupply will be in Lake City; I&rsquo;ll hitch 17 miles on Colorado 149 to get there. I&rsquo;ve been over this section before, long ago, not long after The Colorado Trail was completed. What I remember most is that there weren&rsquo;t any other hikers in eight days of traveling. My other big memory is of one of the worst lightning storms I&rsquo;ve ever been caught in outdoors. Travel time: 3-4 days.',
	6: '<strong>Segments 28-25:</strong> This stretch goes from the start at Junction Creek in Durango and travels 73.9 miles to Molas Pass, on U.S. 550. My resupply will be at Little Molas Lake campground, or Silverton. It is a frontier for me &mdash; I&rsquo;ve not seen it in any of my previous Colorado Trail hikes. It climbs into the San Juan Mountains, above treeline. This stretch is high and exposed and I&rsquo;ll need to move fast to avoid storms. I won&rsquo;t have my trail legs yet, and pack organization will be sketchy for a few days. This is a country of big sweeping views and the flowers should be outrageously beautiful. I expect this stretch to take five days.',
	7: '<strong>Collegiate West:</strong> The Collegiate West trail is 80 miles long and was just completed in 2014. A high route along the Continental Divide. I&rsquo;ll probably walk this from Twin Lakes and go south, crossing Lake Creek on the bridge at the Little Willis Gulch Trailhead two miles west of Twin Lakes along Highway 82. Last year I lost a day trying to ford Lake Creek at &ldquo;the ford.&rdquo; The creek was in flood from all the rain and I spent a lot of time thrashing up and down along the bank trying to figure out a way across. Then a mountain biker told me about the bridge a couple of miles upstream. Duh. The trail climbs up Hope Pass &mdash; you hope you never have to carry a pack up it again &mdash; and then spills down Sheep Gulch. Then it climbs up Lake Ann Pass. And down Lake Ann Pass. Then up Cottonwood Pass&hellip; You get the picture. Up and down but mostly up. The trail crosses Cottonwood Pass and eventually ends at Highway 50. I&rsquo;ll need two resupplies here. One at the beginning, at Twin Lakes and one at the end, which will probably be in the grocery store in Salida after a hitch into town.'
}

var mapchunks = {
	0: {
		name: 'The Colorado Trail',
		desc: 'All 486 miles of The Colorado Trail, as well as the 80-mile Collegiate West trail. Navigate through maps of each segment using the arrows above or the links below. The five Collegiate West trail segments are after the 28 segments of the main trail.',
		notes: 'Dean presents impressions and concerns about each segment of the trail. NOTE: Dean is hiking the trail from south to north, and his notes and resupply plans reflect that. You can go through the trail in reverse with Dean by starting with the left arrow. Elevation gain is calculated based on traveling from Denver to Durango, however.',
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
		notes: 'This is The Colorado Trail&rsquo;s northern trailhead: Waterton Canyon road, hot, mostly flat and six miles long, crowded with walkers and bikers&hellip;but also in a very pretty canyon and beside the river, with occasional sightings of big horn sheep. The road turns into a trail that eventually reaches the North Fork of the South Platte River.',
		descex: 1,
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
		desc: 'South Platte Canyon to Colorado Trailhead FS-550 &mdash; 11.5 miles',
		notes: 'The first part of this trail passes through the old Hayman fire burn so there&rsquo;s not much cover, the sun is relentless and there&rsquo;s no water. But the burn has a stark stripped down beauty and there is timber cover eventually as you reach Forest Service Road 550 and a large parking area.',
		descex: 1,
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
		desc: 'Colorado Trailhead FS-550 to FS-560 (Wellington Lake Road) &mdash; 12.2 miles',
		notes: 'A rolling trail through forests of Ponderosa pine and small aspen groves without much elevation gain or loss. If they&rsquo;re running, a few streams for water. Popular with mountain bikers and trail runners.',
		descex: 1,
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
		desc: 'FS-560 (Wellington Lake Road) to Long Gulch &mdash; 16.6 miles',
		notes: 'A bit of climb through the trees. Although I&rsquo;ve been all over the trails around this section I have only walked parts of The Colorado Trail here, mainly using it to connect with other routes.',
		descex: 1,
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
		notes: 'On this stretch I&rsquo;m planning on taking a detour, leaving the trail and and climbing up onto the Platte Mountains and visiting North and South Twin Cone Peaks and Peak X. I tried unsuccessfully because of rotten snow, to climb Peak X three times this past winter so this is a perfect opportunity. Kenosha Pass is a low saddle over which highway 285 passes before dropping into South Park. Used by native americans and herds of bison, elk to cross the mountains long before the whiteman came with his steam engines, roads and cars.',
		descex: 1,
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
		notes: 'Kenosha pass is a low pass along highway 285 between the towns of Bailey and Jefferson. The trail alternates between huge aspen groves and forests of pine with some long open stretches that offer a view of South Park and mountains all around. One of the premier views in the West. Leaving Kenosha the trail climbs up Georgia Pass, the first time it reaches tree line. Leaving the summit of Georgia Pass beneath the towering pyramid of Mt. Guyot the trail drops down, a long ways down, to Breckinridge. I mountain biked this stretch in a miserable rainstorm and frankly don&rsquo;t remember much. Except for the climb up Gold Hill at the end.',
		descex: 1,
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
		notes: 'The trail starts in Breckenridge and climbs up over the Ten Mile Range on its way to Copper Mountain. I&rsquo;ve not been on this part of the trail. It&rsquo;s high and exposed.',
		descex: 2,
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
		notes: 'After leaving the ski area &mdash; you walk under chair lifts here and there &mdash; the trail becomes primo singletrack that I&rsquo;ve biked and hiked many times, and climbs up Searle and Kokomo Passes. Nice forest travel by a stream until reaching treeline and the big open for miles and miles. The trail reaches Highway 24 near Ski Cooper. Leadville is down the road to the southwest. There&rsquo;s a hiker box on the trail near the rest area stocked by the good people of Leadville and the hostel there as well as by other hikers discarding things they don&rsquo;t need. A good place to score somebody else&rsquo;s leftovers.',
		descex: 2,
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
		notes: 'As if the trail hasn&rsquo;t been beautiful enough now it enters the Holy Cross Wilderness. A special place. Plentiful water in rushing streams. The beauty comes with a price. A long steady climb up over the top of a ridge and then down to Hagerman Pass Road.',
		descex: 2,
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
		notes: 'A beautiful rocky walk along a roaring stream down almost to Turquoise Lake. If you walk out to the road from the Timberline Lake Trailhead, which is where you end up, you can see the lake.',
		descex: 2,
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
		notes: 'A mostly deep woods timber walk through the Mount Massive Wilderness that passes near the tiny town of Twin Lakes, always worth a visit. Here I have to make a decision about the Collegiate West Trail. If I decide to go south on the Collegiate West I&rsquo;ll walk west on Highway 82 and cross Lake Creek, above the inlet to Twin Lakes, on the bridge then head up Little Willis Gulch to Hope Pass. The Leadville 100 foot race climbs Hope Pass twice during the annual 100-mile-long ultra marathon. Going south will take me 80 miles back to Highway 50. The Collegiate East &mdash; the old tried and true Colorado Trail &mdash; skirts around Twin Lakes and after going through a hot stretch of boondocky, jeep-road-criss-crossed flatlands, climbs a ridge and decends to Clear Creek Road. NOTE: On this segment there is an opportunity to take The Collegiate West trail, and you can <a href="javascript:mapSeg(29);">skip to those segments if you like</a>.',
		descex: 3,
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
		notes: 'Another good long climb that begins in sagebrush and aspen and ends on the crest of a high ridge above treeline then drops down into a beautiful valley with a rushing stream, Pine Creek, and vistas of mountains all around. A sweet spot to camp. Another decision here. Coming from the south I could at this junction head off The Colorado Trail and visit Missouri Basin. A rugged journey up over Elk Head Pass, one of the steepest in the Colorado Backcountry would be invovled. And a person could continue on after Missouri Basin and do some of the Collegiate West trail back to Twin Lakes. Big detour. A good climb on this segment, up over the shoulder of Mt. Yale. Cottonwood Creek and good camping.',
		descex: 3,
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
		notes: 'A big walk among aspens and pines with meadows of wildflowers and views out into the Arkansas Valley where there are cars on the faraway highway and the twinkling of lights, reminders of everything left behind. There is a long road walk here as the trail passes through private land. Coming from the south it&rsquo;s a long haul up. The Colorado Trail passes close, really close, to Mt. Princeton Hot springs. There will be time for a soak.',
		descex: 3,
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
		desc: 'Chalk Creek Trailhead to US-50 &mdash; 20.4 miles',
		notes: 'This section of trail just rolls dipping down and up, passing in and out of forests, crossing numerous streams, a nice passage.',
		descex: 3,
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
		desc: 'US-50 to Marshall Pass &mdash; 14.3 miles',
		notes: 'Spectacular views of the Sawatch Mountains. A nice high passage along a high alpine ridge and home to the Crest Trail, one of the most famous mountain biking trails in Colorado. From Spring Creek Pass to Highway 50 is the longest part of the trail without resupply.',
		descex: 4,
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
		notes: 'I&rsquo;ve biked and hiked this section. A rolling trail through the Cochetopa Hills with sketchy water and lots of cattle. Ranching country. Truthfully I don’t remember much about it. I may have my eyes opened this time through.',
		descex: 4,
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
		desc: 'Sargents Mesa to Colorado Hwy-114 &mdash; 20.4 miles',
		notes: 'Ditto.',
		descex: 4,
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
		desc: 'Colorado Hwy 114 to Saguache Park Road &mdash; 13.8 miles',
		notes: 'And ditto again.',
		descex: 4,
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
		notes: 'An interesting trail. Wild country.',
		descex: 4,
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
		notes: 'The heart of the La Garitta Wilderness one of the most beautiful places on The Colorado Trail with wild creeks and forests and mountain scenes and then above treeline to San Luis Pass.',
		descex: 4,
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
		notes: 'The Colorado Trail through this section passes across Snow Mesa, a vast, flat expanse entirely above treeline. Lots of exposure on this high passage.',
		descex: 4,
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
		notes: 'Again, well above treeline. Big views of endless mountains all around and the highest portions of The Colorado Trail.',
		descex: 5,
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
		desc: 'Carson Saddle to Rio Grand Reservoir Road &mdash; 15.9 miles',
		notes: 'A crossing of the Rio Grande River is involved here.',
		descex: 5,
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
		desc: 'CT Segment 24',
		notes: '',
		descex: 5,
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
		desc: 'CT Segment 25',
		notes: '',
		descex: 6,
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
		desc: 'CT Segment 26',
		notes: '',
		descex: 6,
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
		desc: 'CT Segment 27',
		notes: '',
		descex: 6,
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
		desc: 'CT Segment 28',
		notes: '',
		descex: 6,
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
		desc: 'Collegiate West Segment 1',
		notes: '',
		descex: 7,
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
		desc: 'Collegiate West Segment 2',
		notes: '',
		descex: 7,
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
		desc: 'Collegiate West Segment 3',
		notes: '',
		descex: 7,
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
		desc: 'Collegiate West Segment 4',
		notes: '',
		descex: 7,
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
		desc: 'Collegiate West Segment 5',
		notes: '',
		descex: 7,
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
	var notes = (typeof segment['notes'] !== 'undefined') ? '<strong>Dean&rsquo;s notes:</strong> ' + segment['notes'] : '';
	$('#Dnotes').html(notes);
	if ( typeof segment['descex'] !== 'undefined' ) {
		$('#resupply').html(extendedDesc[segment['descex']]);
		$('#resupH').removeClass('hide');
	} else {
		$('#resupH').addClass('hide');
	}
	$('#elevpng').attr('src','./kml/' + segment['elimg']);
	$('#elmin').html('<strong>Min:</strong> ' + segment['elmin'] + ' feet');
	$('#elmax').html('<strong>Max:</strong> ' + segment['elmax'] + ' feet');
	$('#elgain').html('<strong>Gain:</strong> ' + segment['elgain'] + ' feet');
}

function mapCreate(seg,alone) {
	console.log(alone);
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
console.log(alone);
	if (!alone) {
		console.log('NOT ALONE!');
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
