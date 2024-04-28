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
    public string ReverseWords(string s)
    {
        string[] wordList = s.Split(" ");
        string newWord = "";
        for (int i = wordList.Length - 1; i >= 0; i--)
        {
            if (wordList[i] != string.Empty)
            {
                newWord += wordList[i] + " ";
            }
        }
        return newWord.Trim();

    }
    public int[] ProductExceptSelf(int[] nums)
    {
        int[] prefix = Enumerable.Repeat(1, nums.Length).ToArray();
        int[] suffix = Enumerable.Repeat(1, nums.Length).ToArray();
        int prefixNum = 1;
        int suffixNum = 1;
        for (int i = 0; i < nums.Length; i++)
        {
            int j = nums.Length - 1 - i;
            if (i == 0) { continue; }

            prefixNum *= nums[i - 1];
            prefix[i] = prefixNum;

            suffixNum *= nums[j + 1];
            suffix[j] = suffixNum;
        }
        for (int i = 0; i < nums.Length; i++)
        {
            nums[i] = prefix[i] * suffix[i];
        }
        return nums;
    }
    public bool IncreasingTriplet(int[] nums)
    {
        int[] lowPair = [0, 0];
        int leastNum = nums[0];
        int secondLowest;
        bool setLowPair = false;

        for (int i = 0; i < nums.Length; i++)
        {
            if (i == 0) { continue; }
            if (setLowPair && nums[i] > lowPair[1]) { return true; }
            if (nums[i] > leastNum)
            {
                secondLowest = nums[i];
                if (setLowPair && secondLowest < lowPair[1])
                {
                    lowPair = [leastNum, secondLowest];
                    setLowPair = true;
                }
                if (!setLowPair)
                {
                    lowPair = [leastNum, secondLowest];
                    setLowPair = true;
                }
            }
            if (nums[i] < leastNum)
            {
                leastNum = nums[i];
            }
        }
        return false;
    }
    public int Compress(char[] chars)
    {
        string s = "";
        int charLength = 1;
        for (int i = 0; i < chars.Length; i++)
        {
            if (i == 0)
            {
                s += chars[i];
                continue;
            }

            if (i == chars.Length - 1 && chars[i] == chars[i - 1])
            {
                s += charLength + 1;
            }
            if (chars[i] == chars[i - 1])
            {
                charLength++; continue;
            }
            if (charLength > 1)
            {
                s += charLength;
            }
            s += chars[i];
            charLength = 1;

        }
        s.CopyTo(0, chars, 0, s.Length);
        chars = s.ToArray();
        return chars.Length;
    }
    public void MoveZeroes(int[] nums)
    {
        int lastSwapPos = -1;
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] == 0) { continue; }
            if (lastSwapPos + 1 == i) { lastSwapPos++; continue; }
            // swap
            nums[lastSwapPos + 1] = nums[i];
            nums[i] = 0;
            lastSwapPos++;

        }
    }

    public bool IsSubsequence(string s, string t)
    {
        int sIndex = 0;
        if (s == "") { return true; }
        for (int i = 0; i < t.Length; i++)
        {
            if (t[i] == s[sIndex] && sIndex >= s.Length - 1) { return true; }
            if (t[i] == s[sIndex]) { sIndex++; }
        }
        return false;

    }

    public int MaxArea(int[] height)
    {
        int maxArea = 0;
        for (int i = 0, j = height.Length - 1; i >= j;)
        {
            int area = (j - i) * ((height[i] < height[j]) ? height[i] : height[j]);
            if (area > maxArea) { maxArea = area; }
            if (height[i] <= height[j])
            {
                i++;
            }
            else
            {
                j--;
            }

            Console.WriteLine(area);

        }
        return maxArea;

    }
    public int MaxOperations(int[] nums, int k)
    {
        int numOfOperations = 0;
        var secondPairs = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++)
        {
            int value;
            bool numInDic = secondPairs.TryGetValue(nums[i], out value);
            if (numInDic && value > 0) { secondPairs[nums[i]] = value - 1; numOfOperations++; }
            else if (secondPairs.TryGetValue(k - nums[i], out value)) { secondPairs[k - nums[i]] = value + 1; }
            else { secondPairs[k - nums[i]] = 1; }

        }
        return numOfOperations;
    }
    public double FindMaxAverage(int[] nums, int k)
    {
        int sum = 0;
        for (int i = 0; i < k; i++)
        {
            sum += nums[i];
        }
        int maxSum = sum;
        for (int i = k; i < nums.Length; i++)
        {
            sum -= nums[i - k];
            sum += nums[i];
            if (sum > maxSum)
            {
                maxSum = sum;
            }
        }
        return maxSum / (double)k;
    }


    public int MaxVowels(string s, int k)
    {
        char[] vowels = ['a', 'e', 'i', 'o', 'u'];
        int num = 0;
        for (int i = 0; i < k; i++)
        {
            if (vowels.Contains(s[i])) { num++; }
        }
        int maxVowel = num;
        for (int i = k; i < s.Length; i++)
        {
            if (num == k) { return num; }
            bool vIn = vowels.Contains(s[i]);
            bool vOut = vowels.Contains(s[i - k]);
            if (vIn && !vOut) { num++; }
            if (!vIn && vOut) { num--; }
            if (num > maxVowel) { maxVowel = num; }
        }
        return maxVowel;
    }


    public int LongestOnes(int[] nums, int k)
    {
        int zereos = 0;
        int i = 0;
        int j = 0;
        while (j < nums.Length)
        {
            if (nums[j] == 0) { zereos++; }
            j++;

            if (zereos > k)
            {
                if (nums[i] == 0) { zereos--; }
                i++;
            }
        }
        return j - i;


    }

    public int LongestSubarray(int[] nums)
    {
        int longest = 0;
        int lastCount = 0;
        int count = 0;
        bool encounteredZero = false;
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] == 0)
            {
                encounteredZero = true;
                if (count + lastCount > longest) { longest = count + lastCount; }
                lastCount = count;
                count = 0;
            }
            else
            {
                count++;
            }

            if (i == nums.Length - 1)
            {
                if (count + lastCount > longest) { longest = count + lastCount; }
            }
        }
        if (!encounteredZero) { return longest - 1; }
        return longest;
    }
}

