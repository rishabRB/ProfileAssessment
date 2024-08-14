import React,{ useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import ListProduct from "../Components/ListProduct";
import { enqueueSnackbar } from "notistack";

function Cart() {
  const cartProducts = useSelector((state) => state.products.products);
  

  const onCheckout=()=>{

  }

  const [totalAmount,setTotalAmount] = useState(0)
  const [discountCode,setDiscountCode] = useState("")

  const updateAmount=()=>{
    let amount = cartProducts.reduce((accumulator, product) => {
      return accumulator + (product.quantity * product.price);
    },0);
    setTotalAmount(amount)
  }

  useEffect(()=>{
    updateAmount()
  },[cartProducts])

  const handleDiscount=()=>{
    if(discountCode === "NEW10")
    setTotalAmount(totalAmount - Math.round(totalAmount * 10/100))
    else enqueueSnackbar("Invalid Coupon",{variant:"error"})
  }


  return (
    <>
      <NavBar />
    
      {cartProducts.length > 0 ? (
        <Box display="flex" alignItems="center"
        sx={{
          p:4,
          flexDirection: {
            xs : 'column',
            md: 'row',   
          }
        }}
        >

          {/* list product */}
          <Box width="60%" height="100vh" display="flex" justifyContent="start" alignItems="start">
            <Stack
              spacing={1}
              sx={{
                p: 4,
              }}
            >
              {cartProducts.map((product, index) => (
                <Box key={index}>
                  <ListProduct
                    id = {product.id}
                    name={product.name}
                    img={product.img}
                    quantity={product.quantity}
                    price={product.price}
                  />
                </Box>
              ))}
            </Stack>
          </Box>


          {/* checkout card     */}
          <Box height="100vh" display="flex" justifyContent="start" alignItems="start">
          <Stack>
            <Box
              p={3}
              border="1px solid #ddd"
              borderRadius="8px"
              width="100%"
              maxWidth="400px"
              margin="auto"
              bgcolor="#f9f9f9"
            >
              <Typography variant="h5">CART SUMMARY</Typography>
              <Typography variant="h8" gutterBottom>
                SubTotal Amount: ${totalAmount}
              </Typography>

              <TextField
                label="Discount Code"
                variant="outlined"
                fullWidth
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                margin="normal"
              />
              <Typography variant="body3">Try "NEW10"</Typography>
              <Button onClick={handleDiscount} variant="contained" color="primary" fullWidth>
                Apply Discount
              </Button>

              <Divider sx={{ my: 2 }} />

              <Typography variant="h6" gutterBottom>
                Final Amount: ${totalAmount}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={onCheckout}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Stack>
          </Box>
        </Box>
      ) : (
        <Box
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h6"> No Item in cart</Typography>
        </Box>
      )}
    </>
  );
}

export default Cart;
