@Code
    ViewData("Title") = "Ambient Intelligent Ecosystem"
End Code

<div id='wrapper'>
    <article>
        <header>
            <h2>AIE Dashboard</h2>
        </header>

        <div>
            <h3>Data from azure mobile service</h3>
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
                <tbody id='todo-items'></tbody>
            </table>
        </div>

        <div>
            <h3>Data from Equipment</h3>
            <table border="1">
                <thead>
                    <tr>
                        <td>EquipmentId</td>
                        <td>Temperature</td>
                        <td>Timestamp</td>
                        <td>Active Indicator</td>
                    </tr>
                </thead>
                <tbody id='equipment-data'></tbody>
            </table>
        </div>

    </article>

    <footer>
        <p>&copy; Time Travelers 2013</p>
        <ul id='errorlog'></ul>
    </footer>
</div>

