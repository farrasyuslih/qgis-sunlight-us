var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_uscities_mainland_1 = new ol.format.GeoJSON();
var features_uscities_mainland_1 = format_uscities_mainland_1.readFeatures(json_uscities_mainland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uscities_mainland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uscities_mainland_1.addFeatures(features_uscities_mainland_1);
var lyr_uscities_mainland_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uscities_mainland_1, 
                style: style_uscities_mainland_1,
                popuplayertitle: 'uscities_mainland',
                interactive: true,
    title: 'uscities_mainland<br />\
    <img src="styles/legend/uscities_mainland_1_0.png" /> <br />\
    <img src="styles/legend/uscities_mainland_1_1.png" /> 3:58 PM<br />\
    <img src="styles/legend/uscities_mainland_1_2.png" /> 3:59 PM<br />\
    <img src="styles/legend/uscities_mainland_1_3.png" /> 4:01 PM<br />\
    <img src="styles/legend/uscities_mainland_1_4.png" /> 4:02 PM<br />\
    <img src="styles/legend/uscities_mainland_1_5.png" /> 4:05 PM<br />\
    <img src="styles/legend/uscities_mainland_1_6.png" /> 4:06 PM<br />\
    <img src="styles/legend/uscities_mainland_1_7.png" /> 4:08 PM<br />\
    <img src="styles/legend/uscities_mainland_1_8.png" /> 4:12 PM<br />\
    <img src="styles/legend/uscities_mainland_1_9.png" /> 4:14 PM<br />\
    <img src="styles/legend/uscities_mainland_1_10.png" /> 4:15 PM<br />\
    <img src="styles/legend/uscities_mainland_1_11.png" /> 4:16 PM<br />\
    <img src="styles/legend/uscities_mainland_1_12.png" /> 4:17 PM<br />\
    <img src="styles/legend/uscities_mainland_1_13.png" /> 4:18 PM<br />\
    <img src="styles/legend/uscities_mainland_1_14.png" /> 4:19 PM<br />\
    <img src="styles/legend/uscities_mainland_1_15.png" /> 4:20 PM<br />\
    <img src="styles/legend/uscities_mainland_1_16.png" /> 4:21 PM<br />\
    <img src="styles/legend/uscities_mainland_1_17.png" /> 4:22 PM<br />\
    <img src="styles/legend/uscities_mainland_1_18.png" /> 4:23 PM<br />\
    <img src="styles/legend/uscities_mainland_1_19.png" /> 4:24 PM<br />\
    <img src="styles/legend/uscities_mainland_1_20.png" /> 4:25 PM<br />\
    <img src="styles/legend/uscities_mainland_1_21.png" /> 4:26 PM<br />\
    <img src="styles/legend/uscities_mainland_1_22.png" /> 4:27 PM<br />\
    <img src="styles/legend/uscities_mainland_1_23.png" /> 4:28 PM<br />\
    <img src="styles/legend/uscities_mainland_1_24.png" /> 4:29 PM<br />\
    <img src="styles/legend/uscities_mainland_1_25.png" /> 4:30 PM<br />\
    <img src="styles/legend/uscities_mainland_1_26.png" /> 4:31 PM<br />\
    <img src="styles/legend/uscities_mainland_1_27.png" /> 4:32 PM<br />\
    <img src="styles/legend/uscities_mainland_1_28.png" /> 4:33 PM<br />\
    <img src="styles/legend/uscities_mainland_1_29.png" /> 4:34 PM<br />\
    <img src="styles/legend/uscities_mainland_1_30.png" /> 4:35 PM<br />\
    <img src="styles/legend/uscities_mainland_1_31.png" /> 4:36 PM<br />\
    <img src="styles/legend/uscities_mainland_1_32.png" /> 4:37 PM<br />\
    <img src="styles/legend/uscities_mainland_1_33.png" /> 4:38 PM<br />\
    <img src="styles/legend/uscities_mainland_1_34.png" /> 4:39 PM<br />\
    <img src="styles/legend/uscities_mainland_1_35.png" /> 4:40 PM<br />\
    <img src="styles/legend/uscities_mainland_1_36.png" /> 4:41 PM<br />\
    <img src="styles/legend/uscities_mainland_1_37.png" /> 4:42 PM<br />\
    <img src="styles/legend/uscities_mainland_1_38.png" /> 4:43 PM<br />\
    <img src="styles/legend/uscities_mainland_1_39.png" /> 4:44 PM<br />\
    <img src="styles/legend/uscities_mainland_1_40.png" /> 4:45 PM<br />\
    <img src="styles/legend/uscities_mainland_1_41.png" /> 4:46 PM<br />\
    <img src="styles/legend/uscities_mainland_1_42.png" /> 4:47 PM<br />\
    <img src="styles/legend/uscities_mainland_1_43.png" /> 4:48 PM<br />\
    <img src="styles/legend/uscities_mainland_1_44.png" /> 4:49 PM<br />\
    <img src="styles/legend/uscities_mainland_1_45.png" /> 4:50 PM<br />\
    <img src="styles/legend/uscities_mainland_1_46.png" /> 4:51 PM<br />\
    <img src="styles/legend/uscities_mainland_1_47.png" /> 4:52 PM<br />\
    <img src="styles/legend/uscities_mainland_1_48.png" /> 4:53 PM<br />\
    <img src="styles/legend/uscities_mainland_1_49.png" /> 4:54 PM<br />\
    <img src="styles/legend/uscities_mainland_1_50.png" /> 4:55 PM<br />\
    <img src="styles/legend/uscities_mainland_1_51.png" /> 4:56 PM<br />\
    <img src="styles/legend/uscities_mainland_1_52.png" /> 4:57 PM<br />\
    <img src="styles/legend/uscities_mainland_1_53.png" /> 4:58 PM<br />\
    <img src="styles/legend/uscities_mainland_1_54.png" /> 4:59 PM<br />\
    <img src="styles/legend/uscities_mainland_1_55.png" /> 5:00 PM<br />\
    <img src="styles/legend/uscities_mainland_1_56.png" /> 5:01 PM<br />\
    <img src="styles/legend/uscities_mainland_1_57.png" /> 5:02 PM<br />\
    <img src="styles/legend/uscities_mainland_1_58.png" /> 5:03 PM<br />\
    <img src="styles/legend/uscities_mainland_1_59.png" /> 5:04 PM<br />\
    <img src="styles/legend/uscities_mainland_1_60.png" /> 5:05 PM<br />\
    <img src="styles/legend/uscities_mainland_1_61.png" /> 5:06 PM<br />\
    <img src="styles/legend/uscities_mainland_1_62.png" /> 5:07 PM<br />\
    <img src="styles/legend/uscities_mainland_1_63.png" /> 5:08 PM<br />\
    <img src="styles/legend/uscities_mainland_1_64.png" /> 5:09 PM<br />\
    <img src="styles/legend/uscities_mainland_1_65.png" /> 5:10 PM<br />\
    <img src="styles/legend/uscities_mainland_1_66.png" /> 5:11 PM<br />\
    <img src="styles/legend/uscities_mainland_1_67.png" /> 5:12 PM<br />\
    <img src="styles/legend/uscities_mainland_1_68.png" /> 5:13 PM<br />\
    <img src="styles/legend/uscities_mainland_1_69.png" /> 5:14 PM<br />\
    <img src="styles/legend/uscities_mainland_1_70.png" /> 5:15 PM<br />\
    <img src="styles/legend/uscities_mainland_1_71.png" /> 5:16 PM<br />\
    <img src="styles/legend/uscities_mainland_1_72.png" /> 5:17 PM<br />\
    <img src="styles/legend/uscities_mainland_1_73.png" /> 5:18 PM<br />\
    <img src="styles/legend/uscities_mainland_1_74.png" /> 5:19 PM<br />\
    <img src="styles/legend/uscities_mainland_1_75.png" /> 5:20 PM<br />\
    <img src="styles/legend/uscities_mainland_1_76.png" /> 5:21 PM<br />\
    <img src="styles/legend/uscities_mainland_1_77.png" /> 5:22 PM<br />\
    <img src="styles/legend/uscities_mainland_1_78.png" /> 5:23 PM<br />\
    <img src="styles/legend/uscities_mainland_1_79.png" /> 5:24 PM<br />\
    <img src="styles/legend/uscities_mainland_1_80.png" /> 5:25 PM<br />\
    <img src="styles/legend/uscities_mainland_1_81.png" /> 5:26 PM<br />\
    <img src="styles/legend/uscities_mainland_1_82.png" /> 5:27 PM<br />\
    <img src="styles/legend/uscities_mainland_1_83.png" /> 5:28 PM<br />\
    <img src="styles/legend/uscities_mainland_1_84.png" /> 5:29 PM<br />\
    <img src="styles/legend/uscities_mainland_1_85.png" /> 5:30 PM<br />\
    <img src="styles/legend/uscities_mainland_1_86.png" /> 5:31 PM<br />\
    <img src="styles/legend/uscities_mainland_1_87.png" /> 5:32 PM<br />\
    <img src="styles/legend/uscities_mainland_1_88.png" /> 5:33 PM<br />\
    <img src="styles/legend/uscities_mainland_1_89.png" /> 5:34 PM<br />\
    <img src="styles/legend/uscities_mainland_1_90.png" /> 5:35 PM<br />\
    <img src="styles/legend/uscities_mainland_1_91.png" /> 5:36 PM<br />\
    <img src="styles/legend/uscities_mainland_1_92.png" /> 5:37 PM<br />\
    <img src="styles/legend/uscities_mainland_1_93.png" /> 5:38 PM<br />\
    <img src="styles/legend/uscities_mainland_1_94.png" /> 5:39 PM<br />\
    <img src="styles/legend/uscities_mainland_1_95.png" /> 5:40 PM<br />\
    <img src="styles/legend/uscities_mainland_1_96.png" /> 5:41 PM<br />\
    <img src="styles/legend/uscities_mainland_1_97.png" /> 5:42 PM<br />\
    <img src="styles/legend/uscities_mainland_1_98.png" /> 5:44 PM<br />\
    <img src="styles/legend/uscities_mainland_1_99.png" /> 5:45 PM<br />\
    <img src="styles/legend/uscities_mainland_1_100.png" /> 5:46 PM<br />\
    <img src="styles/legend/uscities_mainland_1_101.png" /> 5:47 PM<br />\
    <img src="styles/legend/uscities_mainland_1_102.png" /> 5:49 PM<br />\
    <img src="styles/legend/uscities_mainland_1_103.png" /> 5:50 PM<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_uscities_mainland_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_uscities_mainland_1];
lyr_uscities_mainland_1.set('fieldAliases', {'city': 'city', 'state_id': 'state_id', 'state_name': 'state_name', 'lat': 'lat', 'lng': 'lng', 'population': 'population', 'density': 'density', 'timezone': 'timezone', 'sunrise_lo': 'sunrise_lo', 'sunset_lon': 'sunset_lon', 'sunrise_sh': 'sunrise_sh', 'sunset_sho': 'sunset_sho', 'day_length': 'day_length', 'night_leng': 'night_leng', 'daylight': 'daylight', 'max_pop': 'max_pop', 'max_sunset': 'max_sunset', });
lyr_uscities_mainland_1.set('fieldImages', {'city': 'TextEdit', 'state_id': 'TextEdit', 'state_name': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'population': 'TextEdit', 'density': 'TextEdit', 'timezone': 'TextEdit', 'sunrise_lo': 'TextEdit', 'sunset_lon': 'TextEdit', 'sunrise_sh': 'TextEdit', 'sunset_sho': 'TextEdit', 'day_length': 'TextEdit', 'night_leng': 'TextEdit', 'daylight': 'TextEdit', 'max_pop': 'TextEdit', 'max_sunset': 'TextEdit', });
lyr_uscities_mainland_1.set('fieldLabels', {'city': 'no label', 'state_id': 'no label', 'state_name': 'no label', 'lat': 'no label', 'lng': 'no label', 'population': 'no label', 'density': 'no label', 'timezone': 'no label', 'sunrise_lo': 'no label', 'sunset_lon': 'no label', 'sunrise_sh': 'no label', 'sunset_sho': 'no label', 'day_length': 'no label', 'night_leng': 'no label', 'daylight': 'no label', 'max_pop': 'no label', 'max_sunset': 'no label', });
lyr_uscities_mainland_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});