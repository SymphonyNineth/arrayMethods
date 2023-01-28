import workers from './const/workers.js';

const foundWorkerIndex = workers.findIndex(worker => {
  return worker.name === 'Ana';
});
console.log(foundWorkerIndex);
