define(['backbone', 'models/item'], function(Backbone, Item) {
    var ItemCollection = Backbone.Collection.extend({
        model: Item,
        url: 'api/item'
    });
    return ItemCollection;
});