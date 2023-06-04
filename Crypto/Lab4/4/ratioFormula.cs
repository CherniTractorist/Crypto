using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cripta_Lab4
{
    class Formuls
    {
        string alphabet = "abcdefghijklmnopqrstuvwxyzäöüß";
        public double criptionBel(int key, string fileData, string fileResult, bool isTrisemus)
        {
            string result = "";
            char resLet;
            string str = data_file_str(fileData);
            str = str.ToLower();

            Stopwatch st = new Stopwatch();
            st.Start();
            if (isTrisemus) 
                result = trisemus(str, "enigma", alphabet);
            else
                result = ration(key, str, alphabet);
            
            st.Stop();
            var collec = new Dictionary<char, int>();
            foreach (char c in result)
            {
                if (collec.ContainsKey(c))
                    collec[c] += 1;
                else
                    collec.Add(c, 1);
            }
            result_file(fileResult, result, collec);

            return st.Elapsed.TotalSeconds;
        }

        public double decriptionBel(int key, string fileData, string fileResult, bool isTrisemus)
        {
            string result = "";
            string str = data_file_str(fileData);
            char resLet;

            Stopwatch st = new Stopwatch();
            st.Start();


            if (isTrisemus)
                result = untrisemus(str, "enigma", alphabet);
            else
                result = unration(key, str, alphabet);

            st.Stop();
            var collec = new Dictionary<char, int>();
            foreach (char c in result)
            {
                if (collec.ContainsKey(c))
                    collec[c] += 1;
                else
                    collec.Add(c, 1);
            }
            result_file(fileResult, result, collec);
            return st.Elapsed.TotalSeconds;
        }
        public string data_file_str(string name_file)
        {
            FileStream fstream = File.OpenRead(name_file);
            byte[] array = new byte[fstream.Length];
            fstream.Read(array, 0, array.Length);
            string s = System.Text.Encoding.Default.GetString(array);

            return s;
        }

        public void result_file(string name_file, string result, Dictionary<char,int> collec)
        {
            using (StreamWriter sw = new StreamWriter(name_file))
            {
                sw.WriteLine(result);
            }
            var selectkey = from i in collec
                            orderby i.Key
                            select i;
            using (StreamWriter swt = new StreamWriter(name_file.Insert(0,"table")))
            {
                foreach (var el in selectkey)
                {
                    swt.WriteLine($"Element {el.Key} - {el.Value} \n");
                }
            }
        }

        public string ration(int key, string str, string alphabet)
        {
            string result = "";
            char resLet;
            for (int i = 0; i < str.Length; i++)
            {
                int indexLet = alphabet.IndexOf(str[i]);
                if (indexLet < 0)
                {
                    resLet = str[i];
                }
                else
                {
                    indexLet += key;
                    resLet = alphabet[indexLet % alphabet.Length];
                }
                result += resLet;
            }
            return result;
        }
        public string unration(int key, string str, string alphabet)
        {
            string result = "";
            char resLet;
            for (int i = 0; i < str.Length; i++)
            {
                int indexLet = alphabet.IndexOf(str[i]);
                if (indexLet < 0)
                {
                    resLet = str[i];
                }
                else
                {
                    indexLet -= key;
                    if (indexLet < 0)
                    {
                        indexLet += alphabet.Length;
                    }
                    resLet = alphabet[indexLet];
                }
                result += resLet;
            }
            return result;
        }

        public string trisemus(string str, string key, string alphabet)
        {
            string result = "";
            string keyTable = key;
            foreach (char c in key)
            {
                alphabet = alphabet.Replace(c.ToString(), "");
            }
            keyTable += alphabet;

            char resLet;
            for (int i = 0; i < str.Length; i++)
            {
                int indexLet = keyTable.IndexOf(str[i]);
                if (indexLet < 0)
                {
                    resLet = str[i];
                }
                else
                {
                    indexLet += 5;
                    resLet = keyTable[indexLet % keyTable.Length];
                }
                result += resLet;
            }
            return result;
        }

        public string untrisemus(string str, string key, string alphabet)
        {
            string result = "";
            string keyTable = key;
            foreach (char c in key)
            {
                alphabet = alphabet.Replace(c.ToString(), "");
            }
            keyTable += alphabet;

            char resLet;
            for (int i = 0; i < str.Length; i++)
            {
                int indexLet = keyTable.IndexOf(str[i]);
                if (indexLet < 0)
                {
                    resLet = str[i];
                }
                else
                {
                    indexLet -= 5;
                    resLet = indexLet<0? keyTable[(indexLet + keyTable.Length) % keyTable.Length] : keyTable[indexLet % keyTable.Length];
                }
                result += resLet;
            }
            return result;
        }
    }
}
