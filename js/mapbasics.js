ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [36.856590, 30.874699],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [36.856590, 30.874699]
            },
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([36.856590, 30.874699], {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        
}