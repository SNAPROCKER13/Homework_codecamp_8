function draw(n){
    let star = '';

    for(let i = 1 ; i <= n; i++)
    {
        for(let j = n; j >= i;j--)
        {
            star = star + '*';
        } 
       

        for(let j = n-i+2; j <= n; j++)
        {
            star = star + '-';
        }
 
        star = star + '\n';
        
    }  
    
    console.log(star);
}

draw(2);