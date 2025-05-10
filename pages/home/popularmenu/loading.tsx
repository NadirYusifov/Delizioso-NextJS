import { Avatar, Box, Button, Card, CardContent, Grid2, IconButton, Rating, Skeleton, Stack, Typography } from "@mui/material";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";
import { useEffect } from "react";

export default function LoadingFoods() {
  return (
    <>
      <Grid2 container spacing={2} justifyContent={"center"} alignItems="center">
        {Array.from(Array(6)).map((_, i) => (
          <Grid2 container size={{ xs: 6, sm: 6, md: 6, lg: 4 }} justifyContent={"center"} alignItems="center" spacing={2} key={i}>
            <Card
              sx={{
                width: "100%",
                backgroundColor: "#D0CCC7",
                borderRadius: "70px",
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <picture>
                <Skeleton variant="circular" animation="wave" height={165} />
              </picture>
              <CardContent sx={{ padding: "10px 20px 10px 20px" }}>
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="rectangular" animation="wave" />
                <Skeleton variant="text" animation="wave" height={90} />
                <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Skeleton variant="text" animation="wave" width={50} />
                  <Skeleton variant="rounded" animation="wave" width={130} height={30} />
                </Stack>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  )
}
