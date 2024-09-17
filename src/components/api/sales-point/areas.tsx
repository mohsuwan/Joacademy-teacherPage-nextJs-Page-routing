import axios from "axios";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Areas({ areasHandelClick, cityId, areas }: any) {
  // console.log(areas);

  return (
    <Select onValueChange={(event) => areasHandelClick(event)}>
      <SelectTrigger dir="rtl" className="w-full cursor-pointer">
        <SelectValue placeholder="اختر المنطقة" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          {areas
            ?.filter((ele: any) => cityId == ele?.city_id)
            .map(({ name, id, index }: any) => {
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
}
