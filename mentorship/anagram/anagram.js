var a = "taac"
var b = "taca"

var c = "cat"
var d = "cata"

var e = "eat"
var f = "tac"


function isAnagram(x, y) {
    let xMap = createCountMap(x)
    let yMap = createCountMap(y)

    if (xMap.size != yMap.size) {
        return false
    }

    // ------------ DOUBT ------------
    // xMap.forEach((value, key) => {
    //     console.log(key, value, yMap.get(key))
    //     console.log(yMap.get(key) !== value)
    //     if (yMap.get(key) !== value) {
    //         console.log("expert")
    //         return false
    //     }
    // });

    for (const key of xMap.keys()) {
        if (xMap.get(key) != yMap.get(key)) {
            return false
        }
    }

    return true
}


function createCountMap(string) {
    countMap = new Map()
    for (let i=0; i<string.length; i++) {
        let j = countMap.get(string[i])
        if (j) {
            countMap.set(string[i], j + 1)
        } else {
            countMap.set(string[i], 1)
        }
    }

    return countMap
}


// isAnagram(a,b)