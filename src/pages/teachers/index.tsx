import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../card/card";
import Pagination from "../pagination/Pagination";
import Loading from "../loading/Loading";
import Category from "../category/Category";
import SubCategory from "../category/SubCategory";
import { useDebounce } from "use-debounce";

export default function Header() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loding, setLoding] = useState(false);
  const [total, setTotal] = useState(0);
  const [change, setChange] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [subCategoryData, setSubCategoryData] = useState<SubCategory[]>([]);
  const [selectSubCategory, setSelectSubCategory] = useState("");
  // const [slug, setSlug] = useState();

  // const debouncedOnChange = useDebounce(change, 500);

  useEffect(() => {
    if (selectCategory) {
      getSubCategory();
    }
    setLoding(true);
    axios
      .get("https://admin.joacademy.net/api/v1/filter-teachers", {
        params: {
          page: currentPage,
          name: change,
          category: `[${selectCategory}]`,
        },
        headers: { program: 1, lang: "ar", api: 1 },
      })
      .then((data) => {
        setData(data.data.data);
        // setSlug()
        // console.log(data.data.data);
        setTotal(data.data.meta.total);
        setLoding(false);
      })
      .catch((err) => {
        setLoding(false);
        console.log(err);
      });
  }, [currentPage, change, selectCategory, selectSubCategory]);

  const onNextClick = (current: any) => {
    setCurrentPage(current);
  };
  const onPrevClick = (current: any) => {
    setCurrentPage(current);
  };
  const onPageChange = (current: any) => {
    setCurrentPage(current);
  };

  const setCategory = (catid: any) => {
    setSelectCategory(catid);
    setSubCategoryData([]);
    setSelectSubCategory("");
  };
  const setSubCategory = (subid: any) => {
    setSelectSubCategory(subid);
  };

  const clearAll = () => {
    setChange("");
    setSelectCategory("");
    setSelectSubCategory("");
    setSubCategoryData([]);
  };

  const getSubCategory = () => {
    try {
      axios
        .get(
          `https://admin.joacademy.net/api/v2/programs/category/sub-category?id=${selectCategory}`
        )
        .then((selectSubCata) => {
          setSubCategoryData(selectSubCata.data.data);
          // console.log(selectSubCata.data.data);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F9F9] px-36">
      <h2 className="font-bold text-3xl mt-5 ">المعلمون - الثانوية العامة</h2>
      <p className="font-bold mb-10 mt-5 text-gray-400 text-center">
        تعرف على جميع معلمين جو اكاديمي من هنا ويمكنك متابعتهم ومشاهدة حصص
        التاسيس وحصص مجانية - الثانوية العامة
      </p>
      <div className="flex flex-col justify-center items-center bg-white w-full mx-14 px-3 py-2 border-[1px] border-gray-200 rounded-lg">
        <input
          value={change}
          className="border-[1px] border-gray-200 rounded-lg w-full h-10 px-2"
          placeholder="ابحث هنا"
          onChange={(ele) => setChange(ele.target.value)}
          // onChange={debouncedOnChange()}
        />
        <div className="grid grid-cols-4 w-full gap-4 py-2 ">
          <div>
            <label>نوع البرنامج</label>
            <div className="flex items-center justify-center h-10 px-2 my-1">
              <Category
                selectCategory={selectCategory}
                callBack={setCategory}
              />
            </div>
          </div>
          <div>
            <label>فرع</label>
            <div className="flex items-center justify-center  h-10 px-2 my-1">
              <SubCategory
                subCategoryData={subCategoryData}
                callBack={setSubCategory}
              />
            </div>
          </div>
          <div>
            <label>المواد</label>
            <div className="flex items-center justify-center border-[1px] border-gray-200 rounded-lg h-10 px-2 my-1">
              <select className="cursor-pointer">
                <option>اختر المواد</option>
              </select>
            </div>
          </div>
          <div>
            <label>&nbsp;</label>
            <button
              onClick={clearAll}
              className="flex items-center justify-center border-[1px] text-red-400 border-red-400 rounded-lg h-10 w-full px-2 my-1 hover:bg-red-400 hover:text-white "
              // setSelected("");
              // onClick={setSelected}
            >
              حذف التعيينات
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4 p-6">
        {loding ? (
          <Loading />
        ) : (
          data?.map(({ picture, name, bio, slug }, index) => {
            return (
              <Card
                key={index}
                name={name}
                bio={bio}
                picture={picture}
                slug={slug}
                // setSlugCard={setSlugCard}
              />
            );
          })
        )}
      </div>
      <div className="p-6">
        <Pagination
          currentPage={currentPage}
          total={total}
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
          onPageChange={onPageChange}
          showPerPage={12}
        />
      </div>
    </div>
  );
}
