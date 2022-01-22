const x = 1
let y = 5
console.log(x, y)
y += 10
console.log(x, y)
y = 'sometext'
console.log(x, y)


const t = [1, -1, 3]
t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value => {
    console.log(value)
})

const t2 = t.concat(5)
t2.forEach(value => {
    console.log(value)
})

const a = [1, 2, 3]
const m1 = a.map(value => value * 2)
console.log(m1)

const m2 = a.map(value => '<li>' + value + '</li>')

console.log(m2)

const b = [1, 2, 3, 4, 5]
const [first, second, ...rest] = b
console.log(first, second)
console.log(rest)