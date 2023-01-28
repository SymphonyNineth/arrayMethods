// import names from './const/names.js';
import numbers from '../const/numbers.js';
import workers from '../const/workers.js';

const sum = numbers.reduce((prev, curr) => prev + curr, 0);
const salarySum =
  workers.reduce((total, currentWorker) => total + currentWorker.salary, 0) /
  workers.length;
console.log(salarySum);
