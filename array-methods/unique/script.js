let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));

function unique(arr){
    let filtered = [];

    for(let str of arr){
        if(!(filtered.includes(str))){
            filtered.push(str);
        }
    }
    return filtered;
}