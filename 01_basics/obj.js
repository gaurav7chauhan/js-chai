//through constructor method =====>  Object.create =====>   called singleton

// object literals  ====>  const obj = {}



const course = {
    courseName: "javascript",
    price: 999,
    instructor: "hitesh sir"
}

console.log(course.courseName)

const {courseName: topic, price, instructor} = course

console.log(topic) 
980