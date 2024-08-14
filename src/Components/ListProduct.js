import { Add, Delete, PlusOne, Remove } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, updateProduct } from "../feature/ProductSlice";

const ListProduct = ({ id, name, img, quantity, price }) => {
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(updateProduct({ id: id, type: "DEC_QUANTITY" }));
  };

  const onAdd = () => {
    dispatch(updateProduct({ id: id, type: "INC_QUANTITY" }));
  };

  const onDelete = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <Box
        width={500}
        display="flex"
        alignItems="center"
        p={2}
        border="1px solid #ddd"
        borderRadius="8px"
      >
        <Box flexShrink={0} mr={2}>
          <img
            src={img}
            alt={name}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </Box>

        <Box flexGrow={1}>
          <Typography variant="h6">{name}</Typography>
          <Box display="flex" alignItems="center">
            <IconButton
              aria-label="remove"
              color="primary"
              size="small"
              onClick={onRemove}
            >
              <Remove />
            </IconButton>

            <Typography variant="body2" color="textSecondary" mx={2}>
              {quantity}
            </Typography>

            <IconButton
              onClick={onAdd}
              aria-label="add"
              color="primary"
              size="small"
            >
              <Add />
            </IconButton>

            <IconButton onClick={onDelete} aria-label="add" size="small">
              <Delete />
            </IconButton>
          </Box>

          <Typography variant="body2" color="textSecondary">
            Price: ${price}
          </Typography>
        </Box>

        <Box></Box>
      </Box>
    </>
  );
};

export default ListProduct;
