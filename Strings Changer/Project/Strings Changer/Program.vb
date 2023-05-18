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

            Console.WriteLine("Enter the replacement string : ")
            Dim replacementWord As String = Console.ReadLine()

            Try
                Dim files As String() = Directory.GetFiles(directoryPath, "*", SearchOption.AllDirectories)

                For Each Single_file As String In files
                    Try
                        Dim fileText As String = File.ReadAllText(Single_file)
                        Dim updatedText As String = fileText.Replace(searchTerm, replacementWord)
                        File.WriteAllText(Single_file, updatedText)

                        fileCounter += 1
                        Console.Write($"Files updated: {fileCounter}\r")
                    Catch ex As Exception
                        Console.WriteLine($"Error processing file: {Single_file}")
                        Console.WriteLine(ex.Message)
                    End Try
                Next

                Console.WriteLine(Environment.NewLine & "Replacement completed successfully.")
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
