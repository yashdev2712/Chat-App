import { useState } from "react";
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logIn = async (username, password) => {
        const success = handleInputError({ username, password });
        if(!success) return;
        setLoading(true);
        try {
            const res = await fetch("api/auth/login", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json();

            if (data.error) throw new Error(data.error);

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)

        } finally {
            setLoading(false);
        }
    }
    return { loading, logIn }
}

const handleInputError = ({username, password}) => {
    if (!username || !password) {
        toast.error("Please fill all the field");
        return false;
    }
    return true;
}

export default useLogin;