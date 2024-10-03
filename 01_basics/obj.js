//through constructor method =====>  Object.create =====>   called singleton

// object literals  ====>  const obj = {}


const arr = [
    {
        id: 1,
        email: "gc@g.com"
    },
    {
        id: 2,
        email: "js@g.com"
    },
    {
        id: 3,
        email: "kjjk@g.com"
    }
]

console.log(Object.keys(arr[1]))
console.log(Object.values(arr[1]))
console.log(Object.entries(arr[1]))

console.log(arr[1].hasOwnProperty("id"))