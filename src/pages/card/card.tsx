import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import axios from "axios";

// import { AppProps } from "next/app";
// import React from "react";


export default function Card({
  name,
  bio,
  picture,
  slug,
}: {
  slug: string;
  name: string;
  bio: string;
  picture: string;
  // callBack: (setSlugCard: string) => void;
}) {
  // const [sluge, setSlug] = useState();
  // const [slug, setSlug] = useState();
  const router = useRouter();

  // const setSlugCard = (slug: any) => {
  // setSlug(slug);
  // console.log(data);
  // };
  return (
    <div
      onClick={() => {
        router.push(`/teachers/${slug}`);
        console.log(slug);
      }}
      className="flex flex-col items-center justify-around cursor-pointer h-80 w-80 bg-white border rounded-md hover:shadow-[0_10px_10px_0_rgba(0,0,0,0.2)]"
    >
      <Image
        className="rounded-full"
        src={picture}
        alt="teachers"
        width={70}
        height={70}
      />
      <h2 className="font-bold text-lg px-4">{name}</h2>
      <p className="text-wrap text-center px-3 text-sm">{bio}</p>
      <button className="text-white bg-[#327BF9] py-1 px-12 rounded-lg">
        متابعة الاستاذ
      </button>
    </div>
  );
}
