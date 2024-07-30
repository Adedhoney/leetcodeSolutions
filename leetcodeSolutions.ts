function mergeAlternately(
    word1: string,
    word2: string
): string {
    const sameLength = word1.length === word2.length
    const longWord =
        word1.length > word2.length ? word1 : word2
    const shortWord = word1 == longWord ? word2 : word1

    let returnWord = ""
    for (let i = 0; i < shortWord.length; i++) {
        returnWord += word1[i]
        returnWord += word2[i]
    }
    if (!sameLength) {
        returnWord += longWord.slice(shortWord.length)
    }
    return returnWord
}

function gcdOfStrings(str1: string, str2: string): string {
    const str1Length = str1.length
    const str2Length = str2.length

    const shortLength =
        str1Length > str2Length ? str2Length : str1Length
    const str1Solutions: string[] = []

    for (let i = 0; i < shortLength; i++) {
        if (
            !(
                str1Length % (i + 1) == 0 &&
                str2Length % (i + 1) == 0
            )
        ) {
            continue
        }
        let multipliedString = str1
            .slice(0, i + 1)
            .repeat(str1Length / (i + 1))
        if (str1 == multipliedString) {
            str1Solutions.push(str1.slice(0, i + 1))
        }
    }
    for (let i = str1Solutions.length - 1; i >= 0; i--) {
        let multipliedString = str1Solutions[i].repeat(
            str2Length / str1Solutions[i].length
        )

        if (str2 == multipliedString) {
            return str1Solutions[i]
        }
    }

    return ""
}

function kidsWithCandies(
    candies: number[],
    extraCandies: number
): boolean[] {
    const result: boolean[] = []
    const maxCandy = Math.max(...candies)
    for (const candy of candies) {
        result.push(candy + extraCandies >= maxCandy)
    }

    return result
}

function canPlaceFlowers(
    flowerbed: number[],
    n: number
): boolean {
    for (let i = 0; i < flowerbed.length; i++) {
        if (n <= 0) break
        if (flowerbed.length == 1) {
            if (flowerbed[i] == 0) {
                flowerbed[i] = 1
                n--
            }
            continue
        }
        if (i == 0) {
            if (
                flowerbed[i] == 0 &&
                flowerbed[i + 1] == 0
            ) {
                flowerbed[i] = 1
                i++
                n--
            }
            continue
        }
        if (i == flowerbed.length - 1) {
            if (
                flowerbed[i] == 0 &&
                flowerbed[i - 1] == 0
            ) {
                flowerbed[i] = 1
                i++
                n--
            }
            continue
        }
        if (
            flowerbed[i] == 0 &&
            flowerbed[i - 1] == 0 &&
            flowerbed[i + 1] == 0
        ) {
            flowerbed[i] = 1
            i++
            n--
            continue
        }
        if (flowerbed[i] == 1) {
            i++
        }
    }
    if (n <= 0) {
        return true
    }
    return false
}

function reverseVowels(s: string): string {
    const vowels = [
        "a",
        "e",
        "i",
        "o",
        "u",
        "A",
        "E",
        "I",
        "O",
        "U",
    ]
    const sVowels: string[] = []
    const index: number[] = []
    const stringlist = s.split("")

    for (let i = 0; i < stringlist.length; i++) {
        const letter = stringlist[i]
        if (vowels.includes(letter)) {
            sVowels.push(letter)
            index.push(i)
        }
    }
    sVowels.reverse()
    for (let i = 0; i < sVowels.length; i++) {
        const replaceVowel = sVowels[i]
        stringlist[index[i]] = replaceVowel
    }
    return stringlist.join("")
}

function reverseWords(s: string): string {
    const wordList = s.split(" ")
    let newWord = ""
    for (let i = wordList.length - 1; i >= 0; i--) {
        if (!wordList[i]) {
            newWord += wordList[i] + " "
        }
    }
    return newWord.trim()
}

function productExceptSelf(nums: number[]): number[] {
    const array: number[][] = Array(nums.length)
        .fill(null)
        .map(() => [1, 1])
    let prefixNum = 1
    let suffixNum = 1
    for (let i = 0; i < nums.length; i++) {
        let j = nums.length - 1 - i
        if (i == 0) {
            continue
        }

        prefixNum *= nums[i - 1]
        array[i][0] = prefixNum

        suffixNum *= nums[j + 1]
        array[j][1] = suffixNum
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = array[i][0] * array[i][1]
    }
    return nums
}

