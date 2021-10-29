const Rx = require('rxjs');
const RxOp = require('rxjs/operators');

const obs = new Rx.Observable((s) => setTimeout(() => s.next(42), 2000));
const obs2 = new Rx.Observable((s) => setTimeout(() => s.next(43), 1000));
const obs3 = new Rx.Observable((s) => setTimeout(() => s.next(44), 2000));

const allObs = RxOp.zip(obs, obs2, obs3);

// obs.subscribe((d) => console.log(d));

allObs.subscribe((d) => console.log('zip', d));
