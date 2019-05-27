var a = [10, 20, 100, 60, 5, 90];

//sorting Ascending
a.sort(function (a, b) {

        return a - b
    }

);

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}


//sorting Descending
var x = a;
x.sort(function (a, b) {

        return b - a
    }

);

for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}