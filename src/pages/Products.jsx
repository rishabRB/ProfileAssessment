import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import axios from "axios";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import Product from "../Components/Product";
import { useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";

function Products() {
  const searchParameter = useSelector((state) => state.search.searchParameter);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log(searchParameter);
      try {
        const response = await axios.get(
          `https://fakestoreapi.in/api/products/category?type=${searchParameter}`
        );
        if (response) {
          setProducts(response.data.products);
        }
      } catch (error) {
        enqueueSnackbar("Product Not Found", { variant: "error" });
      }
    }
    fetchData();
  }, [searchParameter]);

  return (
    <>
      <NavBar />

      {products.length > 0 ? (
        <Box>
          <Box sx={{ width: 1, p: 2 }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              {products.map((product, index) => (
                <Grid item key={index}>
                  <Product
                    id={product.id}
                    name={product.model}
                    img={product.image}
                    price={product.price}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center">
            <Pagination count={3} variant="outlined" />
          </Box>
        </Box>
      ) : (
        <Box
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6">Loding...</Typography>
        </Box>
      )}
    </>
  );
}

export default Products;
