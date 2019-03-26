import {Selector} from 'testcafe'; // first import testcafe selectors

fixture`Getting Started`// declare the fixture
    .page`localhost:3000/`;  // specify the start page


const playGame = async (t: any): Promise<void> => {
    if (await Selector('button').exists && !(await Selector('button#newGameButton').exists)) {
        await t
            .click(Selector('button'))
            .expect(Selector('button').exists).ok();
        return await playGame(t);
    }
};

//then create a test and place your code there
test('Inital rendering', async t => {
    await t
        .expect(Selector('h1').innerText).eql('NIM-Spiel');
    await t
        .expect(Selector('button').exists).ok()
        .expect(Selector('button').count).eql(3)
        .click(Selector('button'));


});

test('Test full game', async t => {
    await t
        .expect(Selector('h1').innerText).eql('NIM-Spiel')
        .expect(Selector('button').exists).ok();
    await playGame(t);


});