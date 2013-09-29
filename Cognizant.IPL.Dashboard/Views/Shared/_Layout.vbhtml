<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>@ViewData("Title")</title>
        <meta name="viewport" content="width=device-width" />
        <link href="~/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        @Styles.Render("~/Content/mobileCss", "~/Content/css")
        @Scripts.Render("~/bundles/modernizr")
    </head>
    <body>
        <div data-role="page" data-theme="b">
            <div data-role="header">
                @If IsSectionDefined("Header") Then
                    @RenderSection("Header")
                Else
                    @<h1>@ViewData("Title")</h1>                    
                End If
            </div>
            <div data-role="content">
                @RenderBody()
            </div>
        </div>

        @Scripts.Render("~/bundles/jquery")
        <script src='https://aiemobileservice.azure-mobile.net/client/MobileServices.Web-1.0.0.min.js'></script>
        @Scripts.Render("~/bundles/dashboard")
        <script>
            $(document).on("mobileinit", function () {
                $.mobile.ajaxEnabled = false;
            });
            $(document).on("ready", function () {
                Dashboard.Index.initialize(true);
            });
      </script>

        @Scripts.Render("~/bundles/jquerymobile")
        @RenderSection("scripts", required:=False)
    </body>
</html>
