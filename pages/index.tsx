import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import CarForm from "../components/CarForm";
import CarImage from "../components/CarImage";
import DetectionService from "../components/DetectionService";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [{ name, show, src, alt }, setData] = useState({
    name: "",
    show: false,
    alt: "",
    src: "/car_100px.png",
  });

  return (
    <>
      <Head>
        <title> Exotic Car Services: Home of Comfortable ride </title>
        <link rel="icon" href="/car_100px.png" />
      </Head>
      <Box my={5}>
        <Container maxWidth="md">
          <Card elevation={3} sx={{ maxWidth: "sm", mx: "auto" }}>
            <CardContent>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Making Transportation Enjoyable and Memorable
              </Typography>
              {!show ? (
                <CarForm setData={setData} />
              ) : (
                <DetectionService name={name} src={src} alt={alt} />
              )}
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Home;
