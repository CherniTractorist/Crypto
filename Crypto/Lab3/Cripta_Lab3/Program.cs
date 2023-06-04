using System;

namespace Cripta_Lab3
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
            NOD Nod = new NOD();
            PrimeNumber Prime = new PrimeNumber();

            Console.WriteLine("------------1------------------");
            Prime.printInterval(2, 433);
          
            Prime.printLog(433);
            Console.WriteLine("--------------2----------------");
            Prime.printInterval(399, 433);
            Console.WriteLine("---------------3---------------");
            Console.WriteLine("399 = 399" );
            Console.WriteLine("433 = 7*79");
            Console.WriteLine("---------------4---------------");
            Prime.printPrime(399433);
            Console.WriteLine("---------------5---------------");
            Console.WriteLine("НОД(399,433) = " + Nod.Nod2(399, 533));
            Console.WriteLine("---------------7---------------");
            Console.WriteLine("НОД(52,26,13) = " + Nod.Nod3(52, 26, 13));
           
        }
    }
}
