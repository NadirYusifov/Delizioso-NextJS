import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default function foodData(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "json", "data.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    // Səhifələmə üçün parametrləri oxu
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = 6; // Hər səhifədə neçə element göstəriləcək
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const totalPage = Math.ceil(data.foods.length / pageSize)

    const paginatedFoods = data.foods.slice(startIndex, endIndex);

    res.status(200).json({
      foods: paginatedFoods,
      total: data.foods.length,
      totalPage,
      page,
      pageSize,
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
