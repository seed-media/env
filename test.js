var Env = require('./src/index')

env = new Env('../.env')

console.log(env.get('BENTEST2'))
console.log(env.get('BENTESTVAR'))
console.log(env.get('BERNIE'))
console.log(env.get('BENTRUTHY'))
console.log(env.get('BENFALSEY'))
