import Image from "next/image";
import { useRouter } from "next/router";

export default function Navebar() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center gap-12 p-4 border-b-0 shadow-md text-[#1a428a] bg-white ">
      <a
        onClick={() => {
          router.push("/teachers");
        }}
      >
        <Image src="/images/logo.svg" alt="logo" height="50" width="200" />
      </a>
      <ul className="flex justify-center items-center gap-4 font-bold	 cursor-pointer">
        <li
          onClick={() => {
            router.push("/sales-point");
          }}
        >
          مكتبات
        </li>
        <li>مدرسة جو اكاديمي</li>
        <li>أخبار جوأكاديمي</li>
        <li>الإمتحانات الإلكترونية</li>
        <li>كن مندوبنا</li>
        <li onClick={() => router.push("/notification")}>البرنامج</li>
      </ul>
      <div className="flex justify-center items-center gap-6">
        <div className="flex gap-4 text-2xl">
          {/* <button>cart</button> */}
          {/* <i className="ri-shopping-cart-fill cursor-pointer"/> */}
          {/* <i className="ri-question-fill cursor-pointer"></i> */}
          {/* <i className="ri-english-input cursor-pointer"></i> */}
        </div>
        <div className="flex gap-4">
          <button className="border px-4 py-2 rounded-md">دخول</button>
          <button className="text-white bg-[#1a428a] px-4 py-2 rounded-md">
            تسجيل
          </button>
        </div>
      </div>
    </div>
  );
}
