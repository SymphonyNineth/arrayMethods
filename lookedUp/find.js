import workers from '../const/workers.js';

const foundWorker = workers.find(worker => {
  return worker.department === 'management';
});
console.log(foundWorker);
