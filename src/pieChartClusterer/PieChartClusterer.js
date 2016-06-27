ym.modules.define('PieChartClusterer', [
    'Clusterer',
    'util.defineClass',
    'util.extend',
    'PieChartClusterer.icon.params',
    'PieChartClusterer.component.Canvas'
], function (
    provide,
    Clusterer,
    defineClass,
    extend,
    iconParams,
    PieChartClustererCanvas
) {
    var PieChartClusterer = defineClass(function (options) {
        PieChartClusterer.superclass.constructor.call(this, options);

        this._canvas = new PieChartClustererCanvas(iconParams.icons.large.size);
        this._canvas.options.setParent(this.options);
    }, Clusterer, {
        createCluster: function (center, geoObjects) {
            // Создаем метку-кластер с помощью стандартной реализации метода.
            var clusterPlacemark = PieChartClusterer.superclass.createCluster.call(this, center, geoObjects);
            var styleGroups = geoObjects.reduce(function (groups, geoObject) {
                var style = geoObject.options.get('iconColor', 'blue');

                groups[style] = ++groups[style] || 1;

                return groups;
            }, {});
            var iconUrl = this._canvas.generateIconDataURL(styleGroups, geoObjects.length);
            var clusterOptions = {
                clusterIcons: [
                    extend({href: iconUrl}, iconParams.icons.small),
                    extend({href: iconUrl}, iconParams.icons.medium),
                    extend({href: iconUrl}, iconParams.icons.large)
                ],
                clusterNumbers: iconParams.numbers
            };

            clusterPlacemark.options.set(clusterOptions);

            return clusterPlacemark;
        }
    });


    provide(PieChartClusterer);
});
