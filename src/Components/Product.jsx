import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../feature/ProductSlice";
import { enqueueSnackbar } from "notistack";

const Product = ({ id, name, img, price }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.products.products);

  const findProduct = (id) => {
    const productExits = cartProducts.find((product) => product.id === id);
    if (productExits) return true;
    return false;
  };

  const handleAddToCart = () => {
    const product = {
      id: id,
      name: name,
      img: img,
      price: price,
      quantity: 1,
    };

    if (!findProduct(id)) {
      dispatch(addProduct(product));
    } else {
      dispatch(updateProduct({ id: product.id, type: "INC_QUANTITY" }));
    }

    enqueueSnackbar("Product add successfully", {
      variant: "success",
      autoHideDuration: 300,
    });
  };

  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 500,
        width: 300,
        borderRadius: 5,
        m: 1,
      }}
    >
      <CardMedia component="img" alt="green iguana" height="100" image={img} />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography gutterBottom variant="h8" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {price} INR
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button onClick={handleAddToCart} variant="contained" size="large">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
