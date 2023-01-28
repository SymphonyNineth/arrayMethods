import workers from '../const/workers.js';
console.log(workers);

const foundWorkerIndex = workers.findIndex(worker => {
  return worker.name === 'Ana';
});
workers[foundWorkerIndex].name = 'aaaa';
const newWorker = {
  name: 'Azat',
  department: 'management',
  age: 26,
  salary: 2000,
};
workers.splice(foundWorkerIndex, 1, newWorker, newWorker, newWorker);
console.log(workers);
