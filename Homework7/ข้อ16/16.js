function draw(n) {
    let star = '';
    let num = 1;

    for (let i = n; i >= 1; i--) {
        for (let j = i; j <= n; j++) {
            star = star + num;
        }
        for (let j = 1; j <= i-1; j++) {
            star = star + '-';
        }
        star = star + '\n';
        
        num++;
    }

// =================================================

    num = n-1;

    for (let i = 1; i <= n-1; i++) {
        for (let j = n-1; j >= i; j--) {
            star = star + num;
        }
        for (let j = 1; j <= i; j++) {
            star = star + '-';
        }
        star = star + '\n';

        num--;
    }

    console.log(star);

}

draw(4);