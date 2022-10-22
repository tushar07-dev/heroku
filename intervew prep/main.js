function send(){
    let input = document.getElementById('input-name').value;  
    console.log('Inout' , input);
}

let arr = [2,6,4,6,2,6,5];
let arr2 = [];
//2 2 4 5 6 6
arr = arr.sort((a,b) => a-b);

for(let i=0; i<arr.length-1; i++){
    if(arr[i] != arr[i+1]){
        arr2.push(arr[i]);
    }
}
arr2.push(arr[arr.length-1]);


console.log(arr2);