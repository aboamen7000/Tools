Imports System
Imports System.IO

Module Program
    Sub Main()
        Dim continueSearching As Boolean = True

        While continueSearching
            Console.Clear()
            Dim directoryPath As String = String.Empty

            Do While String.IsNullOrEmpty(directoryPath)
                Console.WriteLine("Enter the directory path:")
                directoryPath = Console.ReadLine().Trim()
            Loop

            Dim searchString As String = String.Empty

            Do While String.IsNullOrEmpty(searchString)
                Console.WriteLine("Enter the string to search:")
                searchString = Console.ReadLine().Trim()
            Loop

            Dim files() As String = Directory.GetFiles(directoryPath, "*", SearchOption.AllDirectories)

            Dim found As Boolean = False

            For Each fileo As String In files
                Dim fileContent As String = File.ReadAllText(fileo)

                If fileContent.Contains(searchString) Then
                    found = True
                    Console.ForegroundColor = ConsoleColor.Green
                    Console.WriteLine("String found in file: " & fileo)
                    Console.ResetColor()
                    Console.WriteLine("Press Enter to continue searching or any other key to search another string.")

                    Dim choice As ConsoleKeyInfo = Console.ReadKey()

                    If choice.Key <> ConsoleKey.Enter Then
                        Console.ForegroundColor = ConsoleColor.Red
                        Console.WriteLine("Do you want to continue searching with the same string in this directory? (Y/N)")
                        Console.ResetColor()
                        Dim continueSearchChoice As String = Console.ReadLine()

                        If continueSearchChoice.Equals("N", StringComparison.OrdinalIgnoreCase) Then
                            Exit For ' Stop searching in this directory
                        End If
                    End If
                End If
            Next

            If Not found Then
                Console.ForegroundColor = ConsoleColor.Red
                Console.WriteLine("String not found in any file.")
                Console.ResetColor()
                Console.ForegroundColor = ConsoleColor.Green
                Console.WriteLine("Do you want to search another string? (Y/N)")
                Console.ResetColor()
                Dim searchAgainChoice As String = Console.ReadLine()

                If searchAgainChoice.Equals("N", StringComparison.OrdinalIgnoreCase) Then
                    Console.WriteLine("Press Q to restart or any other key to exit.")
                    Dim restartChoice As ConsoleKeyInfo = Console.ReadKey()

                    If restartChoice.Key = ConsoleKey.Q Then
                        continueSearching = False ' Restart the whole process
                    Else
                        Exit While ' Exit the program
                    End If
                End If
            End If
        End While
    End Sub
End Module