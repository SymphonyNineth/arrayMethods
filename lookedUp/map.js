// import workers from './const/workers.js';
import names from '../const/names.js';

// const workersToDisplay = workers.map(worker => ({
//   ...worker,
//   salary: worker.salary + '$',
// }));

const capitalizedNames = names.map(
  name => name[0].toUpperCase() + name.slice(1).toLocaleLowerCase()
);

console.log(capitalizedNames);
