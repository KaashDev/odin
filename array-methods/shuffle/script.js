let arr = [2,1,3,6,8,0];

shuffle(arr);
console.log(arr);

function shuffle(arr){
    for(let i = 0; i < arr.length; i++){

        let j = Math.floor(Math.random() * arr.length);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}