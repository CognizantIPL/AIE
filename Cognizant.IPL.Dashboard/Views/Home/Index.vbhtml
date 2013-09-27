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
            <h3>Data from Foresight (TODO)</h3>
            <p></p>
        </div>

    </article>

    <footer>
        <p>&copy; Time Travelers 2013</p>
        <ul id='errorlog'></ul>
    </footer>
</div>

