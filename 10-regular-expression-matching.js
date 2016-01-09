var isMatch = function (s, p) {
    var match = s.match(p);
    return match && match[0].length === s.length ? true : false;
};