let n = Number(prompt());

let first = -Infinity;
let second = -Infinity;

for(let i = 0; i < n; i++) {

    let num = Number(prompt());

    if(num > first) {

        second = first;
        first = num;

    } else if(num > second && num < first) {

        second = num;
    }
}

alert(second);