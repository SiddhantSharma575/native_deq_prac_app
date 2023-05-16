import { Component, ReactNode } from "react";
import {Text, View} from "react-native"
interface UsersType {
    name : string;
    id : number
}
interface UsersComType {
    users : UsersType[]
}
interface UserComProps {
    header : string
}

class Users extends Component<UserComProps, UsersComType> {
    constructor(props : UserComProps){
        super(props);
        this.state = {
            users : []
        }
    }

    componentDidMount(): void {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json()
        }).then((res) => {
            this.setState({users : res})
        })
    }

    render() {
        return (
            <>
            {
                this.state.users.map((user) => (
                <View key={user.id}>
                       <Text>{this.props.header} {user.name}</Text>
                </View>
                ))
            }
            </>
        )
    }
}


export default Users;