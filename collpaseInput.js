function collpaseInput(str) {
    let obj = {}
    let i = 0;
    while (i < str.length) {
        if (obj[str.charAt(i)]) {
            obj[str.charAt(i)] = obj[str.charAt(i)] + 1;
        } else {
            obj[str.charAt(i)] = 1;
        }
        i++;
    }
    console.log(obj);
}

collpaseInput('GGGggrrrt');