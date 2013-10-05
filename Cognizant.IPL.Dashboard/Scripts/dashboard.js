var Dashboard = Dashboard || {};

Dashboard.Index = (function ($) {
    return {
        initialize: function (logSwitch) {
            $("#tabs").tabs();
            Dashboard.Common.setLoggingSwitch(logSwitch);
            Dashboard.Common.log("entering initialize");
            Dashboard.Index.refreshData(logSwitch);
            Dashboard.Common.log("end initialize");
        },

        refreshData: function (logSwitch) {
            Dashboard.TruckTracker.initialize(logSwitch);
            Dashboard.TruckIncident.initialize(logSwitch);
            Dashboard.Equipment.initialize(logSwitch);
        }
    };

}(jQuery));


Dashboard.TruckTracker = (function ($) {
    return {
        initialize: function (logSwitch) {
            Dashboard.Common.setLoggingSwitch(logSwitch);
            Dashboard.TruckTracker.refreshData();
        },

        refreshData: function () {
            var query = Dashboard.Common.getTable('smart_truck_tracker').take(10);

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

                $('#tracker').empty().append(listItems).toggle(listItems.length > 0);
            }, Dashboard.Common.handleError);
        }


    };

}(jQuery));

Dashboard.TruckIncident = (function ($) {
    return {
        initialize: function (logSwitch) {
            Dashboard.Common.setLoggingSwitch(logSwitch);
            Dashboard.TruckIncident.refreshData();
        },

        refreshData: function () {
            var query = Dashboard.Common.getTable('smart_truck_incident').take(10);

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

                $('#incident').empty().append(listItems).toggle(listItems.length > 0);
            }, Dashboard.Common.handleError);
        }


    };

}(jQuery));

Dashboard.Equipment = (function ($) {
    return {
        initialize: function (logSwitch) {
            Dashboard.Common.setLoggingSwitch(logSwitch);
            Dashboard.Equipment.refreshData();
        },

        refreshData: function () {
            var query = Dashboard.Common.getTable('equipment_incident').take(10);

            query.read().then(function (todoItems) {

                var listItems = $.map(todoItems, function (item) {
                    return $('<tr>')
                        .append($('<td>').text(item.equipmentId))
                        .append($('<td>').text(item.temperature))
                        .append($('<td>').text(item.timestamp))
                        .append($('<td>').text(item.activeIndicator));
                });

                $('#equipment-data').empty().append(listItems).toggle(listItems.length > 0);
            }, Dashboard.Common.handleError);
        }


    };

}(jQuery));

Dashboard.Common = (function ($) {
    var azureClient = null;
    var enableLogging = false;

    return {
        getTable: function (tableName) {
            if (!azureClient)
                azureClient = new WindowsAzure.MobileServiceClient('https://aiemobileservice.azure-mobile.net/', 'NYuUVUztAwEXJQZxOFbppximTExpoh26');
            return azureClient.getTable(tableName);
        },

        setLoggingSwitch: function (logSwitch) {
            enableLogging = logSwitch;
        },

        handleError: function () {
            var text = error + (error.request ? ' - ' + error.request.status : '');
            $('#errorlog').append($('<li>').text(text));
        },

        log: function (message) {
            if (enableLogging) {
                $('#errorlog').append($('<li>').text(message));
            }
        }
    };

}(jQuery));

