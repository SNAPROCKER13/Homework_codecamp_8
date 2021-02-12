function draw(n) {

    let star = '';

    for (let i = 1; i <= n; i++) {
        
        for (let j = n-i; j >= 1; j--) {
            star = star + '-';
         }
        for (let j = 1; j <= 2*i-1; j++) {

            star = star + '*';
        }

        for (let j = n-i; j >= 1; j--) {
            star = star + '-';
         }
         
        star = star + '\n';
        
    }

// =================================================

    console.log(star);

}

draw(4);