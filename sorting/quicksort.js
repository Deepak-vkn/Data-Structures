function partition(a, lb, up) {
    let pivot = a[lb];
    let start = lb;
    let end = up;
    while (start < end) {
        while (a[start] <= pivot) {
            start++;
        }
        while (a[end] > pivot) {
            end--;
        }
        if (start < end) {
            let temp = a[start];
            a[start] = a[end];
            a[end] = temp;
        }
    }
    let temp = a[lb];
    a[lb] = a[end];
    a[end] = temp;
    return end;
}

function quicksort(a, lb, up) {
    if (lb < up) {
        let loc = partition(a, lb, up);
        quicksort(a, lb, loc - 1);
        quicksort(a, loc + 1, up);
    }
}

let a = [5, 4, 3, 2, 9, 7, 1, 0];
quicksort(a, 0, a.length - 1);
console.log(a);
