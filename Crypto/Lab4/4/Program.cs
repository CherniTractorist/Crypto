using System;

namespace Cripta_Lab4
{
    class Program
    {
        static void Main(string[] args)
        {
            Formuls rat = new Formuls();
            Console.WriteLine("-------(2.1) (2.2) k=7-------");
            Console.WriteLine("  Time spent on text encryption: " + rat.criptionBel(7, "TextBel.txt", "CriproRatioResult.log", false));
            Console.WriteLine("  Time spent deciphering the text: " + rat.decriptionBel(7, "CriproRatioResult.log", "DecriptoRatioResult.log", false));

            Console.WriteLine("\n------Trisemus name-------");
            Console.WriteLine("  Time spent on text encryption: " + rat.criptionBel(7, "TextBel.txt", "CriproTrisResult.log", true));
            Console.WriteLine("  Time spent deciphering the text: " + rat.decriptionBel(7, "CriproTrisResult.log", "DecriptoTrisResult.log", true));
        }
    }
}
