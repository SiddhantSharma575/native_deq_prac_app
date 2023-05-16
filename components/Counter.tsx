import { Component, ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
interface MyCountType{
    count : number
}

class Counter extends Component<{}, MyCountType> {
    constructor(props : any){
        super(props);
        this.state = {
            count : 0 
        }
    }

    incrementCount = () => {
        this.setState({count : this.state.count + 1})
    }
    decrementCount = () => {
        this.setState({count : this.state.count - 1})
    }

    render() {
        return <View>
            <Text>{this.state.count}</Text>
            <Pressable onPress={this.incrementCount}>
                <Text>Increment</Text>
            </Pressable>
            <Pressable onPress={this.decrementCount}>
                <Text>Decrement</Text>
            </Pressable>
        </View>
    }
}

export default Counter;