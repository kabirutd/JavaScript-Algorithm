var a = [1, 2, 3, 4, 5, 6, 7, 800];
var n = a.length;

var b = [];
for (var i = n - 1; i >= 0; i--) {
    b.push(a[i]);
}

for (var i = 0; i < n; i++) {
    console.log(b[i]);
}