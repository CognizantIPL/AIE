var Dashboard = Dashboard || {};

Dashboard.Index = (function ($) {
    var azureClient = new WindowsAzure.MobileServiceClient('https://aiemobileservice.azure-mobile.net/', 'NYuUVUztAwEXJQZxOFbppximTExpoh26');
    var databaseTable = azureClient.getTable('smart_truck_incident');
        
    return {
        initialize: function () {
            Dashboard.Index.refreshTodoItems();
        },

        refreshTodoItems: function () {

            var query = databaseTable.take(10);

            query.read().then(function (todoItems) {

                var listItems = $.map(todoItems, function (item) {
                    return $('<tr>')
                        .append($('<td>').text(item.id))
                        .append($('<td>').text(item.latitude))
                        .append($('<td>').text(item.longitude))
                        .append($('<td>').text(item.speed))
                        .append($('<td>').text(item.location))
                        .append($('<td>').text(item.address));
                });

                $('#todo-items').empty().append(listItems).toggle(listItems.length > 0);
                $('#summary').html('<strong>' + todoItems.length + '</strong> item(s)');
            }, Dashboard.Index.handleError);
        },

        handleError: function () {
            var text = error + (error.request ? ' - ' + error.request.status : '');
            $('#errorlog').append($('<li>').text(text));
        }
    }

}(jQuery));

