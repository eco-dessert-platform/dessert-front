import Link from 'next/link';
import ProductsList from '../client/ProductsList';
import * as API from '@/api';

const getBestProducts = async () => {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcxMDY1Mzk5OSwiZXhwIjoxNzEwNjY0Nzk5LCJpZCI6MjZ9.jr7QPtgTPVMD3vqrZJBeu9RilV2dwF0eWOv4w34FAGM',
      'Content-Type': 'application/json',
      cache: 'no-store'
    }
  };

  try {
    const res = await fetch(`${API.serverUrl}/boards`, requestOptions);
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const ServerProducts = async () => {
  const bestProducts = await getBestProducts();

  return (
    <div className="w-full">
      <div className="w-[92%] h-14 m-auto py-2.5 justify-between items-end flex">
        <div className="text-2xl font-normal leading-9 text-color-Gray500">Best</div>
        <Link href="/products" className="text-color-Gray400 text-xs font-medium  leading-[18px]">
          전체보기
        </Link>
      </div>
      <ProductsList bestProducts={bestProducts} />
    </div>
  );
};

export default ServerProducts;
