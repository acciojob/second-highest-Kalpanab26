function secondHighest(arr) {

    if (arr.length < 2) {
        return -Infinity;
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > first) {

            second = first;
            first = arr[i];

        } else if (arr[i] !== first && arr[i] > second) {

            second = arr[i];
        }
    }

    return second;
}