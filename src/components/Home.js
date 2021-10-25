import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import Originals from "./Originals";
import NewDisney from "./NewDisney";
import Trending from "./Trending";
import db from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUsername } from "../features/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  let recommends = [];
  let newDisney = [];
  let original = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            original = [...original, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney,
          original,
          trending,
        })
      );
    });
  }, [username]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
      <Originals />
      <NewDisney />
      <Trending />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    content: "";
    background: url("/assets/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
