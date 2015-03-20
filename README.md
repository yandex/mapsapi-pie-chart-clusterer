# Yandex Maps API PieChartClusterer Module

**PieChartClustererLayout** is an [Yandex Maps JS API 2.1 Layout Class](https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/templateLayoutFactory-docpage/)
that represents numerical proportion of different [Placemark](https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/)
 [types](https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage-docpage/)
and should be used with [ObjectManager](https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ObjectManager-docpage/) with clusterize option is set to *true*,
or [geoQuery.clusterize](https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoQueryResult-docpage/#clusterize) method.
`PieChartClusterer` class allows to construct and display such representations over geographical maps using [PieChart](http://en.wikipedia.org/wiki/Pie_chart) icon.

Loading
-------

1. Put module source code ([pie-chart-clusterer.min.js](https://github.com/yandex/ymaps-pie-chart-clusterer/blob/layout/build/pie-chart-clusterer.min.js)) on your CDN.

2. Load both [Yandex Maps JS API 2.1](http://api.yandex.com/maps/doc/jsapi/) and module source code by adding following code into &lt;head&gt; section of your page
```html
<script src="http://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
<!-- Change my.cdn.tld to your CDN host name -->
<script src="http://my.cdn.tld/pie-chart-clusterer.min.js" type="text/javascript"></script>
```

3. Get access to module functions by using [ymaps.modules.require](http://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/modules.require.xml) method

* ObjectManager
```js
ymaps.modules.require(['PieChartClustererLayout'], function (PieChartClustererLayout) {
    var objectManager = ymaps.ObjectManager({
        clusterize: true,
        clusterIconLayout: PieChartClustererLayout
    });
});
```
* geoQuery
```js
ymaps.modules.require(['PieChartClustererLayout'], function (PieChartClustererLayout) {
    var clusterer = ymaps.geoQuery(points).clusterize({
        clusterIconLayout: PieChartClustererLayout
    });
});
```

Demo
----
* ObjectManagerr
http://yandex.github.io/ymaps-pie-chart-clusterer/index-object-manager.html
* geoQuery
http://yandex.github.io/ymaps-pie-chart-clusterer/index-geoquery.html


Examples
--------
* Displaying Clusterer of different Placemark types.
```js
ymaps.ready(function () {
    var myMap = new ymaps.Map('YMapsID', {
        center: [55.7517318022522, 37.61691485505143],
        zoom: 10
    });
    ymaps.modules.require(['PieChartClustererLayout'], function (PieChartClustererLayout) {
        var objectManager = ymaps.ObjectManager({
            clusterize: true,
            clusterIconLayout: PieChartClustererLayout
        });
        var points = [
            {
                id: 'id-1',
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [55.75498702962238, 37.618202315378575]
                },
                properties: {},
                options: {preset: 'islands#brownIcon'}
            }, {
                id: 'id-2',
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [55.754662597966856, 37.621551735588916]
                },
                properties: {},
                options: {preset: 'islands#blueIcon'}
            }, {
                id: 'id-3',
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [55.753610957072794, 37.6258667510446]
                },
                properties: {},
                options: {preset: 'islands#greenIcon'}
            }, {
                id: 'id-4',
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [55.755421360094026, 37.622878078980506]
                },
                properties: {},
                options: {preset: 'islands#redIcon'}
            }, {
                id: 'id-5',
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [55.75573597375927, 37.62162280516154]
                },
                properties: {},
                options: {preset: 'islands#orangeIcon'}
            }
        ];

        objectManager.add(points);
        myMap.geoObjects.add(objectManager);
    });
});
```


Building
--------
Use [ym-builder](https://www.npmjs.org/package/ym-builder) if re-build is needed.
