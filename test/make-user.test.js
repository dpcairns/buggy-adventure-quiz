import makeUser from '../home/make-user.js';
const test = QUnit.test;

QUnit.module('make user');

test('create user object from form data', (assert) => {
    // arrange
    const formData = new FormData();
    formData.set('name', 'Dink');
    formData.set('race', 'techie');

    const expected = {
        name: 'Dink',
        race: 'techie',
        health: 35,
        cred: 0,
        completed: {}
    };

    // act
    const user = makeUser(formData);

    // assert
    assert.deepEqual(user, expected);
});
