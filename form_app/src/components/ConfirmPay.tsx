import { Divider, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { ProductType } from "./Checkout";
type confirmProps = {
  productData: ProductType;
};
const shipping = 50;
const ConfirmPay = ({ productData }: confirmProps) => {
  return (
    <>
      <Paper sx={{ padding: 5 }}>
        Confirm pay
        <Stack display={"flex"} spacing={2} padding={2}>
          <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
            <Typography variant="subtitle2">Subtotal (1 item)</Typography>
            <Typography align="right" variant="subtitle1">
              US ${productData.price}
            </Typography>
          </Box>
          <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
            <Typography variant="subtitle2">Shipping</Typography>
            <Typography align="right" variant="subtitle1">
              US ${shipping}
            </Typography>
          </Box>

          <Divider />
          <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
            <Typography variant="h6">Order total</Typography>
            <Typography align="right" variant="h6">
              US ${productData.price * productData.Quantity + shipping}
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </>
  );
};

export default ConfirmPay;
