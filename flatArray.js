function flatArray(arr, store) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object") {
            flatArray(arr[i], store)
        } else {
            store.push(arr[i])
        }
    }
    return store
}

console.log(flatArray([[[4], 5], [[2, [3, [4]]]]], []));