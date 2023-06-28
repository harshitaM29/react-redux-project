import classes from './Header.module.css';
import {authActions} from '../store/index';
import {useSelector, useDispatch} from 'react-redux'

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler=() => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
         {isLoggedIn && <li>
            <a href='/'>My Products</a>
          </li> }
         {isLoggedIn && <li>
            <a href='/'>My Sales</a>
          </li> }
          {isLoggedIn && <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>  }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
