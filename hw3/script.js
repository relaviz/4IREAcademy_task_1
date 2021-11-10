const randomArr = ['hello', 23, null, false, undefined];

const filterBy = (arr, typ) => arr.filter(item => typeof(item) !== typ)

console.log(filterBy(randomArr, 'object'))