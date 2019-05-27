var a = [1, 2, 3, 4, 5, 6, 7];
var n = a.length;
var middle = n / 2;

console.log(middle);

for (var i = 0; i < n / 2; i++) {
    var startIndex = i;
    var endIndex = n - 1 - i;
    var temp = a[startIndex];
    a[startIndex] = a[endIndex];
    a[endIndex] = temp;


}

for (var i = 0; i < n; i++) {
    console.log(a[i]);
}