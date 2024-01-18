import React, { useEffect } from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/slice/dataSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Home() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log(data);
  return (
    <>
      <main className={style.main}>
        <section className={style.firstSection}>
          <div className={style.elements}>
            <h1>Shop With Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              tempore recusandae, soluta a quia dolorem temporibus nulla debitis
              voluptatem voluptates!
            </p>
            <div className={style.btns}>
              <button className={style.btn1}>SHOP NOW</button>
              <button className={style.btn2}>CLUB MEMBEESHIP</button>
            </div>
          </div>
        </section>

        <section className={style.secondSection}>
          <div className={style.elements}>
            <div className={style.productsHeader}>
              <p className={style.p1}>POPULAR PRODUCTS</p>
              <h1>Our Products</h1>
              <p className={style.p2}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique, deserunt laboriosam! Architecto nemo sapiente
                doloribus minus est id inventore aliquam sed, repellendus quam
                nam tempora omnis quia mollitia voluptate hic?
              </p>
            </div>
            <div className={style.productsCards}>
              <Grid container spacing={2}>
                {data &&
                  data.map((elem, i) => {
                    return (
                      <Grid key={i} item xs={4}>
                        <Card sx={{ maxWidth: 345 }} className={style.cards}>
                          <CardMedia
                            className={style.images}
                            sx={{ minHeight: 300 }}
                            image={elem.imageURL}
                            title="green iguana"
                          />
                          <CardContent className={style.cardstexts}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {elem.name}
                            </Typography>
                            <Typography
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <FontAwesomeIcon icon={faStar} /> <p>5.0</p>{" "}
                              <FavoriteBorderIcon /> <p>29</p>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {elem.des}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })}
              </Grid>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
