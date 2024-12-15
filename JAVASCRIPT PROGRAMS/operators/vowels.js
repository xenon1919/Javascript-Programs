function countVowels(str) {
    let count=0
    for( const i of str) {
        console.log(i)
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u") {
            count++
        }
    }
    console.log(count)
}
countVowels('Rishi')