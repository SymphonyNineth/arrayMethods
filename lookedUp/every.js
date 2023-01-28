import workers from '../const/workers.js';

const allEmployeesAreAdults = workers.every(worker => worker.age >= 18);
console.log(allEmployeesAreAdults);
