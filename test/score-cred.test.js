import scoreCred from '../results/score-cred.js';
const test = QUnit.test;

QUnit.module('score cred');

test('poor', function(assert) {
    const user = { cred: 0 };
    const score = scoreCred(user.cred);
    assert.equal(score, 'poor');
});

test('modest', function(assert) {
    const user = { cred: 49 };
    const score = scoreCred(user.cred);
    assert.equal(score, 'modest');
});

test('rich', function(assert) {
    const user = { cred: 50 };
    const score = scoreCred(user.cred);
    assert.equal(score, 'rich');
});