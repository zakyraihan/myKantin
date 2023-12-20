interface Category {
    id: number;
    name: string;
    img: string;
  }
  
  export interface Dish {
    name: string;
    harga: number;
    waktu: string;
    jumlah: number;
    rating: string;
    image: string;
    pesan: number;
  }
  
  export interface KategoriListResponse {
    data: Category[];
  }
  
  export interface DishiListResponse {
    data: Dish[];
  }