import { getServerAuthSession } from "@/lib/auth";
import axios from "axios";
export const getAllCategories = async () => {
  try {
    const session = await getServerAuthSession();
    const { token, business_id } = session?.user!;
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: {
          // category_id: category_id,
          business_id: business_id,
          per_page: -1,
        },
      }
    );
    console.log(data);
    return data.data;
  } catch (error) {
    throw error;
  }
};
