@Code
    ViewData("Title") = "Ambient Intelligent Ecosystem"
End Code

<div id='wrapper'>
    <article>
        <header>
            <h2>AIE Dashboard</h2>
        </header>

        <div id="tabs">
            <ul>
                <li><a href="#tabs-1">Smart truck tracker</a></li>
                <li><a href="#tabs-2">Smart truck incident</a></li>
                <li><a href="#tabs-3">Equipment Incident</a></li>
            </ul>
            <div id="tabs-1">
                <table border="1">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Latitude</td>
                            <td>Longitude</td>
                            <td>Speed</td>
                            <td>Location</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody id='tracker'></tbody>
                </table>
            </div>
            <div id="tabs-2">
                <table border="1">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Latitude</td>
                            <td>Longitude</td>
                            <td>Speed</td>
                            <td>Location</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody id='incident'></tbody>
                </table>
            </div>
            <div id="tabs-3">
                <table border="1">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>EquipmentId</td>
                            <td>Temperature</td>
                            <td>Timestamp</td>
                            <td>Active Indicator</td>
                        </tr>
                    </thead>
                    <tbody id='equipment-data'></tbody>
                </table>
                <div>
                    <div>
                        <span>Id:</span>
                        <input type="text" id="equipId" />
                    </div>
                    <div>
                        <span>ActiveIndicator:</span>
                        <input type="text" maxlength="1" id="equipActiveStatus" />
                    </div>
                    <input type="button" id="updateEquipment" value="Toggle active flag to true" />
                </div>
                <div>
                    <textarea id="equipmentJson">{ equipmentId: "3", thresholdLevel: "01", currentTemperature: "50.8", thresholdLimit: "40"}</textarea>

                    <input type="button" id="postEquipmentToEndpoint" value="Post to mobile service endpoint" />

                </div>
            </div>

        </div>

    </article>

    <footer>
        <p>&copy; Time Travelers 2013</p>
        <ul id='errorlog'></ul>
    </footer>
</div>

