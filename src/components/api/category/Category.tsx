import { useEffect, useState } from "react";
import axios from "axios";

export default Category;
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Category({
  selectCategory,
  callBack,
}: {
  selectCategory: string;
  callBack: (catgeroyID: string) => void;
}) {
  const [selectCategoryfun, setSelectCategoryfan] = useState([]);
  // console.log(selectCategory);
  // console.log(callBack);
  // const contextCategory = useContext(setSelectCategory)
  // const sentdatatopatrent = () => {
  //   setSelectCategoryfan([]);
  // };
  // selectCategoryfun
  useEffect(() => {
    try {
      axios
        .get("https://admin.joacademy.net/api/v2/programs/category?id=1")
        .then((selectCategoryfun) => {
          setSelectCategoryfan(selectCategoryfun.data.data);
        });
    } catch (error) {
      console.log("eroor", error);
    }
  }, []);

  return (
    <Select
      value={selectCategory}
      onValueChange={(event) => callBack(event)}
      // onChange={(event) => callBack(event.target.value)}
      // className="cursor-pointer"
    >
      <SelectTrigger className="w-full cursor-pointer">
        <SelectValue placeholder="اختر نوع البرنامج" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          {selectCategoryfun?.map(({ name, id }, index) => {
            return (
              <SelectItem key={index} value={id}>
                {name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
  // return (
  //   <div>
  //     <select
  //       value={selectCategory}
  //       className="cursor-pointer"
  //       onChange={(event) => callBack(event.target.value)}
  //     >
  //       <option value={""}>تختر نوع البرنامج</option>
  //       {selectCategoryfun?.map(({ name, id }, index) => {
  //         return (
  //           <option key={index} value={id}>
  //             {name}
  //           </option>
  //         );
  //       })}
  //     </select>
  //   </div>
  // );
}

// export function SelectDemo() {
// }
