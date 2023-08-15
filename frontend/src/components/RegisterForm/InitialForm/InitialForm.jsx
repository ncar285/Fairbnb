import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import { useState } from "react"


const InitialForm = () => {

    // const [formState, setFormState] = useState('initial');
    const [email, setEmail] = useState('')
    const [formState, setFormState] = useState('initial');

    const loginOrSignup = async (email) => {
        const response = await fetch(`/api/users/checkEmail?email=${email}`);
        const data = await response.json();
        return data.exists ? 'login' : 'signup';

    };

    // const [formState, setFormState] = useState('initial');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = await loginOrSignup(email)
        console.log(`render the ${form}login form!`)
        setFormState(form)
        // if (form === 'login') {
        //     return <LoginForm />;
        // } else if (form === 'signup') {
        //     return <SignupForm />;
        // } 
    }

    return (
        <div className="body">
            <h1 className="initial-form">
                Welcome to Airbnb
            </h1>

            {formState === 'initial' && (
                <form onSubmit={handleSubmit}>
            {/* <form onSubmit={handleSubmit}> */}
                    <label>
                        <input 
                            className="email-input" 
                            type="text" 
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email"
                        />   
                    </label>
                    <button className="continue main">Continue</button>
                </form>
            )}   

            {formState === 'login' && <LoginForm />}
            {formState === 'signup' && <SignupForm />}

            <div className="spacer">
                <div className="line"></div>
                <div className="or-text">or</div>
                <div className="line"></div>
            </div>
                
            <div className="quick-sign-up">
                <form action="">
                    <button>
                        <div class="button-icon">[icon]</div>
                        <div className="main">Continue with Facebook</div>
                    </button>
                    <button>
                        <div class="button-icon">[icon]</div>
                        <div className="main">Continue with Google</div>
                    </button>
                    <button>
                        <div class="button-icon">[icon]</div>
                        <div className="main">Continue with Apple</div>
                    </button>
                    <button className="email">
                        <div class="button-icon">[icon]</div>
                        <div className="main">Continue with email</div>
                    </button>
                </form>
            </div>

        </div>
    )

}

export default InitialForm


// {formState === 'initial' && (
//     <form onSubmit={handleSubmit}>
//         {/* ... */}
//     </form>
// )}

// {formState === 'login' && <LoginForm />}
// {formState === 'signup' && <SignupForm />}