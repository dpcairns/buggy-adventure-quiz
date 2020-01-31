import createCompletedQuest from '../map/create-completed-quest.js';
const test = QUnit.test;

QUnit.module('create completed quest');

test('creates correct html', (assert) => {
    // arrange
    const quest = {
        id: 'coffee',
        title: 'A Coffee Shop in NE',
        map: {
            top: '20%',
            left: '44%'
        }
    };

    const expected = '<span class="quest completed" style="top: 20%; left: 44%;">A Coffee Shop in NE</span>';

    // act
    const dom = createCompletedQuest(quest);

    // assert
    assert.equal(dom.outerHTML, expected);
});

