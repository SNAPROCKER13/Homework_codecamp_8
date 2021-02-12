function draw(n){
    let star = '';

    for(let i = 2 ; i <= n+n; i++)
    {
        if(i % 2  === 0)
        {
            star = star + i;  
        }
        star = star + '\n';
    }
    
    console.log(star);

}

draw(3);