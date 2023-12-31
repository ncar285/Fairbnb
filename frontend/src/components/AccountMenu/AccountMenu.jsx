import './AccountMenu.css'
import { useState } from "react";
import RegisterForm from '../RegisterForm/RegisterForm';
import { activateRegisterModal } from '../../store/uiReducer';
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUser } from '../../store/sessionsReducer';
import { logoutUser } from '../../store/sessionsReducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getListings } from '../../store/listingsReducer';


const AccountMenu = ({ handleMenuClick, margin, setMenuOpen }) => {

    const [showRegister] = useState(false)
    const dispatch = useDispatch();
    const sessionUser = useSelector(getCurrentUser);

    const history = useHistory()

    const renderAccountPage = () => window.location.href = '/account';

    const handleSignOut = async e => {
        e.preventDefault();
        dispatch(logoutUser());
        setMenuOpen(false)
        history.push('/');
        dispatch(getListings())
        // sessionStorage.removeItem("myReview");
        // window.location.reload(); 
    }

    const handleRegister = () => {
        setMenuOpen(false)
        handleMenuClick();
        dispatch(activateRegisterModal());
        requestAnimationFrame(() => {
          document.querySelector('.register-modal').classList.add('show');
        });
      }


    const menuButtons = () => {
        if (sessionUser)  {
            return  (
                <>
                    <div style={{ right: margin}} className="account-options" id="account-options">
                        <button onClick={renderAccountPage}>Account</button>
                        <div className="account-menu-spacer"></div>
                        <button onClick={handleSignOut}>Logout</button>
                    </div>
                </>
            )
        }else {
            return (
                <div style={{ right: margin}} className="account-options" id="account-options">
                    <button onClick={handleRegister}>Login</button>
                    <button onClick={handleRegister}>Sign up</button>
                </div>
            )

        }
    }

    return (
        <>

            <div className='background-overlay'
            onClick={handleMenuClick}
            ></div>
                
            {menuButtons()}

            {showRegister && (
                <RegisterForm closeModal={true}/>
            )}

        </>

    )
}

export default AccountMenu
