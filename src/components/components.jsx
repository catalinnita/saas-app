import path from 'path';
import glob from 'glob';

const components = {};
const files = glob.sync('./**/**/*.jsx');

files.forEach((file) => {
  const basename = path.basename(file).replace('.jsx', '');
  const Component = require(file);
  components[basename] = Component;
  
});
console.log('==================================================', components);
export default components;
