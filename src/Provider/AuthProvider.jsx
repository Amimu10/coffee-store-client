import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
    setLoading(true);
       return  createUserWithEmailAndPassword(auth, email, password);
   }

   const userInfo = {
    user, 
    loading, 
    createUser
   }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;