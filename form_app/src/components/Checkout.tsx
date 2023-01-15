import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

import Form from "./Form";
import Product from "./Product";

export interface ProductType {
  name: string;
  price: number;
  img: string;
  seller: string;
  Quantity: number;
}
const productData = {
  name: "iMac 5k 27 MRQY23RE/A  3.00GHz/8GB/1TB Fusion/Radiun",
  price: 600,
  img: "https://i.ebayimg.com/images/g/0i8AAOSwxcJd1Nwq/s-l640.png",
  seller: "Edan magled",
  Quantity: 1,
} as ProductType;

const Checkout = () => {
  return (
    <Box padding={5}>
      <Box>
        <Typography variant="h4" align="left">
          Nimrod Store
        </Typography>
      </Box>

      <Stack spacing={3} sx={{ width: "70%", justifyContent: "center" }}>
        <Product productData={productData} />
        <Form productData={productData} />
      </Stack>
    </Box>
  );
};

export default Checkout;
