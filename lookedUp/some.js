import workers from './const/workers.js';

const someEmployeesPaidWell = workers.some(worker => worker.salary >= 2000);
console.log(someEmployeesPaidWell);
