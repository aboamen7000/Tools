Imports System.IO

Module Module1
    Sub Main()
        ' Set console foreground color to green
        Console.ForegroundColor = ConsoleColor.Green

        Dim fileCounter As Integer = 0

        Do
            Console.WriteLine("Enter the directory path : ")
            Dim directoryPath As String = Console.ReadLine()

            Console.WriteLine("Enter the string to search for : ")
            Dim searchTerm As String = Console.ReadLine()

            Dim searchTermFound As Boolean = False

            Try
                Dim files As String() = Directory.GetFiles(directoryPath, "*", SearchOption.AllDirectories)

                For Each Single_file As String In files
                    Try
                        Dim fileText As String = File.ReadAllText(Single_file)

                        If fileText.Contains(searchTerm) Then
                            searchTermFound = True

                            Console.WriteLine($"The string '{searchTerm}' was found in the file: {Single_file}")
                            Console.WriteLine("Do you want to continue searching for this string? (Y/N)")

                            Dim searchChoice As String = Console.ReadLine()

                            If searchChoice.Equals("N", StringComparison.OrdinalIgnoreCase) Then
                                Exit For ' Exit the loop and move on to the next search
                            End If
                        End If
                    Catch ex As Exception
                        Console.WriteLine($"Error processing file: {Single_file}")
                        Console.WriteLine(ex.Message)
                    End Try
                Next

                If Not searchTermFound Then
                    Console.WriteLine($"The string '{searchTerm}' was not found in any file.")
                End If
            Catch ex As Exception
                Console.WriteLine("Error accessing the directory.")
                Console.WriteLine(ex.Message)
            End Try

            Console.WriteLine("Do you want to perform another search? (Y/N)")
            Dim repeat As String = Console.ReadLine()

            If Not repeat.Equals("Y", StringComparison.OrdinalIgnoreCase) Then
                Exit Do
            End If
        Loop While True

        Console.ReadLine()
    End Sub
End Module
