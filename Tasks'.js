function getAdjacentSequences(nums) {
    let sequences = [];
    let currentSequence = [];

    for (let i = 0; i < nums.length; i++) {
        if (currentSequence.length === 0 || nums[i] === currentSequence[0]) {
            currentSequence.push(nums[i]);
        } else {
            sequences.push(currentSequence);
            currentSequence = [nums[i]];
        }
    }

    if (currentSequence.length > 0) {
        sequences.push(currentSequence);
    }

    return sequences
}

console.log(getAdjacentSequences([1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0]))
// output will be [[1,1],[0],[1,1],[0],[1,1,1,1,1],[0,0],[1],[0]]

function miniMaxSum(arr) {
    // Write your code here
    let newArr = arr.sort();
    let min=0;
    let max=0;
    for(let i=0;i<newArr.length-1;i++){
        min+=newArr[i]
    };
    for(let i=newArr.length-1;i>=1;i--){
        max+=newArr[i]
    }
    console.log(min);
    console.log(max);
}

console.log(miniMaxSum([1,2,3,4,5]))
//minimum and maximum Sum of 4 integers of array output will be
// 1+2+3+4 = 10 and 2+3+4+5 = 14


function timeConversion(s) {
    // Write your code here
    let pm = s.endsWith('PM')
    let result = 0;
    if(pm){
        let ab = (parseInt(s.substring(0,2))+12).toString();
        result = s.replace(s.substring(0,2),ab).substring(0,8);
        if(result.substring(0,2)==='24'){
            let ad = '12'
            result = result.replace(result.substring(0,2),ad)
        }
    } else {
        result = s.substring(0,8);
        if(result.substring(0,2)==='12'){
            let ad = '00'
            result = result.replace(result.substring(0,2),ad)
        }
    }
    return result;
}

console.log(timeConversion('12:45:54PM'))
//output will be 12:45:54
console.log(timeConversion('11:45:54PM'))
//output will be 23:45:54
console.log(timeConversion('12:45:54AM'))
//output will be 00:45:54

let array1 = [10,5,20,20,4,5,2,25,1];
let array2 = [10,6,20,20,8,5,10,25,1];
let min=array2[0];
let max=array2[0];
let c1=0;
let c2=0;

function breakingRecords(arr) {
    // Write your code here
    for(let i=1;i<arr.length;i++){
        debugger;
        if(arr[i]>max)
        {
            c1++;
            max=arr[i];
        }
        if(arr[i]<min)
        {
            c2++;
            min=arr[i];
        }
    }
    return [c1,c2]
}

console.log(breakingRecords(array2));
// if scores are [10,5,20,20,4,5,2,25,1] output will be 2 and 4 (min record and maximum)



function processData(input) {
    //Enter your code here
    let firstOp=input.substring(0,1);
    let secondOp=input.substring(2,3);
    let result='';
    if(firstOp==='S'){
        if(secondOp==='M'){
            result = input.substring(4,input.length-2)
                .replace(/([a-z0-9])([A-Z])/g, '$1 $2');
        } else if (secondOp==='C' || secondOp==='V'){
            result = input.substring(4).replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase();
        }
    } else {
        if (secondOp === 'M'){
            result = input.substring(4).replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            }).replace(/\s+/g, '');
            let len =result.length;
            result = result + '()'
        } else if (secondOp === 'C'){
            result = input.substring(4).replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
                return word.toUpperCase();
            }).replace(/\s+/g, '');
        }else {
            result = input.substring(4).replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            }).replace(/\s+/g, '');
        }
    }
    return result;
}
console.log(processData('S;M;LargeSoftwareBook()'))

console.log(processData('S;C;LargeSoftwareBook'))

console.log(processData('S;V;pictureFrame'));

console.log(processData('C;M;white sheet of paper'))

console.log(processData('C;C;coffee machine'))

console.log(processData('C;V;mobile phone'))
/*Sample Input
S;M;plasticCup() +
C;V;mobile phone
C;C;coffee machine +
S;C;LargeSoftwareBook +
C;M;white sheet of paper +
S;V;pictureFrame +

Sample Output
plastic cup
mobilePhone
CoffeeMachine
large software book
whiteSheetOfPaper()
picture frame
*/
