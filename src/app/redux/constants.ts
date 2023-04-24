import Item1 from "../../images/1.webp";
import Item1Hover from "../../images/11.webp";
import Item2 from "../../images/2.png";
import Item2Hover from "../../images/22.png";
import Item3 from "../../images/31.webp";
import Item3Hover from "../../images/33.webp";
import Item4 from "../../images/4.webp";
import Item4Hover from "../../images/44.webp";
import Item5 from "../../images/5.webp";
import Item5Hover from "../../images/55.webp";
import Item6 from "../../images/6.webp";
import Item6Hover from "../../images/66.webp";
import { IItem } from "./interface";

export const items: IItem[] = [
    {
      id: 1,
      src: Item1,
      srcHover: Item1Hover,
      price:330
    },
    { id: 2, src: Item2, srcHover: Item2Hover, price:250},
    { id: 3, src: Item3, srcHover: Item3Hover,price:210 },
    { id: 4, src: Item4, srcHover: Item4Hover,price:300},
    { id: 5, src: Item5, srcHover: Item5Hover,price:200 },
    { id: 6, src: Item6, srcHover: Item6Hover,price:230 },
    { id: 7, src: Item3, srcHover: Item3Hover,price:280 },
    { id: 8, src: Item4, srcHover: Item4Hover,price:240},
  ];