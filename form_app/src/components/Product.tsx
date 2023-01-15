import { Box, Stack, Typography } from "@mui/material";

const productData = {
  name: "iMac 5k 27 MRQY23RE/A  3.00GHz/8GB/1TB Fusion/Radiun",
  price: 600,
  img: "https://i.ebayimg.com/images/g/0i8AAOSwxcJd1Nwq/s-l640.png",
  seller: "Edan magled",
};
function Product() {
  return (
    <Stack spacing={2} padding={2}>
      <Typography align="left" variant="h6">
        Review item and shipping
      </Typography>
      <Typography align="left" variant="subtitle2">
        Seller : {productData.seller}
      </Typography>
      <Box display="flex">
        <Box
          height={50}
          width={50}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <img src={productData.img} alt="" width={60} height={60} />
        </Box>
        <Stack spacing={5}>
          <Stack spacing={1}>
            <Typography variant="body1" align="left">
              {productData.name}
            </Typography>
            <Typography variant="body1" align="left" fontWeight="bold">
              US {productData.price} $
            </Typography>
            <Typography variant="body1" align="left" fontWeight="light">
              Quantity: {productData.price}
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body1" align="left">
              {productData.name}
            </Typography>
            <Typography variant="body1" align="left" fontWeight="bold">
              US {productData.price} $
            </Typography>
            <Typography variant="body1" align="left" fontWeight="light">
              Quantity: {productData.price}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Product;
