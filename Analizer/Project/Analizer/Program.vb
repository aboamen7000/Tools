Imports System
Imports System.Threading.Tasks

Module Program
    Sub Main(args As String())

        Console.ForegroundColor = ConsoleColor.Green
        Dim i = 1

        Do
            Task.Run(Sub()
                         Dim rand As New Random()
                         Dim randomNumber As Integer = rand.Next(2)
                         Console.Write(randomNumber)
                     End Sub).Wait()

            System.Threading.Thread.Sleep(5)
            i += 1
            While i = 500
                i = 1
                Console.Clear()
            End While
        Loop While True

        Console.ReadLine()
    End Sub
End Module
