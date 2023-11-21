import { useState } from "react"

export default function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <form>
                <input value={username}
                    onChange={ev => setUsername(ev.target.value)}
                    Class="SignupInput"
                    type="text"
                    placeholder="Username" />

                <input value={password}
                onChange={ev => setPassword(ev.target.value)}
                class="SignupInput" 
                type="text" 
                placeholder="Password" />
                <button>SignUp</button>
            </form>
        </div>
    )
}