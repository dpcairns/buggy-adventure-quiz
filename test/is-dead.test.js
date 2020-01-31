import isDead from '../common/is-dead.js';
const test = QUnit.test;

QUnit.module('user is dead');

test('true', function(assert) {
    const user = {
        health: 0
    };

    const dead = isDead(user);

    assert.equal(dead, true);
});

test('false', function(assert) {
    const user = {
        health: 10
    };

    const dead = isDead(user);

    assert.equal(dead, false);
});