Imports Cognizant.IPL.Dashboard.Api
Imports NUnit.Framework

<TestFixture>
Public Class RestApiTests

    <Test>
    Public Sub RestHelper_GetData()
        Dim response = RestHelper.GetData("http://foresight-api-721608207.us-east-1.elb.amazonaws.com/api/v1/streams/:streamid/hsdata")

        Assert.IsNotNull(response)
    End Sub


End Class
