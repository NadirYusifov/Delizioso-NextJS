"use client";

import {
  Avatar,
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size";
import Menu from "../../../app/data.json";

export default async function PopularMenu() {
  const menu = Menu

  const windowWidth = useWindowWidth();


  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="my-[112px]">
      <div className="container">
        <Slider {...settings}>
          {menu.map((foods) => (
            <div className="p-4 !flex justify-center items-center">
              <Card
                className="w-full h-[591px] group lg:w-[344px] !bg-infusion/20 hover:!bg-dark-orange"
                key={foods.id}
                sx={{
                  transition: "all .3s ease-in-out",
                  borderRadius: "70px",
                  boxShadow: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={foods.image} width={350} height={200} alt="image" />
                <CardContent sx={{ padding: "10px 20px 10px 20px" }}>
                  <Typography
                    className="text-van-dyke-brown group-hover:!text-white !font-semibold"
                    sx={{ textAlign: "center" }}
                    variant="body1"
                    component="div"
                  >
                    {foods.name}
                  </Typography>
                  <div className="flex justify-center py-3">
                    <Rating
                      className="group-hover:!text-medium-roast"
                      name="half-rating"
                      defaultValue={foods.rating}
                      precision={0.5}
                    />
                  </div>
                  <Typography
                    className="line-clamp-3 lg:line-clamp-none text-van-dyke-brown group-hover:!text-white font-normal leading-[120%]"
                    sx={{ textAlign: "center" }}
                  >
                    {foods.description}
                  </Typography>
                  <div className="flex justify-between items-center py-4">
                    <Typography className="lg:!text-[22px] lg:!text-black !text-dark-orange group-hover:!text-white !text-[16px] !font-semibold">
                      ${foods.price}
                    </Typography>
                    {windowWidth <= 768 && (
                      <IconButton sx={{ padding: "0" }}>
                        <Avatar className="!bg-dark-orange group-hover:!bg-white group-hover:!text-dark-orange">
                          +
                        </Avatar>
                      </IconButton>
                    )}
                    {windowWidth >= 768 && (
                      <Button className="!bg-dark-orange !text-white group-hover:!bg-white group-hover:!text-dark-orange !rounded-full">
                        <Typography className="!text-[16px]">
                          {foods.order_button}
                        </Typography>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
