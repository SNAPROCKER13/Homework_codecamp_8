function draw(n){
    let star = '';
    for(let i = n ; i >= 1; i--)
    {
        for(let j = n ; j>=1;j--)
        {
            star = star + i;  
        }
        star = star + '\n';
    }
    
    console.log(star);

}

draw(3);