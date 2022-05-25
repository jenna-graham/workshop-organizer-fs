// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderWorkshop } from '../render-utils.js';
const test = QUnit.test;

test('renderWorkshop', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="workshop"><img src="../assets/undefined.jpg"><h2>Wheel House | Pottery 101</h2></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderWorkshop({
        id: 1,
        img: '../assets/pottery.jpg',
        name: 'Wheel House | Pottery 101', 
          
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
