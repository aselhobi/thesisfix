// index.js in backend-onSale-main

console.log("Starting combined backend servers...");

// Require jobs.js inside backend-onSale-main folder
import('./backend-onSale-main/jobs.js')
  .then(() => { 
    console.log('Jobs module loaded');
  })
  .catch(err => {
    console.error('Failed to load jobs module:', err);
  });
// Require server.js inside backend-r-main folder
require('./backend-r-main/server.js');


