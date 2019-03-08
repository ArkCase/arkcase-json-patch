const acmPatchApply = require('./src/apply.js');
const clone = require('./src/json8/clone');

module.exports = {
    apply: acmPatchApply,
    clone: clone
};