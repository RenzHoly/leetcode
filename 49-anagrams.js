var map = {
    'a': 2,
    'b': 3,
    'c': 5,
    'd': 7,
    'e': 11,
    'f': 13,
    'g': 17,
    'h': 19,
    'i': 23,
    'j': 29,
    'k': 31,
    'l': 37,
    'm': 41,
    'n': 43,
    'o': 47,
    'p': 53,
    'q': 59,
    'r': 61,
    's': 67,
    't': 71,
    'u': 73,
    'v': 79,
    'w': 83,
    'x': 89,
    'y': 97,
    'z': 101
};

var hash = function (str) {
    var sum = 1;
    for (var i = 0; i < str.length; i++) {
        sum *= map[str[i]];
    }
    return sum;
};

var groupAnagrams = function (strs) {
    var result = {};
    for (var i in strs) {
        var h = hash(strs[i]);
        result[h] = result[h] || [];
        result[h].push(strs[i]);
    }
    var results = [];
    for (var key in result) {
        results.push(result[key].sort());
    }
    return results;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));