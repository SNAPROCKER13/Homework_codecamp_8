function draw(n){
    let star = '';
    for(let i = 1 ; i <= n; i++)
    {
        for(let j = 1 ; j<=n;j++)
        {
            star = star + i;  
        }
        star = star + '\n';
    }
    
    console.log(star);

}

draw(3);