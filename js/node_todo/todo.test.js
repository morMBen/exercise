const ex = require('./index');
const addItem = ex.AddItem;
test('the add item function', () => {
    ex.AddItem(1, 'do stuff');
    expect(ex.toDo[0]).toEqual(
        {
            id: 1,
            taskName: 'do stuff',
            isCompleted: false,
        }
    )
});