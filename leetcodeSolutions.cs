public class Solution
{
    // Merge Alternatively
    // merges two strings alternatively. say you habe abcd and efgh, the outcome will be aebfcgdh and it will append the rest of the string to the back it they are not of the same length
    public string MergeAlternately(string word1, string word2)
    {
        bool sameLength = word1.Length == word2.Length;
        string longWord = (word1.Length > word2.Length) ? word1 : word2;
        string shortWord = (word1 == longWord) ? word2 : word1;

        string returnWord = "";
        for (int i = 0; i < shortWord.Length; i++)
        {
            returnWord += word1[i];
            returnWord += word2[i];
        }
        if (!sameLength)
        {
            returnWord += longWord[shortWord.Length..];
        }
        return returnWord;
    }

    // Greatest Common Divisor of Strings
    // This one takes two strings and finds out the longest string that can perrfectly devided the two. if you have abcd and abcdabcd, the ooutcome will be abcd. it will return and empty string if there is no common devisor
    public string GcdOfStrings(string str1, string str2)
    {
        int str1Length = str1.Length;
        int str2Length = str2.Length;

        int shortLength = (str1Length > str2Length) ? str2Length : str1Length;
        var str1Solutions = new List<string>();

        for (int i = 0; i < shortLength; i++)
        {
            if (!((str1Length % (i + 1) == 0) && (str2Length % (i + 1) == 0)))
            {
                continue;
            }
            string multipliedString = string.Concat(Enumerable.Repeat(str1[..(i + 1)], str1Length / (i + 1)));
            if (str1 == multipliedString)
            {
                str1Solutions.Add(str1[..(i + 1)]);
            }
        }

        for (int i = str1Solutions.Count - 1; i >= 0; i--)
        {
            string multipliedString = string.Concat(Enumerable.Repeat(str1Solutions[i], str2Length / str1Solutions[i].Length));

            if (str2 == multipliedString) { return str1Solutions[i]; }
        }
        return "";

    }
    public IList<bool> KidsWithCandies(int[] candies, int extraCandies)
    {
        List<bool> result = [];
        int maxCandy = candies.Max();
        foreach (int candy in candies)
        {
            result.Add(candy + extraCandies >= maxCandy);
        }

        return result;
    }
    public bool CanPlaceFlowers(int[] flowerbed, int n)
    {
        for (int i = 0; i < flowerbed.Length; i++)
        {
            if (n <= 0) break;
            if (flowerbed.Length == 1)
            {
                if (flowerbed[i] == 0)
                {
                    flowerbed[i] = 1;
                    n--;
                }
                continue;
            }
            if (i == 0)
            {
                if (flowerbed[i] == 0 && flowerbed[i + 1] == 0)
                {
                    flowerbed[i] = 1;
                    i++;
                    n--;
                }
                continue;
            }
            if (i == (flowerbed.Length - 1))
            {
                if (flowerbed[i] == 0 && flowerbed[i - 1] == 0)
                {
                    flowerbed[i] = 1;
                    i++;
                    n--;
                }
                continue;
            }
            if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0)
            {
                flowerbed[i] = 1;
                i++;
                n--;
                continue;
            }
            if (flowerbed[i] == 1) { i++; }
        }
        if (n <= 0) { return true; }
        return false;
    }

    public string ReverseVowels(string s)
    {
        char[] vowels = [
            'a','e', 'i',
        'o',
        'u',
        'A',
        'E',
        'I',
        'O',
        'U',
        ]
        ;
        List<char> sVowels = [];
        List<int> index = [];
        char[] stringlist = s.ToArray();

        for (int i = 0; i < stringlist.Length; i++)
        {
            char letter = (char)stringlist[i];
            if (vowels.Contains(letter))
            {

                sVowels.Add(letter);
                index.Add(i);
            }
        }
        sVowels.Reverse();
        for (int i = 0; i < sVowels.Count; i++)
        {
            char replaceVowel = sVowels[i];
            stringlist[index[i]] = replaceVowel;
        }
        return string.Join(string.Empty, stringlist);

    }
}

