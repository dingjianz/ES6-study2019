let a = 10;
let fn = () => {
  console.log('我是箭头函数')
}
console.log(a)

let key = 'lalala'
let obj = {
  [key]: 55555
}
console.log(obj)


const arr = [1,22,3,4,66,55,41,74,25]
console.log(arr.sort((n1,n2) => { // 排序
  return n2 -n1;
}))

// rest参数  ...argus 必须放在形参的最后
const show = (a,b,...argus) => {
  console.log('----------------------------')
  console.log(a)
  console.log(b)
  console.log(argus)
}
show(1,2,3,4,5,6)