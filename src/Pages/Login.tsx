import { auth , provider} from '../Config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();
        const signinGoogle =    async () =>{
          const result = await    signInWithPopup(auth,provider)
            console.log(result)
            navigate("/")
        }



    return (
    <div><p>Sign in with google to continue</p>
    
    <button onClick={signinGoogle}> sign in with google</button>
    </div>
  )
}
