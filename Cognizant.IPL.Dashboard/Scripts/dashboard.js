var Dashboard = Dashboard || {};

Dashboard.Index = (function ($) {
    var azureClient = new WindowsAzure.MobileServiceClient('https://aiemobileservice.azure-mobile.net/', 'NYuUVUztAwEXJQZxOFbppximTExpoh26');
    var databaseTable = azureClient.getTable('smart_truck_incident');
    var enableLogging = false;

    return {
        initialize: function(logSwitch) {
            enableLogging = logSwitch;
            Dashboard.Index.log("entering initialize");
            Dashboard.Index.refreshTodoItems();
            Dashboard.Index.log("end initialize");
        },

        refreshTodoItems: function() {
            Dashboard.Index.log("entering refreshTodoItems");
            var query = databaseTable.take(10);

            query.read().then(function(todoItems) {

                var listItems = $.map(todoItems, function(item) {
                    return $('<tr>')
                        .append($('<td>').text(item.id))
                        .append($('<td>').text(item.latitude))
                        .append($('<td>').text(item.longitude))
                        .append($('<td>').text(item.speed))
                        .append($('<td>').text(item.location))
                        .append($('<td>').text(item.address));
                });

                $('#todo-items').empty().append(listItems).toggle(listItems.length > 0);
            }, Dashboard.Index.handleError);
            Dashboard.Index.log("end refreshTodoItems");
        },

        handleError: function() {
            var text = error + (error.request ? ' - ' + error.request.status : '');
            $('#errorlog').append($('<li>').text(text));
        },

        log: function(message) {
            if (enableLogging) {
                $('#errorlog').append($('<li>').text(message));
            }
        }
    };

}(jQuery));

Dashboard.Equipment = (function ($) {
    var azureClient = new WindowsAzure.MobileServiceClient('https://aiemobileservice.azure-mobile.net/', 'NYuUVUztAwEXJQZxOFbppximTExpoh26');
    var databaseTable = azureClient.getTable('equipment_incident');

    return {
        initialize: function(logSwitch) {
            enableLogging = logSwitch;
            Dashboard.Equipment.refreshTodoItems();
        },

        refreshTodoItems: function() {
            var query = databaseTable.take(10);

            query.read().then(function(todoItems) {

                var listItems = $.map(todoItems, function(item) {
                    return $('<tr>')
                        .append($('<td>').text(item.equipmentId))
                        .append($('<td>').text(item.temperature))
                        .append($('<td>').text(item.timestamp))
                        .append($('<td>').text(item.activeIndicator));
                });

                $('#equipment-data').empty().append(listItems).toggle(listItems.length > 0);
            }, Dashboard.Index.handleError);
        }


    };

}(jQuery));

