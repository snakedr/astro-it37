// patch.js
const path = require('path');
path.posix = path;
console.log('Path patching enabled. Running build...');