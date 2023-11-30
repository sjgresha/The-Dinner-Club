import RegisterAndLoginForm from "./RegisterAndLoginForm"
import {UserContext} from "react"
import {UserContext} from "./UserContext.jsx"

export default function Routes() {
    const {username, id} = useContext(UserContext);

    if (username) {
        return <Chat />
    }

    return (
        <RegisterAndLoginForm/>
    );
}