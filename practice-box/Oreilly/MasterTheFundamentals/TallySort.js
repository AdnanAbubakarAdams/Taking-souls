const randomArray = (max, size) => {
    let results = new Array(size);

    for(let i = 0; i < size; i++) {
        let random = Math.floor(max * Math.random());
        results[i] = random;
    }

    return results;
}

console.log(randomArray(100, 10))