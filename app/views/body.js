var View = require('ampersand-view');
var templates = require('../templates');
var ChartInterfaceView = require('./chart-interface');

/*

Code is working,
let's comment it out for later extension & use

*/
/*
var SeriesItemModel = require('../models/series-item');

window.seriesItemModel = new SeriesItemModel({
    id : '1',
    label : 'Orders',
    value : 500
});

// see what is inside the state models
console.log(seriesItemModel.serialize());
*/


var DataSetModel = require('../models/data-set');
window.dataSetModel = new DataSetModel();

dataSetModel.add({
    id : '0',
    title : '5 inch gloss',
    seriesList : ['series-a', 'series-b'],
});

dataSetModel.add({
    id : '1',
    title : '5 inch lustre',
    seriesList : ['series-a', 'series-b'],
});

module.exports = View.extend({
    template : templates.body,
    autoRender : true,
    initialize : function(){
        document.title = '{ Project }';
    },
    render : function(options){
        this.renderWithTemplate();
        
        console.log('document body rendered');

        this.interfaceContainerEl = this.queryByHook("interface-container");

        // create the interface view
        this.view = new ChartInterfaceView({
            el : this.interfaceContainerEl,
            collection : dataSetModel
        });
    }
});