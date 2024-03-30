// Code your solutions in this fil
function  writeCards(name,event){
    let value = [];
    for(let i = 0;i<name.length;i++)
    {
    
        value.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return value
}
console.log ("Guadalupe","Ollie","Aki")
function countDown(count) {
    while (count >=0) { 
        console.log(count);
        count-=1
    }
}

count(10);
