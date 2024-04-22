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
