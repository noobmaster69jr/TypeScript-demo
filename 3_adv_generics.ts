function fun<T>(array : [string, T][]){
  
  const obj : {
    [index: string] : T
  } = {}

  array.forEach(([key, value]) => {
    obj[key] = value
  })

  return obj;
}

const arr : [string, number | boolean][] = [ 
  ["key1", 1],
  ["key2", 2],
  ["key3", true]
]


const result = fun(arr); 


document.querySelector<HTMLInputElement>('.input-class')
