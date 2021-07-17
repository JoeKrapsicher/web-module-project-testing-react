import React from 'react';
import { rerender, userEvent, render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "",
    runtime: 1
}

const testEpisodeWithoutImage = {
    id:1,
    name: "",
    image: "",
    season: 1,
    number: 1,
    summary: "",
    runtime: 1
}

test("renders without error", () => {
    //Arange: render the component and get access to the form elemnts from DOM
    render(<Episode />)
    
    // const text = screen.findByText(/episode 1/i);
    // const button = screen.getByRole('button', {name: /Press to Get Show Data/i})
    // const dropDown = screen.findAllByRole('select', {name:/Season 1/i})
    // //Act
    // userEvent.click(button)
    // userEvent.click(dropDown)


    //Assert
    // expect(text).toBeInTheDocument;

});

test("renders the summury test passed as prop", ()=>{
    render(<Episode summary={'LONG LONG SUMMARAY'}/>)

    const text = screen.findByText(/long long summaray/i);

    expect(text).toBeTruthy(/Long lOng SuMmaray/i)


});

test("renders default image when image is not defined", ()=>{
    render(<Episode image={''}/>)

    const img = screen.findByText('stranger');

    expect(img).toBeVisible
})

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.