import React from 'react';
import { render, screen, userEvent, waitFor } from '@testing-library/react';
import App from './App';

test('target dropdown', async ()=>{
    render(<App/>);

    await waitFor(()=>{
        const placeholder = screen.queryAllByPlaceholderText('Select an option');
        console.log(placeholder);
    });
    
});

// basic test format: test('descriptoin of test', () => {
    // Arrange: render the component and find the elements you need to work with
    // Act: do stuff --- fill out forms, click buttons, etc.
    // Assert: make sure that the component behaved in the way you'd expect it to.
//  })

test('renders App without errors', ()=> {
    //Arange
    render(<App/> );
})

test('renders the App anchor tag', () => {
    //Arrange
    render(<App/>);
    // the regular exporesstion /text/i allows any case variation in text
    const nav = screen.getByText(/LamBda IntegrAtion TesTing ChAllEnge/i)// Implicit Assertion 

    //Act (no act step needed)
    
    //Assert
    expect(nav).toBeInTheDocument();
    expect(nav).toBeVisible();
    expect(nav).toHaveTextContent('Lambda Integration Testing Challenge')

    //Negative Assertions (don't need all of these just come extra examples):

    expect(nav).not.toBeFalsy();
    expect(nav).not.toHaveTextContent('I have a bird named CAKOO')
})