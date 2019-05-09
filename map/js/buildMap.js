/**
 * Build a Google Map.
 *
 * @param document
 * @param maps
 * @param selector
 * @returns {google.maps.Map}
 */
function buildMap(document, maps, selector) {
    var elm, map;

    elm = document.querySelector(selector);
    map = new maps.Map(elm, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });

    return map;
}