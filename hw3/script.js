const randomArr = ['hello', 23, null, false, undefined];

const filterBy = (arr, typ) => arr.filter(item => 
    typ === "null"
      ? !(!item && typeof item === "object")
      : typeof item !== typ
  );
    

  let filterByArr = filterBy(randomArr, 'null'); 

console.log(filterByArr);