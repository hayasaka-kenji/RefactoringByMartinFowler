let result;
let obj = { artivleTtitle: 'some' };
let tpHd = 'untitled';

result += `<h1>${title()}</h1>`;
setTitle(obj['artivleTtitle']);

function title() { return tpHd };
function setTitle(arg) {tpHd = arg};