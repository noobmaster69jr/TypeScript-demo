type pairOfNumbers = [any, any];
type pairOfNumberAndString = [number, string];

function linearSearch<T, R>(array: T[], x: T, y: R): [number, T] {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == x) return [i, array[i]];
  }
  console.log(y);
  return [-1, x];
}

// function linearSearchForString(array : string[], x : string) : pairOfNumberAndString {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] == x) return [i, array[i]];
//     }
//     return [-1, ""];
// }

const array: number[] = [1, 2, 5, 1, 2, 3, 54, 0, 6, -2, 3];
console.log(linearSearch<number, string>(array, 12, 'abc'));

const stringArray: string[] = ['abc', 'def', 'ghi', 'jk'];
console.log(linearSearch<string, number>(stringArray, 'jk', -2));
