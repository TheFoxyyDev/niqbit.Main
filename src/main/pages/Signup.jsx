import OutlinedInput from "../../components/Input.jsx";
import {motion} from 'framer-motion';
import {useState} from "react";
import {BACKEND_URL, setAccessToken} from "../../conf.js";
import {toast} from "../helpers/toast.js";
import {useNavigate} from "react-router";

function Signup() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    function goBack() {
        const leng = window.history.length
        if (leng <= 2) {
            navigate("/")
        } else {
            window.history.go(-1)
        }
    }

    async function signup() {
        if (!email || !password) {
            toast("MISSING VALUES", "email or password is missing. please fill out all the fields", "error", 5000)
            return
        }

        const resp = await fetch(`${BACKEND_URL}/auth/signup`, {
            method: "POST",
            credentials: "include",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({email: email, password: password})
        })

        if (!resp.ok) {
            console.log(resp.status)
            switch (resp.status) {
                case 422:
                    toast("PASSWORD TOO WEAK", "your password is too weak.. try adding more characters", "error", 5000)
                    return
                case 400:
                    toast("MISSING VALUES", "email or password is missing. please fill out all the fields", "error", 5000)
                    return
                case 409:
                    toast("EMAIL ALREADY REGISTERED", "the entered email is already registered. please try logging in. redirecting you to login...", "error", 5000)
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    navigate("/login")
                    return
                case 500:
                    toast("SERVER ERROR", "something went wrong on the server. please report this and try again later", "error", 5000)
                    return
                default:
                    toast("SOMETHING WENT WRONG", "something went wrong but i'm not really sure what. please report this and try again later", "error", 5000)
            }
        }
    }

    return (
        <div className="absolute bg-background w-full h-full flex flex-col justify-center items-center">
            <motion.div
                className="absolute w-26 h-13 bg-highlight border-border border-[0.5px] top-0 left-0 m-6 rounded-full cursor-pointer flex justify-between items-center p-3"
                whileHover={{ scale: 1.05 }}
                onClick={goBack}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
                <div className="relative text-center w-full text-white font-mono text-2xl">
                    back
                </div>
            </motion.div>
            <div className="fixed text-white text-8xl font-mono m-5 top-[10%] select-none">
                sign<span className="text-defgreen">up</span>
            </div>
            <div className="relative bg-highlight w-[20%] h-[50%] border-[0.5px] border-border rounded-2xl">
                <div className="relative w-auto m-3 h-1/8">
                    <OutlinedInput label="e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="relative w-auto m-3 h-1/8">
                    <OutlinedInput label="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30}}
                    className="relative w-auto m-3 h-1/8 bg-defgreen rounded-lg text-black font-mono text-2xl flex justify-center items-center">
                    signup
                    <button className="absolute w-full h-full cursor-pointer" onClick={signup}/>
                </motion.div>
                <div className="relative w-auto m-3 h-1/20 flex justify-content items-center">
                    <div className="absolute bg-zinc-600 h-0.5 rounded-2xl w-full" />
                    <div className="absolute w-full h-full flex justify-center items-center">
                        <div className="w-auto h-auto p-2 bg-highlight text-center text-white text-lg font-mono">or</div>
                    </div>
                </div>
                <div className="relative w-auto h-3/8 m-3 mt-6 flex justify-center items-center">
                    <div className="relative text-gray-500 font-mono text-3xl text-center">coming soon...</div>
                </div>
            </div>
        </div>
    )
}

export default Signup