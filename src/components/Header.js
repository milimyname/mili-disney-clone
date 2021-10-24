import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="assets/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="assets/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="assets/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="assets/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="assets/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="assets/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="assets/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="assets/images/mili.jpeg" />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
