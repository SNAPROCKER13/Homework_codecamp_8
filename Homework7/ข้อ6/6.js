function draw(n){
    let star = '';
    let num = 0;
    for(let i = 1 ; i <= n; i++)
    {
        for(let j = 1 ; j<=n;j++)
        {   num++;
            star = star + num;  
        }
        star = star + '\n';
    }
    
    console.log(star);

}

draw(3);