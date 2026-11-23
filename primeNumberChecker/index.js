function isPrime(num) {
    let counter = 0;

    for (let index = 1; index <= num; index++) {
        if (num % index === 0){
            counter ++;
        }
        
    }
    return (counter === 2);
    
}

module.exports = {isPrime}
