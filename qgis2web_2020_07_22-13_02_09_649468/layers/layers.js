var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_3_1 = new ol.format.GeoJSON();
var features_3_1 = format_3_1.readFeatures(json_3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_1.addFeatures(features_3_1);
var lyr_3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3_1, 
                style: style_3_1,
                interactive: true,
                title: '<img src="styles/legend/3_1.png" /> 3'
            });
var format_4_2 = new ol.format.GeoJSON();
var features_4_2 = format_4_2.readFeatures(json_4_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_2.addFeatures(features_4_2);
var lyr_4_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4_2, 
                style: style_4_2,
                interactive: true,
                title: '<img src="styles/legend/4_2.png" /> 4'
            });
var format_1_3 = new ol.format.GeoJSON();
var features_1_3 = format_1_3.readFeatures(json_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_3.addFeatures(features_1_3);
var lyr_1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_3, 
                style: style_1_3,
                interactive: true,
                title: '<img src="styles/legend/1_3.png" /> 1'
            });
var format_7_4 = new ol.format.GeoJSON();
var features_7_4 = format_7_4.readFeatures(json_7_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7_4.addFeatures(features_7_4);
var lyr_7_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_7_4, 
                style: style_7_4,
                interactive: true,
                title: '<img src="styles/legend/7_4.png" /> 7'
            });
var format_6_5 = new ol.format.GeoJSON();
var features_6_5 = format_6_5.readFeatures(json_6_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6_5.addFeatures(features_6_5);
var lyr_6_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6_5, 
                style: style_6_5,
                interactive: true,
                title: '<img src="styles/legend/6_5.png" /> 6'
            });
var format_2_6 = new ol.format.GeoJSON();
var features_2_6 = format_2_6.readFeatures(json_2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_6.addFeatures(features_2_6);
var lyr_2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_6, 
                style: style_2_6,
                interactive: true,
                title: '<img src="styles/legend/2_6.png" /> 2'
            });
var format_5_7 = new ol.format.GeoJSON();
var features_5_7 = format_5_7.readFeatures(json_5_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5_7.addFeatures(features_5_7);
var lyr_5_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5_7, 
                style: style_5_7,
                interactive: true,
                title: '<img src="styles/legend/5_7.png" /> 5'
            });

lyr_OSMStandard_0.setVisible(true);lyr_3_1.setVisible(true);lyr_4_2.setVisible(true);lyr_1_3.setVisible(true);lyr_7_4.setVisible(true);lyr_6_5.setVisible(true);lyr_2_6.setVisible(true);lyr_5_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_3_1,lyr_4_2,lyr_1_3,lyr_7_4,lyr_6_5,lyr_2_6,lyr_5_7];
lyr_3_1.set('fieldAliases', {'fid': 'fid', 'x': 'x', 'y': 'y', 'nm_img': 'nm_img', 'ketinggian': 'ketinggian', 'img': 'img', });
lyr_4_2.set('fieldAliases', {'fid': 'fid', 'Y': 'Y', 'X': 'X', 'Ketinggian': 'Ketinggian', 'Foto': 'Foto', 'img': 'img', });
lyr_1_3.set('fieldAliases', {'fid': 'fid', 'No': 'No', 'X': 'X', 'Y': 'Y', 'Jalan': 'Jalan', 'Photo': 'Photo', 'Ketinggian Banjir': 'Ketinggian Banjir', 'img': 'img', });
lyr_7_4.set('fieldAliases', {'fid': 'fid', 'Y': 'Y', 'X': 'X', 'IMAGE': 'IMAGE', 'KETINGGIAN AIR': 'KETINGGIAN AIR', 'img': 'img', });
lyr_6_5.set('fieldAliases', {'fid': 'fid', 'x': 'x', 'y': 'y', 'foto': 'foto', 'ketingian banjir': 'ketingian banjir', 'img': 'img', });
lyr_2_6.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'Lokasi': 'Lokasi', 'Kode_Foto': 'Kode_Foto', 'Tinggi_Banjir(cm)': 'Tinggi_Banjir(cm)', 'img': 'img', });
lyr_5_7.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'Image': 'Image', 'Alamat': 'Alamat', 'Ketinggian Air': 'Ketinggian Air', 'img': 'img', });
lyr_3_1.set('fieldImages', {'fid': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'nm_img': 'Range', 'ketinggian': 'Range', 'img': 'TextEdit', });
lyr_4_2.set('fieldImages', {'fid': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Ketinggian': 'Range', 'Foto': 'TextEdit', 'img': 'TextEdit', });
lyr_1_3.set('fieldImages', {'fid': 'TextEdit', 'No': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'Jalan': 'TextEdit', 'Photo': 'TextEdit', 'Ketinggian Banjir': 'TextEdit', 'img': 'TextEdit', });
lyr_7_4.set('fieldImages', {'fid': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'IMAGE': 'TextEdit', 'KETINGGIAN AIR': 'TextEdit', 'img': 'TextEdit', });
lyr_6_5.set('fieldImages', {'fid': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'foto': 'TextEdit', 'ketingian banjir': 'TextEdit', 'img': 'TextEdit', });
lyr_2_6.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Lokasi': 'TextEdit', 'Kode_Foto': 'TextEdit', 'Tinggi_Banjir(cm)': 'TextEdit', 'img': 'TextEdit', });
lyr_5_7.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Image': 'TextEdit', 'Alamat': 'TextEdit', 'Ketinggian Air': 'TextEdit', 'img': 'TextEdit', });
lyr_3_1.set('fieldLabels', {'fid': 'inline label', 'x': 'inline label', 'y': 'inline label', 'nm_img': 'inline label', 'ketinggian': 'inline label', 'img': 'no label', });
lyr_4_2.set('fieldLabels', {'fid': 'inline label', 'Y': 'inline label', 'X': 'inline label', 'Ketinggian': 'inline label', 'Foto': 'inline label', 'img': 'no label', });
lyr_1_3.set('fieldLabels', {'fid': 'no label', 'No': 'no label', 'X': 'no label', 'Y': 'no label', 'Jalan': 'no label', 'Photo': 'no label', 'Ketinggian Banjir': 'no label', 'img': 'no label', });
lyr_7_4.set('fieldLabels', {'fid': 'inline label', 'Y': 'inline label', 'X': 'inline label', 'IMAGE': 'inline label', 'KETINGGIAN AIR': 'inline label', 'img': 'no label', });
lyr_6_5.set('fieldLabels', {'fid': 'inline label', 'x': 'inline label', 'y': 'inline label', 'foto': 'inline label', 'ketingian banjir': 'inline label', 'img': 'no label', });
lyr_2_6.set('fieldLabels', {'fid': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'Lokasi': 'inline label', 'Kode_Foto': 'inline label', 'Tinggi_Banjir(cm)': 'inline label', 'img': 'no label', });
lyr_5_7.set('fieldLabels', {'fid': 'no label', 'X': 'no label', 'Y': 'no label', 'Image': 'no label', 'Alamat': 'no label', 'Ketinggian Air': 'no label', 'img': 'no label', });
lyr_5_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});