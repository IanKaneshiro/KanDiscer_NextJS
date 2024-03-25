import { useEffect, useState } from "react";
import style from "./bags.module.css";
import Link from "next/link";

const BagsNavigationBar = () => {
  return (
    <div>
      <div className={style.navbar}>
        <button>Add a new bag</button>
        <select>
          <option value="">Select your bag...</option>
        </select>
      </div>

      <Link href="/bags/:bagId">Specific bag</Link>
    </div>
  );
};

export default BagsNavigationBar;