function increasingTriplet(nums: number[]): boolean {
    let lowPair = [0, 0]
    let leastNum = nums[0]
    let secondLowest
    let setLowPair = false

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            continue
        }
        if (setLowPair && nums[i] > lowPair[1]) {
            return true
        }
        if (nums[i] > leastNum) {
            secondLowest = nums[i]
            if (setLowPair && secondLowest < lowPair[1]) {
                lowPair = [leastNum, secondLowest]
                setLowPair = true
            }
            if (!setLowPair) {
                lowPair = [leastNum, secondLowest]
                setLowPair = true
            }
        }
        if (nums[i] < leastNum) {
            leastNum = nums[i]
        }
    }
    return false
}
function compress(chars: string[]): number {
    let s = ""
    let charLength = 1
    for (let i = 0; i < chars.length; i++) {
        if (i == 0) {
            s += chars[i]
            continue
        }

        if (
            i == chars.length - 1 &&
            chars[i] == chars[i - 1]
        ) {
            s += charLength + 1
        }
        if (chars[i] == chars[i - 1]) {
            charLength++
            continue
        }
        if (charLength > 1) {
            s += charLength
        }
        s += chars[i]
        charLength = 1
    }

    const newList = [...s.split("")]
    chars.splice(0, s.length, ...newList)
    chars = newList
    return chars.length
}

function moveZeroes(nums: number[]): void {
    let lastSwapPos = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            continue
        }
        if (lastSwapPos + 1 === i) {
            lastSwapPos++
            continue
        }
        nums[lastSwapPos + 1] = nums[i]
        nums[i] = 0
        lastSwapPos++
    }
}
function isSubsequence(s: string, t: string): boolean {
    let sIndex = 0
    if (s == "") {
        return true
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] == s[sIndex] && sIndex >= s.length - 1) {
            return true
        }
        if (t[i] == s[sIndex]) {
            sIndex++
        }
    }
    return false
}

function maxArea(height: number[]): number {
    let maxArea = 0
    for (let i = 0, j = height.length - 1; i <= j; ) {
        let area =
            (j - i) *
            (height[i] < height[j] ? height[i] : height[j])
        if (area > maxArea) {
            maxArea = area
        }
        if (height[i] <= height[j]) {
            i++
        } else {
            j--
        }
    }
    return maxArea
}

function maxOperations(nums: number[], k: number): number {
    let ops = 0
    let set = {}

    for (let num of nums) {
        const pair = k - num
        if (set[num] >= 1) {
            set[num]--
            ops++
        } else {
            set[pair] ? set[pair]++ : (set[pair] = 1)
        }
    }
    return ops
}

function findMaxAverage(nums: number[], k: number): number {
    let maxSum = 0
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    maxSum = sum
    for (let i = k; i < nums.length; i++) {
        sum -= nums[i - k]
        sum += nums[i]
        if (sum > maxSum) {
            maxSum = sum
        }
    }
    return maxSum / k
}

function maxVowels(s: string, k: number): number {
    const vowels = ["a", "e", "i", "o", "u"]
    let num = 0
    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) {
            num++
        }
    }
    let maxVowel = num
    for (let i = k; i < s.length; i++) {
        if (num == k) {
            return num
        }
        let vIn = vowels.includes(s[i])
        let vOut = vowels.includes(s[i - k])
        if (vIn && !vOut) {
            num++
        }
        if (!vIn && vOut) {
            num--
        }
        if (num > maxVowel) {
            maxVowel = num
        }
    }
    return maxVowel
}

function longestOnes(nums: number[], k: number): number {
    if (nums === null) {
        throw new Error("Input array is null")
    }

    let start = 0,
        end = 0,
        zeros = 0

    while (end < nums.length) {
        if (nums[end] === 0) {
            zeros++
        }
        end++

        if (zeros > k) {
            if (nums[start] === 0) {
                zeros--
            }
            start++
        }
    }

    return end - start
}

function longestSubarray(nums: number[]): number {
    let longest = 0
    let lastCount = 0
    let count = 0
    let encounteredZero = false
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            encounteredZero = true
            if (count + lastCount > longest) {
                longest = count + lastCount
            }
            lastCount = count
            count = 0
        } else {
            count++
        }

        if (i == nums.length - 1) {
            if (count + lastCount > longest) {
                longest = count + lastCount
            }
        }
    }
    if (!encounteredZero) {
        return longest - 1
    }
    return longest
}

function largestAltitude(gain: number[]): number {
    let highest = 0
    let current = 0
    for (let g of gain) {
        current += g
        if (current > highest) {
            highest = current
        }
    }
    return highest
}

