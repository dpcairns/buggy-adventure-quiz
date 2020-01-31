import createQuestLink from '../map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('create quest link');

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

    const expected = '<a class="quest" href="../quest/?id=coffee" style="top: 20%; left: 44%;">A Coffee Shop in NE</a>';

    // act
    const dom = createQuestLink(quest);

    // assert
    assert.equal(dom.outerHTML, expected);
});

