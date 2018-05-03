var Finalize = require('./index.js');

var ok = 0;

var req = new Finalize(function() {
    process.exit((ok == 2) ? 0 : -1);
});

var hook1 = req.queue();
var hook2 = req.queue();

function op1(cb) {
    ok++;
    cb();
}

function op2(cb) {
    ok++;
    cb();
}

op1(hook1);
op2(hook2);

req.exec();