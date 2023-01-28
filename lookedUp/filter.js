import workers from '../const/workers.js';

const x = workers.filter(worker => worker.salary.toString().endsWith('00'));

console.log(x);
