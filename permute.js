function permute(strng) {
    let len = strng.length; 
    if (len === 1) return strng;
    let pick = "";
    let permutations = [];
    for (let i = 0; i < len; i++) {
        pick = strng[i];
        var remainder = strng.slice(0, i) + strng.slice(i + 1, len);
        for (var perm of permute(remainder)) {
            permutations.push(pick + perm);
        }
    }return permutations;
}

const strng = "abcdef";
console.log(JSON.stringify(permute(strng)));