var wms_layers = [];

var lyr_local_DEM_wgs_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "local_DEM_wgs",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/local_DEM_wgs_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-14549999.198313, 8723017.049634, -14537023.319305, 8732084.064068]
                            })
                        });
var lyr_local_DEM_wgscopy_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "local_DEM_wgs copy",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/local_DEM_wgscopy_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-14549999.198313, 8723017.049634, -14537023.319305, 8732084.064068]
                            })
                        });
var format_alex_mag_poly_2 = new ol.format.GeoJSON();
var features_alex_mag_poly_2 = format_alex_mag_poly_2.readFeatures(json_alex_mag_poly_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alex_mag_poly_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alex_mag_poly_2.addFeatures(features_alex_mag_poly_2);
var lyr_alex_mag_poly_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alex_mag_poly_2, 
                style: style_alex_mag_poly_2,
                popuplayertitle: "alex_mag_poly",
                interactive: true,
                title: '<img src="styles/legend/alex_mag_poly_2.png" /> alex_mag_poly'
            });
var format_Bowl_lines_QaQc_3 = new ol.format.GeoJSON();
var features_Bowl_lines_QaQc_3 = format_Bowl_lines_QaQc_3.readFeatures(json_Bowl_lines_QaQc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bowl_lines_QaQc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bowl_lines_QaQc_3.addFeatures(features_Bowl_lines_QaQc_3);
var lyr_Bowl_lines_QaQc_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bowl_lines_QaQc_3, 
                style: style_Bowl_lines_QaQc_3,
                popuplayertitle: "Bowl_lines_QaQc",
                interactive: true,
                title: '<img src="styles/legend/Bowl_lines_QaQc_3.png" /> Bowl_lines_QaQc'
            });
var group_round1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "round1"});
var group_ARMPIT = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "ARMPIT"});
var group_CREST = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "CREST"});
var group_bowl = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "bowl"});

lyr_local_DEM_wgs_0.setVisible(true);lyr_local_DEM_wgscopy_1.setVisible(true);lyr_alex_mag_poly_2.setVisible(true);lyr_Bowl_lines_QaQc_3.setVisible(true);
var layersList = [lyr_local_DEM_wgs_0,lyr_local_DEM_wgscopy_1,lyr_alex_mag_poly_2,lyr_Bowl_lines_QaQc_3];
lyr_alex_mag_poly_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bowl_lines_QaQc_3.set('fieldAliases', {'id': 'id', });
lyr_alex_mag_poly_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Bowl_lines_QaQc_3.set('fieldImages', {'id': 'TextEdit', });
lyr_alex_mag_poly_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bowl_lines_QaQc_3.set('fieldLabels', {'id': 'no label', });
lyr_Bowl_lines_QaQc_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});