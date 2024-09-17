import React from "react";
import axios from "axios";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import Insta from "../../../public/images/insta.svg";
// import { Icon } from "@radix-ui/react-select";
// import Remix
// import { useRouter } from "next/router";
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const slug = context?.params?.slug;
  try {
    const needle = await axios.get(
      `https://admin.joacademy.net/api/v1/teacher-by-needle?needle=${slug}`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          program: "1",
          lang: "ar",
          api: "1",
        },
      }
    );
    console.log(needle?.data?.data);

    return {
      props: {
        needle: needle?.data?.data,
      },
    };
  } catch (error: any) {
    return {
      notFound: true,
    };
  }
};

const teacherslug = ({ needle }: { needle: any }) => {
  return (
    <div className="flex items-center justify-center gap-5 bg-[#002f57] p-10 mx-8 my-4 border rounded-md">
      {/* <div className="relative w-6 h-6"> */}
      <Image
        className="rounded-full align-middle object-cover"
        src={needle.picture}
        alt="teachers"
        width={100}
        height={90}
        //   layout="fixed"
        //   objectFit="cover"
        // position =
      />
      {/* </div> */}

      <div className="flex flex-col gap-2">
        <h1 className="text-white font-bold text-2xl">{needle.name}</h1>
        <p className="text-white text-lg">{needle.bio}</p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-white text-lg">{needle.teacher_followers} متابع</h2>
        <button className="text-white bg-[#327BF9] py-1 px-12 rounded-lg">
          متابعة الاستاذ
        </button>
        <div className="flex gap-2 ">
          <button className="text-white text-xs border border-red-50 rounded-sm px-2 py-1 hover:border-blue-800">
            مشاركة الحساب
          </button>
          <button className="text-white text-xs border border-red-50 rounded-sm px-2 py-1 hover:border-blue-800">
            اضافة للمفضلة
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default teacherslug;
