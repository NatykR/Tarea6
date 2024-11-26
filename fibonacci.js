//Fibonacci: cada numero es la suma de los dos anteriores.
// 0, 1, 1, 2, 3, 5.....

function fibonacci(limit){
    const fib = [0, 1];
    for(let i = 2; i < limit; i++){
        fib.push(fib[i - 1] + fib[i - 2]) ; 
    }
    for(let i = 0; i < limit; i++){
        if(fib[i] %2 === 0){
            console.log("fibo posicion " + i + " es " + fib[i] +  " es par "  )
          }else{
            console.log("fibo posicion " + i + " es " + fib[i] +  " es impar "  )
          }
    }
    return null;
}
fibonacci(18)