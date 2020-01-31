import createChoice from '../quest/create-choice.js';
const test = QUnit.test;

QUnit.module('create choice');

test('creates correct html', (assert) => {
    // arrange
    const choice = {
        id: 'bathroom',
        description: 'Excuse yourself to the bathroom and look up wiki articles'
    };

    const expected = '<label class="choice">'
        + '<input type="radio" name="choice" required="" value="bathroom">'
        + '<span>Excuse yourself to the bathroom and look up wiki articles</span>'
        + '</label>';

    // act
    const dom = createChoice(choice);

    // assert
    assert.equal(dom.outerHTML, expected);
});

