import { Box, Paper, Stack, Typography } from "@mui/material";
import { ProductType } from "./Checkout";
type productProps = {
  productData: ProductType;
};
function Product({ productData }: productProps) {
  return (
    <Paper sx={{ marginTop: 3 }}>
      <Stack spacing={2} padding={2}>
        <Typography align="left" variant="h6">
          Review item and shipping
        </Typography>
        <Typography align="left" variant="subtitle2">
          Seller : {productData.seller}
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box height={50} width={50} component="img" src={productData.img} />
          <Stack spacing={5}>
            <Stack spacing={1}>
              <Typography variant="body1" align="left">
                {productData.name}
              </Typography>
              <Typography variant="body1" align="left" fontWeight="bold">
                US {productData.price} $
              </Typography>
              <Typography variant="body1" align="left" fontWeight="light">
                Quantity: {productData.Quantity}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
}

export default Product;
