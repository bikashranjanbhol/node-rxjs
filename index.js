const Rx = require('rxjs');
const RxOp = require('rxjs/operators');

const validator = require('validator');

const obs = new Rx.Observable((s) => setTimeout(() => s.next(42), 2000));
const obs2 = new Rx.Observable((s) => setTimeout(() => s.next(43), 1000));
const obs3 = new Rx.Observable((s) => setTimeout(() => s.next(44), 2000));

const allObs = Rx.zip([obs, obs2, obs3]);

// obs.subscribe((d) => console.log(d));

// allObs.subscribe((d) => console.log('array', d));

console.log('Valid Email', validator.isEmail('bikash@gmail.com'));
