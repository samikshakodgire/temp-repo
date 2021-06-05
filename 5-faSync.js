const {readFileSync,writeFileSync}= require('fs');

const first=readFileSync('./contents/first.txt','utf-8')
const second=readFileSync('./contents/second.txt','utf-8')

console.log(first,"\n",second)

writeFileSync('./contents/result-sync.txt',
`Here is the result : ${first},${second}\n `,
{flag:'a'})