import scoreHealth from '../results/score-health.js';
const test = QUnit.test;

QUnit.module('score health');

test('dead', function(assert) {
    const user = { health: 0 };
    const score = scoreHealth(user.health);
    assert.equal(score, 'dead');
});

test('frail', function(assert) {
    const user = { health: 34 };
    const score = scoreHealth(user.health);
    assert.equal(score, 'frail');
});

test('healthy', function(assert) {
    const user = { health: 35 };
    const score = scoreHealth(user.health);
    assert.equal(score, 'healthy');
});