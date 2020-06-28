let result;
let obj = { artivleTtitle: 'some' };
let _title = 'untitled';

result += `<h1>${title()}</h1>`;
setTitle(obj['artivleTtitle']);

function title() { return _title };
function setTitle(arg) {_title = arg};