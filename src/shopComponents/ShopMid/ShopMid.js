import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../context";
import useStyles from "./style";
const ShopMid = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.shopMid}>
      <Container className={classes.bigCont}>
        <Grid container spacing={4} className={classes.gridCont}>
          <Grid item lg={6} className={classes.gridItem}>
            <Box className={classes.item}>
              <img src="" alt="" />
            </Box>
          </Grid>
          <Grid item lg={6} className={classes.gridItem}></Grid>
          <Grid item lg={6} className={classes.gridItem}></Grid>
          <Grid item lg={6} className={classes.gridItem}></Grid>
          <Grid item lg={6} className={classes.gridItem}></Grid>
          <Grid item lg={6} className={classes.gridItem}></Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ShopMid;
