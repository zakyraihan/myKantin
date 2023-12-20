import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axiosClient";
import { DishiListResponse, KategoriListResponse } from "../interface";

const useKategoriModule = () => {
  const getKategoriList = async (): Promise<KategoriListResponse> => {
    return axiosClient.get("/category/all").then((res) => res.data);
  };

  const useKategoriList = () => {
    const { data, isFetching, isLoading } = useQuery(
      ["/category/all"],
      () => getKategoriList(),
      {
        keepPreviousData: true,
      }
    );

    return { data: data?.data || [], isFetching, isLoading };
  };

  const getDishList = async (): Promise<DishiListResponse> => {
    return axiosClient.get("/populer/25").then((res) => res.data);
  };

  const useDishList = () => {
    const { data, isFetching, isLoading } = useQuery(
      ["/populer/25"],
      () => getDishList(),
      {
        keepPreviousData: true,
      }
    );

    return { data: data?.data || [], isFetching, isLoading };
  };

  return { useKategoriList, useDishList };
};

export default useKategoriModule;