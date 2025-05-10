'use client';

import { Avatar, Box, Button, Card, CardActionArea, CardContent, createTheme, Grid2, IconButton, Pagination, PaginationItem, Rating, Skeleton, ThemeProvider, Typography } from "@mui/material";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingFoods from "./loading";
import Loading from "@/app/loading";
// import UsePagination from "@/components/pagination";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const theme = createTheme()


export default function PopularMenu() {
  interface Food {
    id: number;
    image: string;
    name: string;
    rating: number;
    description: string;
    price: number;
    order_button: string;
  }

  const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   })


  // }, [])

  const windowWidth = useWindowWidth();
  const searchParams = useSearchParams();
  const page = searchParams?.get("page") || 1; // URL-dən page parametri alınır
  const [foods, setFoods] = useState<Food[]>([])
  const [currentPage, setCurrentPage] = useState(+1)
  const [totalPage, setTotalPage] = useState(1)

  const handlePagination = (currentPage: number) => {
    setCurrentPage(currentPage)
    // router.push(`?page=${currentPage}`)
    // window.history.pushState(null, "", `?page=${currentPage}`)
    const sectionScroll = windowWidth <= 768 ? 2600 : 1600
    window.scrollTo({ top: sectionScroll, behavior: "smooth" })
  }

  // fetch(`http://localhost:3000/api/food?page=${currentPage}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setData(data.foods);
  //     setTotalPage(data.totalPage)
  //     setLoading(data.loading)
  //   }
  //   ) 
  // .then(data => console.log(data))
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(`http://localhost:3000/api/food?page=${currentPage}`)
  //     const data = await res.json()
  //     setData(data.foods)
  //     setLoading(data.loading)
  //     setTotalPage(data.totalPage)
  //     setLoading(true)
  //     setTimeout(() => {
  //       setLoading(false)
  //     })
  //     console.log(data);
  //   }
  //   getData()
  // }, [currentPage])

  useEffect(() => {
    const getData = async () => {
      setLoading(true); // Data yüklənməyə başlayanda loading true olur
      try {
        const res = await fetch(`http://localhost:4000/foods?limit=6`);
        const data = await res.json();
        setFoods(data);
        // console.log(pagedata); // Data konsola yazılır
      } catch (error) {
        console.error("Data fetch error:", error);
      } finally {
        setLoading(false); // Data yükləndikdən sonra loading false olur
      }
    };
    getData();
  }, [currentPage]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/foods?page=${currentPage}`);
        const data = await res.json();
        console.log(data.page); // Konsolda element sayı göstərilir
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [searchParams]);


  return (
    <section className="my-[112px]">
      <div className="container">
        <div className="text-center pb-[60px]">
          <h3 className="text-[60px] lg:text-[80px] text-medium-roast font-bold leading-[114.9%]">Our Popular Menu</h3>
        </div>
        <div className="p-4 flex justify-center items-center">
          <Grid2 container spacing={2} justifyContent={"center"} alignItems="center">
            {foods.map(food =>
              <Grid2 container spacing={2} size={{ xs: 6, sm: 6, md: 6, lg: 4 }} key={food.id}>
                <Card
                  className="w-full group bg-infusion/20 hover:bg-dark-orange"
                  key={food.id}
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
                  {loading ? (
                    <Skeleton variant="rectangular" width={350} height={350} />
                  ) : (
                    <Image src={food.image} quality={100} width={350} height={350} alt="image" />
                  )}
                  <CardContent sx={{ padding: "10px 20px 10px 20px" }}>
                    <Typography
                      className="text-van-dyke-brown group-hover:text-white font-semibold"
                      sx={{ textAlign: "center" }}
                      variant="body1"
                      component="div"
                    >
                      {loading ? (<Skeleton />) : (food.name)}
                    </Typography>
                    <div className="flex justify-center py-3">
                      <Rating
                        className="group-hover:text-medium-roast"
                        name="half-rating"
                        defaultValue={food.rating}
                        precision={0.5}
                      />
                    </div>
                    <Typography
                      className="line-clamp-3 lg:line-clamp-none text-van-dyke-brown group-hover:text-white font-normal leading-[120%]"
                      sx={{ textAlign: "center" }}
                    >
                      {food.description}
                    </Typography>
                    <div className="flex justify-between items-center py-4">
                      <Typography className="lg:text-[22px] lg:text-black text-dark-orange group-hover:text-white text-[16px] font-semibold">
                        ${food.price}
                      </Typography>
                      {windowWidth <= 768 && (
                        <IconButton sx={{ padding: "0" }}>
                          <Avatar className="bg-dark-orange group-hover:bg-white group-hover:text-dark-orange">
                            +
                          </Avatar>
                        </IconButton>
                      )}
                      {windowWidth >= 768 && (
                        <Button className="bg-dark-orange text-white group-hover:bg-white group-hover:text-dark-orange rounded-full px-6 py-2.5">
                          <Typography className="text-[16px] font-semibold leading-[200%]">
                            {food.order_button}
                          </Typography>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Grid2>
            )}
          </Grid2>

        </div>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} marginTop={8}>
          <Pagination sx={{ "& .MuiPaginationItem-previousNext": { backgroundColor: "#311F09", color: "white", marginX: "20px" }, "& .MuiPaginationItem-previousNext:hover": { backgroundColor: "#382610" }, "& .MuiPaginationItem-page": { backgroundColor: "#FFF4E6", color: "#FF8A00", fontWeight: "bold", marginX: "5px" }, "& .MuiPaginationItem-page:hover": { backgroundColor: "#FFE2BF" }, "& .MuiPaginationItem-root.Mui-selected": { backgroundColor: "#FFDBB0" } }} size="medium" shape="rounded" defaultPage={currentPage} count={totalPage} onChange={(_, page) => handlePagination(page)} />
        </Box>
      </div>
    </section>
  );
}
