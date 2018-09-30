<template>
<div class='uk-section uk-section-default' id="content-root">
    <div class='uk-container'>
        <div data-editable data-name="map-title"><h1>The map</h1></div>
        <div uk-grid>
            <div class="uk-width-expand@m">
                <div id='map'></div>
            </div>
            <div class="uk-width-1-3@m uk-grid-item-match">
                <div class="uk-card uk-card-default uk-card-body">
                    <h4 v-if="!selectedOrganism">Click on a marker to show relevant informations</h4>
                    <article v-if="!!selectedOrganism" class="uk-article">
                        <h1 class="uk-article-title"><a class="uk-link-reset" v-bind:href="'/organism/' + selectedOrganism.id">{{selectedOrganism.name}}</a></h1>
                        <p>{{selectedOrganism.description}}</p>
                        <p>{{selectedOrganism.address}}</p>
                        <p>
                            <span uk-icon="link"></span> <a v-bind:href="'http://' + selectedOrganism.contact.website">{{selectedOrganism.contact.website}}</a><br/>                                                        
                            <span uk-icon="mail"></span> {{selectedOrganism.contact.mail}}<br/>
                            <span uk-icon="receiver"></span> {{selectedOrganism.contact.phone}}
                        </p>
                    </article>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    head: {
        link: [
            { href: 'https://api.mapbox.com/mapbox-gl-js/v0.41.0/mapbox-gl.css', rel: 'stylesheet' }
        ],
        script: [
            { src: 'https://api.mapbox.com/mapbox-gl-js/v0.41.0/mapbox-gl.js' }
        ]
    },
    data() {
        return {
            organisms: this.$store.getters.allOrganism,
            selectedOrganism: undefined
        }
    },
    mounted() {
        let map = new mapboxgl.Map({
            container: 'map',
            style: "https://tile.jawg.io/jawg-sunny.json?access-token=11WJmN1axIKlvtDnZ0pilPGpWpQz19esMSu8JTZhIvH09iJFihnCDwMWVAUhgYeL",
            zoom: 12.5,
            center: [105.831436, 21.037405]
        })
        let vueInstance = this
        map.on('load', () => {

            let layer = {
                "id": "places",
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": []
                    }
                },
                "layout": {
                    "icon-image": "{icon}-15",
                    "icon-allow-overlap": true
                }
            }
            vueInstance.organisms.forEach(organism => {
                layer.source.data.features.push({
                    "type": "Feature",
                    "properties": {
                        "organismId": organism.id,
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [organism.coordinates.lng, organism.coordinates.lat]
                    }
                })
            })
            map.addLayer(layer)
            
            map.on('click', 'places', function (e) {
                vueInstance.selectedOrganism = vueInstance.$store.getters.getOrganismById(e.features[0].properties.organismId)
            })
            map.on('mouseenter', 'places', function () {
                map.getCanvas().style.cursor = 'pointer';
            })
            map.on('mouseleave', 'places', function () {
                map.getCanvas().style.cursor = '';
            })
        })
    }
}
</script>

<style scoped>
#map{
    width: 100%;
    height: 640px;
    float: left;
}
</style>