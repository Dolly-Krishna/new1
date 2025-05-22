var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_buildings_1 = new ol.format.GeoJSON();
var features_buildings_1 = format_buildings_1.readFeatures(json_buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_1.addFeatures(features_buildings_1);
var lyr_buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_1, 
                style: style_buildings_1,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_1.png" /> buildings'
            });
var format_Green_Spaces_banglore_2 = new ol.format.GeoJSON();
var features_Green_Spaces_banglore_2 = format_Green_Spaces_banglore_2.readFeatures(json_Green_Spaces_banglore_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Green_Spaces_banglore_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Green_Spaces_banglore_2.addFeatures(features_Green_Spaces_banglore_2);
var lyr_Green_Spaces_banglore_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Green_Spaces_banglore_2, 
                style: style_Green_Spaces_banglore_2,
                popuplayertitle: 'Green_Spaces_banglore',
                interactive: true,
                title: '<img src="styles/legend/Green_Spaces_banglore_2.png" /> Green_Spaces_banglore'
            });
var format_PLACES_3 = new ol.format.GeoJSON();
var features_PLACES_3 = format_PLACES_3.readFeatures(json_PLACES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLACES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLACES_3.addFeatures(features_PLACES_3);
var lyr_PLACES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLACES_3, 
                style: style_PLACES_3,
                popuplayertitle: 'PLACES',
                interactive: true,
                title: '<img src="styles/legend/PLACES_3.png" /> PLACES'
            });
var format_Railways_4 = new ol.format.GeoJSON();
var features_Railways_4 = format_Railways_4.readFeatures(json_Railways_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railways_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railways_4.addFeatures(features_Railways_4);
var lyr_Railways_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railways_4, 
                style: style_Railways_4,
                popuplayertitle: 'Railways',
                interactive: true,
                title: '<img src="styles/legend/Railways_4.png" /> Railways'
            });
var format_ROADS_5 = new ol.format.GeoJSON();
var features_ROADS_5 = format_ROADS_5.readFeatures(json_ROADS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_5.addFeatures(features_ROADS_5);
var lyr_ROADS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADS_5, 
                style: style_ROADS_5,
                popuplayertitle: 'ROADS',
                interactive: true,
                title: '<img src="styles/legend/ROADS_5.png" /> ROADS'
            });
var format_Water_bodies_6 = new ol.format.GeoJSON();
var features_Water_bodies_6 = format_Water_bodies_6.readFeatures(json_Water_bodies_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_bodies_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_bodies_6.addFeatures(features_Water_bodies_6);
var lyr_Water_bodies_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Water_bodies_6, 
                style: style_Water_bodies_6,
                popuplayertitle: 'Water_bodies',
                interactive: true,
                title: '<img src="styles/legend/Water_bodies_6.png" /> Water_bodies'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_buildings_1.setVisible(true);lyr_Green_Spaces_banglore_2.setVisible(true);lyr_PLACES_3.setVisible(true);lyr_Railways_4.setVisible(true);lyr_ROADS_5.setVisible(true);lyr_Water_bodies_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_buildings_1,lyr_Green_Spaces_banglore_2,lyr_PLACES_3,lyr_Railways_4,lyr_ROADS_5,lyr_Water_bodies_6];
lyr_buildings_1.set('fieldAliases', {'type': 'type', 'area': 'area', });
lyr_Green_Spaces_banglore_2.set('fieldAliases', {'Name': 'Name', 'Type': 'Type', });
lyr_PLACES_3.set('fieldAliases', {'NAME': 'NAME', });
lyr_Railways_4.set('fieldAliases', {'Name': 'Name', 'length': 'length', });
lyr_ROADS_5.set('fieldAliases', {'TYPE': 'TYPE', 'Name': 'Name', });
lyr_Water_bodies_6.set('fieldAliases', {'Name': 'Name', 'Area': 'Area', });
lyr_buildings_1.set('fieldImages', {'type': '', 'area': '', });
lyr_Green_Spaces_banglore_2.set('fieldImages', {'Name': '', 'Type': '', });
lyr_PLACES_3.set('fieldImages', {'NAME': '', });
lyr_Railways_4.set('fieldImages', {'Name': '', 'length': '', });
lyr_ROADS_5.set('fieldImages', {'TYPE': '', 'Name': '', });
lyr_Water_bodies_6.set('fieldImages', {'Name': '', 'Area': '', });
lyr_buildings_1.set('fieldLabels', {'type': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_Green_Spaces_banglore_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'Type': 'inline label - visible with data', });
lyr_PLACES_3.set('fieldLabels', {'NAME': 'inline label - visible with data', });
lyr_Railways_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'length': 'inline label - visible with data', });
lyr_ROADS_5.set('fieldLabels', {'TYPE': 'inline label - visible with data', 'Name': 'inline label - visible with data', });
lyr_Water_bodies_6.set('fieldLabels', {'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_Water_bodies_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});