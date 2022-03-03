import { Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthSignUp } from "../../Redux";

function Profile() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <Grid>
      index
      <Button
        onClick={() => {
          console.log("hello", loggedIn);
          dispatch(AuthSignUp());
        }}
      >
        Click
      </Button>
    </Grid>
  );
}

export default Profile;
