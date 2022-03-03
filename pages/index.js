import { Grid, Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid>
        <Typography variant="h5" sx={{ color: "green", textAlign: "center" }}>
          Hello World
        </Typography>
      </Grid>
    </div>
  );
}
