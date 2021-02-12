function draw(n) {
    let star = '';
    let num = 0;
    let i;
    let j;

    for (i = 1; i <= n; i++) { 
        for (j = 1; j <= n; j++) {

            num = num + i;

            star = star + num;
             
        }
        star = star + '\n';
        
        num = 0;
    }

    console.log(star);

}

draw(2);