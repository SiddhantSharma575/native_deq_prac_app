class Users {
    static all() {
        return fetch("https://reactnative.dev/movies.json").then((response) => {
            if(response) {
                return response.json()
            }
        })
    }
}

export default Users;