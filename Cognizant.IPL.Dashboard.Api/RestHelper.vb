Imports System.Net.Http
Imports System.Net
Imports System.Net.Http.Headers
Imports RestSharp

Public NotInheritable Class RestHelper

    Public Shared Function GetData(ByVal url As String) As String
        Dim client = New RestClient(url)
        ' client.Authenticator = new HttpBasicAuthenticator(username, password);

        Dim request = New RestRequest("resource/{id}", Method.POST)
        request.AddParameter("name", "value")
        ' adds to POST or URL querystring based on Method
        request.AddUrlSegment("id", 123)
        ' replaces matching token in request.Resource
        ' easily add HTTP Headers
        request.AddHeader("header", "value")

        ' add files to upload (works with compatible verbs)
        'request.AddFile(path)

        ' execute the request
        Dim response As RestResponse = client.Execute(request)
        Return response.Content
        ' raw content as string
        ' or automatically deserialize result
        ' return content type is sniffed but can be explicitly set via RestClient.AddHandler();
        'Dim response2 As RestResponse(Of Person) = client.Execute(Of Person)(request)
        'Dim name = response2.Data.Name

        '' easy async support
        'client.ExecuteAsync(request, Function(response)
        '                                 Console.WriteLine(response.Content)

        '                             End Function)

        '' async with deserialization
        'Dim asyncHandle = client.ExecuteAsync(Of Person)(request, Function(response)
        '                                                              Console.WriteLine(response.Data.Name)

        '                                                          End Function)

        '' abort the request on demand
        'asyncHandle.Abort()
    End Function

    Public Shared Sub SetRestApi()

    End Sub

End Class
