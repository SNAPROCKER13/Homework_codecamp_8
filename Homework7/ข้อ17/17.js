function draw(n) {
    let star = '';
    let num = 1;

    for (let i = 1; i <= n; i++) {
        
        for (let j = n; j >= i+1; j--) {
            star = star + '-';
        }
        for (let j = 1; j <= i; j++) {
            star = star + '*';
        }
        star = star + '\n';
        
        num++;
    }

// =================================================

    console.log(star);

}

draw(4);