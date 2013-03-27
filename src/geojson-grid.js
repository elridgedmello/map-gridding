var lon = -97.8476;
var lat = 30.4717;
var zoom = 7;
var map, layer;

function init(){
    map = new OpenLayers.Map( 'map' );
    layer = new OpenLayers.Layer.WMS( "OpenLayers WMS", 
            "http://vmap0.tiles.osgeo.org/wms/vmap0",
            {layers: 'basic'} );
    map.addLayer(layer);
    map.setCenter(new OpenLayers.LonLat(lon, lat), zoom);

    var areaOfInterest =
    {"type":"FeatureCollection","properties":{"kind":"state","state":"TX"},"features":[
        {"type":"Feature","properties":{"kind":"county","name":"Travis","state":"TX"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-97.9736,30.6251],[-97.9188,30.6032],[-97.9243,30.5703],[-97.8695,30.5484],[-97.8476,30.4717],[-97.7764,30.4279],[-97.5793,30.4991],[-97.3711,30.4170],[-97.4916,30.2089],[-97.6505,30.0719],[-97.6669,30.0665],[-97.7107,30.0226],[-98.1708,30.3567],[-98.1270,30.4279],[-98.0503,30.6251]]]]}}
        ]};

   var geojson_format = new OpenLayers.Format.GeoJSON();
   var vector_layer = new OpenLayers.Layer.Vector(); 
   map.addLayer(vector_layer);
   vector_layer.addFeatures(geojson_format.read(areaOfInterest));

}
