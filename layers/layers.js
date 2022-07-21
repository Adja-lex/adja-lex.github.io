var wms_layers = [];

var format_Dedroitcommun_0 = new ol.format.GeoJSON();
var features_Dedroitcommun_0 = format_Dedroitcommun_0.readFeatures(json_Dedroitcommun_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dedroitcommun_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dedroitcommun_0.addFeatures(features_Dedroitcommun_0);
var lyr_Dedroitcommun_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dedroitcommun_0, 
                style: style_Dedroitcommun_0,
                interactive: true,
                title: '<img src="styles/legend/Dedroitcommun_0.png" /> De droit commun'
            });
var format_Particulier_1 = new ol.format.GeoJSON();
var features_Particulier_1 = format_Particulier_1.readFeatures(json_Particulier_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Particulier_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Particulier_1.addFeatures(features_Particulier_1);
var lyr_Particulier_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Particulier_1, 
                style: style_Particulier_1,
                interactive: true,
                title: '<img src="styles/legend/Particulier_1.png" /> Particulier'
            });
var format_Intermediaire_2 = new ol.format.GeoJSON();
var features_Intermediaire_2 = format_Intermediaire_2.readFeatures(json_Intermediaire_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intermediaire_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intermediaire_2.addFeatures(features_Intermediaire_2);
var lyr_Intermediaire_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Intermediaire_2, 
                style: style_Intermediaire_2,
                interactive: true,
                title: '<img src="styles/legend/Intermediaire_2.png" /> Intermediaire'
            });

lyr_Dedroitcommun_0.setVisible(true);lyr_Particulier_1.setVisible(true);lyr_Intermediaire_2.setVisible(true);
var layersList = [lyr_Dedroitcommun_0,lyr_Particulier_1,lyr_Intermediaire_2];
lyr_Dedroitcommun_0.set('fieldAliases', {'NAME': 'NAME', 'ID_BASE': 'ID_BASE', 'DENSPO02': 'DENSPO02', 'GROWTH_RAT': 'GROWTH_RAT', 'ETHNIC': 'ETHNIC', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', });
lyr_Particulier_1.set('fieldAliases', {'NAME': 'NAME', 'ID_BASE': 'ID_BASE', 'DENSPO02': 'DENSPO02', 'GROWTH_RAT': 'GROWTH_RAT', 'ETHNIC': 'ETHNIC', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', });
lyr_Intermediaire_2.set('fieldAliases', {'NAME': 'NAME', 'ID_BASE': 'ID_BASE', 'DENSPO02': 'DENSPO02', 'GROWTH_RAT': 'GROWTH_RAT', 'ETHNIC': 'ETHNIC', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', });
lyr_Dedroitcommun_0.set('fieldImages', {'NAME': 'TextEdit', 'ID_BASE': 'TextEdit', 'DENSPO02': 'TextEdit', 'GROWTH_RAT': 'TextEdit', 'ETHNIC': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', });
lyr_Particulier_1.set('fieldImages', {'NAME': '', 'ID_BASE': '', 'DENSPO02': '', 'GROWTH_RAT': '', 'ETHNIC': '', 'AREA': '', 'PERIMETER': '', 'ACRES': '', });
lyr_Intermediaire_2.set('fieldImages', {'NAME': '', 'ID_BASE': '', 'DENSPO02': '', 'GROWTH_RAT': '', 'ETHNIC': '', 'AREA': '', 'PERIMETER': '', 'ACRES': '', });
lyr_Dedroitcommun_0.set('fieldLabels', {'NAME': 'inline label', 'ID_BASE': 'no label', 'DENSPO02': 'no label', 'GROWTH_RAT': 'no label', 'ETHNIC': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ACRES': 'no label', });
lyr_Particulier_1.set('fieldLabels', {'NAME': 'inline label', 'ID_BASE': 'no label', 'DENSPO02': 'no label', 'GROWTH_RAT': 'no label', 'ETHNIC': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ACRES': 'no label', });
lyr_Intermediaire_2.set('fieldLabels', {'NAME': 'inline label', 'ID_BASE': 'no label', 'DENSPO02': 'no label', 'GROWTH_RAT': 'no label', 'ETHNIC': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ACRES': 'no label', });
lyr_Intermediaire_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});