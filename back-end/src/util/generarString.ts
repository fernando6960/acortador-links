export function generateRandomString(n:number):string{
    let i:number = 0
    let string:string = ""
    const excludeCharacters:string = "@ `*!\"<,\^$;>-\[\]\\=:'\(\)#?./_%+"
    while(i < n){
        const char:string = String.fromCharCode(Math.floor(Math.random()*(122-32))+33)
        if(excludeCharacters.split('').includes(char))
            continue
        else{
            i++
            string += char
        }
    }
    return string
}
