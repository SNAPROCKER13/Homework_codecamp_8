function draw(n){
    let star ='';
    let num  = n*n;
    for(let i = 1 ; i <= n; i++)
    {
        for(let j = n ; j >= 1; j--)
        {
            
            star = star + num; 
            num--;
             
        }
        star = star + '\n';
    }
    
    console.log(star);

}

draw(2);