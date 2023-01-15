import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import ConfirmPay from "./ConfirmPay";
import Form from "./Form";
import Product from "./Product";

const Checkout = () => {
  return (
    <>
      <Grid container paddingX={10} gap={3}>
        <Box>
          <Typography variant="h4" align="left">
            Nimrod Store
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={8}>
            <Stack spacing={3}>
              <Paper>
                <Product />
              </Paper>
              <Form />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <ConfirmPay />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Checkout;
