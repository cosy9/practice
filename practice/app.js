let a =[1,2,3,4,5,6,7,8]

const mapped = a.map((num)=> num*2).sort((a,b)=>(b-a));

const small = a.reduce((num,total)=> total+num,0);

console.log(mapped);
console.log(small);

