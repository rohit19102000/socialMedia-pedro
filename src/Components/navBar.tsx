import { Link } from 'react-router-dom'
import { auth } from '../Config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
export default function NavBar() {
 
 const [user] = useAuthState(auth);

 const signUserOut = async() =>{
    await signOut(auth)
 };

    
    return (
    <div className='navbar'>
        <div className="links">
        <Link to="/" > Home </Link>

        {!user ? <Link to="/login" > Login </Link> :
        <Link to="/createposts" > post </Link>}
        
      
        </div>


        <div className='user'>
        {
            user && (
                <>
                <p>
                    {auth.currentUser?.displayName}
                </p>
                <img src={auth.currentUser?.photoURL || ""} width="40" height="40" />
                <button onClick={signUserOut}>sign out</button>
                
                </>
            )
        }
        </div>
    </div>
  )
}
