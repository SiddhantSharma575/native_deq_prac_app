import "react-native"
import React from "react"
import SplashScreen from "../screens/SplashScreen"
import {render} from "@testing-library/react-native"

describe("Splash Screen Test", () => {
    it("Renders Correctly", ()=> {
        render(<SplashScreen />)
    });
    it("Check Image Renders Correctly", () => {
        const {getByTestId} = render(<SplashScreen />);
        const ImageElement = getByTestId("logoImg")
        expect(ImageElement).toBeDefined()
    })

})


