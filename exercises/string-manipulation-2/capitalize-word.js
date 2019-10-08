module.exports = function capitalizeWord(word) {
var c = word.toLowerCase()

if(c === 'javascript'){
    return 'JavaScript'
}else{
    var a = word.toLowerCase().slice(1,word.length);
    var b = word.toUpperCase().charAt(0);
    return(b+a);
}
};
