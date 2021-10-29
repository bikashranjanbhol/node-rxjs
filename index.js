const Rx = require('rxjs');
const RxOp = require('rxjs/operators');

const obs = new Rx.Observable((s) => setTimeout(() => s.next(42), 2000));

obs.subscribe((d) => console.log(d));
