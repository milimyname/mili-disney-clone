import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectPhoto,
  selectUsername,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const username = useSelector(selectUsername);
  const userPhoto = useSelector(selectPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username)
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => alert(error.catch((error) => alert(error))));
    else if (username)
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((error) => alert(error.message));
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo href="/home">
        <img src="/assets/images/logo.svg" alt="Logo" />
      </Logo>
      {!username ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="assets/images/home-icon.svg" alt="Home" />
              <span>HOME</span>
            </a>
            <a>
              <img src="assets/images/search-icon.svg" alt="Search" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="assets/images/watchlist-icon.svg" alt="Watchlist" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="assets/images/original-icon.svg" alt="Original" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="assets/images/movie-icon.svg" alt="Movies" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="assets/images/series-icon.svg" alt="Series" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <Signout>
            <UserImg src={userPhoto} alt={username} />
            <Dropdown>
              <span onClick={handleAuth}>Sing out</span>
            </Dropdown>
          </Signout>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.a`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        tranform-origin: left center;
        transform: scaleX(0);
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
const UserImg = styled.img`
  height: 100%;
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 65px;
  right: 25px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  z-index: 1;
`;

const Signout = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 0.25s;
    }
  }
`;

export default Header;
