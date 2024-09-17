import { useEffect, useState } from "react";
import axios from "axios";
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

interface SubCategory {
  id: number;
  name: string;
}
function SubCategory({
  subCategoryData,
  callBack,
}: // clear,
{
  subCategoryData: SubCategory[];
  callBack: any;
}) {
  return (
    
    <Select onOpenChange={(event) => event}>
      <SelectTrigger className="w-full cursor-pointer">
        <SelectValue placeholder="اختر الفرع" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel value={""}>فرع</SelectLabel> */}
          {subCategoryData?.map(({ name, id }, index) => {
            return (
              <>
                <SelectItem key={index} value={id}>
                  {name}
                </SelectItem>
              </>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );

  // return (
  //   <div>
  //     <select onChange={(event) => callBack(event.target.value)}>
  //       <option value={""}>اختر الفرع</option>
  //       {subCategoryData?.map(({ name, id }, index) => {
  //         return (
  //           <>
  //             <option key={index} value={id}>
  //               {name}
  //             </option>
  //           </>
  //         );
  //       })}
  //     </select>
  //   </div>
  // );
}
export default SubCategory;
