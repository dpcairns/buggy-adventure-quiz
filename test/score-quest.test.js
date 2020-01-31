import scoreQuest from '../quest/score-quest.js';
const test = QUnit.test;

QUnit.module('score quest');

test('creates correct html', (assert) => {
    // arrange
    const questId = 'coffee';
    
    const choice = {
        health: -10,
        cred: 20
    };

    const user = {
        health: 30,
        cred: 0,
        completed: {}
    };

    const expected = {
        health: 20,
        cred: 20,
        completed: {
            coffee: true
        }
    };

    // act
    scoreQuest(choice, questId, user);

    // assert
    assert.deepEqual(user, expected);
});