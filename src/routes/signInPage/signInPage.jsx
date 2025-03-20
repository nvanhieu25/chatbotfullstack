import { SignIn } from '@clerk/clerk-react'
import './signInPage.css'

const signInPage = () => {
    return (
        <div className='signInPage'>
            <SignIn path = "/sign-in" />
        </div>
    )
}

export default signInPage