var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_building_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_building_2];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'parking': 'parking', 'amenity': 'amenity', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'currency:IDR': 'currency:IDR', 'government': 'government', 'operator:wikipedia': 'operator:wikipedia', 'operator:wikidata': 'operator:wikidata', 'healthcare': 'healthcare', 'building:part': 'building:part', 'building:min_level': 'building:min_level', 'kitchen:facilities': 'kitchen:facilities', 'website': 'website', 'service:vehicle:new_car_sales': 'service:vehicle:new_car_sales', 'service:vehicle:car_repair': 'service:vehicle:car_repair', 'second_hand': 'second_hand', 'height': 'height', 'description': 'description', 'sport': 'sport', 'leisure': 'leisure', 'drive_through': 'drive_through', 'evacuation_center': 'evacuation_center', 'layer': 'layer', 'operator': 'operator', 'beauty': 'beauty', 'atm': 'atm', 'self_service': 'self_service', 'addr:place': 'addr:place', 'trade': 'trade', 'school:type_idn': 'school:type_idn', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'addr:country': 'addr:country', 'religion': 'religion', 'ground_floor:height': 'ground_floor:height', 'operator:type': 'operator:type', 'building:walls': 'building:walls', 'building:use': 'building:use', 'amenity': 'amenity', 'phone': 'phone', 'internet_access:ssid': 'internet_access:ssid', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'fax': 'fax', 'email': 'email', 'bar': 'bar', 'air_conditioning': 'air_conditioning', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:postcode': 'addr:postcode', 'admin_level': 'admin_level', 'shop': 'shop', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'tourism': 'tourism', 'office': 'office', 'name': 'name', 'type': 'type', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'addr:city': 'addr:city', 'access:roof': 'access:roof', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'parking': '', 'amenity': '', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'currency:IDR': '', 'government': '', 'operator:wikipedia': '', 'operator:wikidata': '', 'healthcare': '', 'building:part': '', 'building:min_level': '', 'kitchen:facilities': '', 'website': '', 'service:vehicle:new_car_sales': '', 'service:vehicle:car_repair': '', 'second_hand': '', 'height': '', 'description': '', 'sport': '', 'leisure': '', 'drive_through': '', 'evacuation_center': '', 'layer': '', 'operator': '', 'beauty': '', 'atm': '', 'self_service': '', 'addr:place': '', 'trade': '', 'school:type_idn': '', 'brand:wikipedia': '', 'brand:wikidata': '', 'brand': '', 'addr:country': '', 'religion': '', 'ground_floor:height': '', 'operator:type': '', 'building:walls': '', 'building:use': '', 'amenity': '', 'phone': '', 'internet_access:ssid': '', 'internet_access:fee': '', 'internet_access': '', 'fax': '', 'email': '', 'bar': '', 'air_conditioning': '', 'addr:street': '', 'addr:housenumber': '', 'addr:postcode': '', 'admin_level': '', 'shop': '', 'backup_generator': '', 'addr:full': '', 'tourism': '', 'office': '', 'name': '', 'type': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'addr:city': '', 'access:roof': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'parking': 'no label', 'amenity': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'currency:IDR': 'no label', 'government': 'no label', 'operator:wikipedia': 'no label', 'operator:wikidata': 'no label', 'healthcare': 'no label', 'building:part': 'no label', 'building:min_level': 'no label', 'kitchen:facilities': 'no label', 'website': 'no label', 'service:vehicle:new_car_sales': 'no label', 'service:vehicle:car_repair': 'no label', 'second_hand': 'no label', 'height': 'no label', 'description': 'no label', 'sport': 'no label', 'leisure': 'no label', 'drive_through': 'no label', 'evacuation_center': 'no label', 'layer': 'no label', 'operator': 'no label', 'beauty': 'no label', 'atm': 'no label', 'self_service': 'no label', 'addr:place': 'no label', 'trade': 'no label', 'school:type_idn': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'addr:country': 'no label', 'religion': 'no label', 'ground_floor:height': 'no label', 'operator:type': 'no label', 'building:walls': 'no label', 'building:use': 'no label', 'amenity': 'no label', 'phone': 'no label', 'internet_access:ssid': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'fax': 'no label', 'email': 'no label', 'bar': 'no label', 'air_conditioning': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:postcode': 'no label', 'admin_level': 'no label', 'shop': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'tourism': 'no label', 'office': 'no label', 'name': 'no label', 'type': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', });
lyr_building_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});