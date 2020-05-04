process.env.UV_THREADPOOL_SIZE = 5

const crypto = require('crypto')

console.time('1-pbkdf2')
console.time('2-pbkdf2')
console.time('3-pbkdf2')
console.time('4-pbkdf2')
console.time('5-pbkdf2')

crypto.pbkdf2('a', 'b',100000, 512, 'sha512', () => {

    console.timeEnd('1-pbkdf2')
})

crypto.pbkdf2('a', 'b',100000, 512, 'sha512', () => {

    console.timeEnd('2-pbkdf2')
})

crypto.pbkdf2('a', 'b',100000, 512, 'sha512', () => {

    console.timeEnd('3-pbkdf2')
})

crypto.pbkdf2('a', 'b',100000, 512, 'sha512', () => {

    console.timeEnd('4-pbkdf2')
})

crypto.pbkdf2('a', 'b',100000, 512, 'sha512', () => {

    console.timeEnd('5-pbkdf2')
})