function pivotIndex(nums: number[]): number {
    let prefixArr = new Array(nums.length)
    let suffixArr = new Array(nums.length)
    let prefix = 0
    let suffix = 0
    for (
        let i = 0, j = nums.length - 1;
        i < nums.length && j >= 0;
        i++, j--
    ) {
        prefixArr[i] = prefix
        suffixArr[j] = suffix
        prefix += nums[i]
        suffix += nums[j]
    }
    for (let i = 0; i < nums.length; i++) {
        if (prefixArr[i] == suffixArr[i]) {
            return i
        }
    }
    return -1
}

function findDifference(
    nums1: number[],
    nums2: number[]
): number[][] {
    const num1Set = new Set(nums1)
    const num2Set = new Set(nums2)
    for (let num of num2Set) {
        if (num in num1Set) {
            num1Set.delete(num)
            num2Set.delete(num)
        }
    }
    const num1 = Array.from(num1Set)
    const num2 = Array.from(num2Set)
    return [num1, num2]
}

function uniqueOccurrences(arr: number[]): boolean {
    let numObj = {}
    let occObj = {}
    for (let num of arr) {
        if (numObj[num]) {
            numObj[num]++
        } else {
            numObj[num] = 1
        }
    }
    for (let num in numObj) {
        if (occObj[numObj[num]]) {
            return false
        } else occObj[numObj[num]] = 1
    }
    return true
}

function removeStars(s: string): string {
    const answer: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "*") {
            answer.pop()
            continue
        }
        answer.push(s[i])
    }
    return answer.join("")
}

function decodeString(s: string): string {
    const currentNumber: number[] = []
    let answer = ""

    function getString(i: number, number: string): any {
        currentNumber.push(Number(number))
        let strings = ""
        let newNumber = ""
        let string
        for (let j = i + 1; j < s.length; j++) {
            if (s[j] === "[") {
                ;[j, string] = getString(j, newNumber)
                newNumber = ""
                strings += string
                continue
            }
            if (s[j] === "]") {
                strings = strings.repeat(
                    currentNumber.pop() as number
                )
                return [j, strings]
            }
            if (Number(s[j]) || Number(s[j]) === 0) {
                newNumber += s[j]
            } else {
                strings += s[j]
            }
        }
    }

    let number = ""
    for (let i = 0; i < s.length; i++) {
        let strings = ""
        if (s[i] === "[") {
            ;[i, strings] = getString(i, number)
            number = ""
            answer += strings
            continue
        }
        if (Number(s[i]) || Number(s[i]) === 0) {
            number += s[i]
        } else {
            answer += s[i]
        }
    }
    return answer
}

function equalPairs(grid: number[][]): number {
    let num = 0
    let rows: any = {}
    let columns: string[] = []

    for (let i = 0; i < grid.length; i++) {
        let row = ""
        let column = ""
        for (let j = 0; j < grid.length; j++) {
            row += `-${grid[i][j]}`
            column += `-${grid[j][i]}`
        }
        if (rows[row]) {
            rows[row] += 1
        } else {
            rows[row] = 1
        }

        columns.push(column)
    }

    for (let i = 0; i < columns.length; i++) {
        if (rows[columns[i]]) {
            num += rows[columns[i]]
        }
    }
    return num
}

function asteroidCollision(asteroids: number[]): number[] {
    let output: number[] = []
    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i] > 0) {
            output.push(asteroids[i])
            continue
        } else if (output.length === 0) {
            output.push(asteroids[i])
            continue
        } else {
            let still_crushing = true
            do {
                if (
                    output.length == 0 ||
                    output[output.length - 1] < 0
                ) {
                    output.push(asteroids[i])
                    still_crushing = false
                    continue
                }
                let collision =
                    output[output.length - 1] + asteroids[i]
                if (collision > 0) {
                    still_crushing = false
                } else if (collision == 0) {
                    output.pop()
                    still_crushing = false
                } else {
                    output.pop()
                }
            } while (still_crushing)
        }
    }
    return output
}

class RecentCounter {
    private pings: number[]
    constructor() {
        this.pings = []
    }

    ping(t: number): number {
        this.pings.push(t)
        let count = 0
        for (let i = this.pings.length - 1; i >= 0; i--) {
            if (this.pings[i] >= t - 3000) {
                count++
            } else {
                break
            }
        }
        // const count = this.pings.filter((ping) => {
        //     if (ping >= t - 3000) {
        //         return true
        //     }
        //     return false
        // })
        return count
    }
}
