import { useState } from "react";
import Cities from "../../components/api/sales-point/cities";
import Areas from "../../components/api/sales-point/areas";
// import Location from "../../components/api/sales-point/geolocation";
import dynamic from "next/dynamic";
import { GetServerSidePropsContext } from "next";
import axios from "axios";

const Location = dynamic(
  () => import("../../components/api/sales-point/geolocation"),
  { ssr: false }
);

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const res = await axios.get(
      "https://admin.joacademy.net/api/v1/all-cities-areas",
      {
        // headers: { lang: "ar" },
        headers: { program: 1, lang: "ar", api: 1 },
      }
    );
    // const res2 = await axios.get(
    //   "https://admin.joacademy.net/api/v1/all-cities-areas",
    //   {
    //     headers: { program: 1, lang: "ar", api: 1 },
    //   }
    // );
    const res3 = await axios.get(
      "https://admin.joacademy.net/api/v1/all-sales-points",
      {
        headers: { program: 1, lang: "ar", api: 1 },
      }
    );
    // console.log(res?.data?.data?.areas);
    // console.log(res3?.data?.data);
    return {
      props: {
        cities: res?.data?.data?.cities,
        areas: res?.data?.data?.areas,
        locat: res3?.data?.data,
      },
    };
  } catch (error: any) {
    return {
      notFound: true,
    };
  }
};

export default function SalesPoint({ cities, areas, locat }: any) {
  // console.log(cities);
  const [cityId, setCityId] = useState();
  const [areasId, setAreasId] = useState();
  const [citiesHandel, setCitiesHandel] = useState();

  const citiesHandelClick = (ele: any) => {
    setCitiesHandel(ele);
    setCityId(ele);
  };

  const areasHandelClick = (ele: any) => {
    setAreasId(ele);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F9F9] px-36">
      <h2 className="font-bold text-3xl mt-5 ">المكتبات</h2>
      <p className="font-bold mb-10 mt-5 text-gray-400 text-center">
        تهنا يمكنك العثور على أقرب مكتبة تقدم بطاقات جو أكاديمي
      </p>
      <div className="flex justify-between  items-center bg-white w-full mx-14 px-3 py-2 border-[1px] border-gray-200 rounded-lg z-20">
        <div className="w-full">
          <label>المدينة:</label>
          <div className="flex items-center justify-center h-10 px-2 my-1">
            {/* <select className="cursor-pointer w-full"> */}
            <Cities cities={cities} citiesHandelClick={citiesHandelClick} />
            {/* </select> */}
          </div>
        </div>
        <div className="w-full">
          <label>المنطقة:</label>
          <div className="flex items-center justify-center h-10 px-2 my-1">
            <Areas
              areas={areas}
              cityId={cityId}
              areasHandelClick={areasHandelClick}
            />
          </div>
        </div>
      </div>
      <div className="z-0 py-6 ">
        <Location locat={locat} areasId={areasId} />
      </div>
    </div>
  );
}
