import axios from "axios";
import { useEffect, useState } from "react";

// import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Cities({ citiesHandelClick, setCityId, cities }: any) {
  // console.log(setCityId);

  return (
    <Select onValueChange={(event) => citiesHandelClick(event)}>
      <SelectTrigger dir="rtl" className="w-full cursor-pointer">
        <SelectValue placeholder="اختر المدينة" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel></SelectLabel>
          {cities?.map(({ name, id, index }: any) => {
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
