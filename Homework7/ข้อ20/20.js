function draw(n) {
    let star = '';
    let num = 0;

    for (let i = 1; i <= n-1; i++) {
        
        for (let j = n; j >= i+1; j--) {
            star = star + '-';
        }
        for (let j = 1; j <= i; j++) {
            num++;
            star = star + num;
        }
        star = star + '\n';
        
    }

// ================================================

    for (let i = 1; i <= n; i++) {
        
        for (let j = 1; j <= i-1; j++) {
            star = star + '-';
        }
        for (let j = n-i+1; j >= 1; j--) {
            num++;
            star = star + num;
        }
        star = star + '\n';
    }

// =================================================

    console.log(star);

}

draw(4);