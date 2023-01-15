import { Divider, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ConfirmPay = () => {
  return (
    <>
      <Paper>
        Confirm pay
        <Stack display={"flex"} spacing={2} padding={2}>
          <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
            <Typography variant="subtitle2">Subtotal (1 item)</Typography>
            <Typography align="right" variant="subtitle1">
              US $600.00
            </Typography>
          </Box>
          <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
            <Typography variant="subtitle2">Shipping</Typography>
            <Typography align="right" variant="subtitle1">
              US $229.03
            </Typography>
          </Box>
          <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
            <Typography variant="subtitle2">Import charges</Typography>
            <Typography align="right" variant="subtitle1">
              US $177.88
            </Typography>
          </Box>
          <Divider />
          <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
            <Typography variant="h6">Order total</Typography>
            <Typography align="right" variant="h6">
              US $1,006.91
            </Typography>
          </Box>
          <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}></Box>
        </Stack>
      </Paper>
    </>
  );
};

export default ConfirmPay;
