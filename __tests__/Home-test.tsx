import React from 'react';
import "react-native";
import renderer from "react-test-renderer"
import Home from '../testingComponents/Home';

it("Home Snapshot", () => {
    const snap =renderer.create(<Home />).toJSON()
    expect(snap).toMatchSnapshot()
})

// it("functions and state test care", () => {
//     let HomeData : renderer.ReactTestInstance | null = renderer.create(<Home />).getInstance();
//     // if(HomeData !== null)expect(HomeData.props.change(2)).toEqual(20)
//     if(HomeData !== null) expect(HomeData.state.data).toEqual(0) 
// })