function draw(n) {
    let star = '';

    for (let i = 1; i <= n-1; i++) {
        
        for (let j = n; j >= i+1; j--) {
            star = star + '-';
        }
        for (let j = 1; j <= i; j++) {
            star = star + '*';
        }
        star = star + '\n';
        
    }

// ================================================

    for (let i = 1; i <= n; i++) {
        
        for (let j = 1; j <= i-1; j++) {
            star = star + '-';
        }
        for (let j = n-i+1; j >= 1; j--) {
            star = star + '*';
        }
        star = star + '\n';
    }

// =================================================

    console.log(star);

}

draw(4);