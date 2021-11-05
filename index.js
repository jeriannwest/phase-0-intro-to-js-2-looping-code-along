
function writeCards(names, event) {
    let thankYouList = [];
    for (let x = 0; x < names.length; x++) {
    thankYouList.push(`Thank you, ${names[x]}, for the wonderful surprise gift!`);
    }
    return thankYouList;
}
function countDown(interger){
    while(interger >= 0){
    console.log (interger--)
    }
}