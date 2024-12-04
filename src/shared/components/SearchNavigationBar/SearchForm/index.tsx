"use client";

import { useRouter, useSearchParams } from "next/navigation";
import * as s from "./style.css";

export const SearchForm = () => {
  const searchParams = useSearchParams();
  const initialSearchValue = searchParams.get("q") ?? "";

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const queryInput = form.elements.namedItem("query") as HTMLInputElement;
    const queryValue = queryInput?.value ?? "";

    console.log("검색: ", queryValue);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        defaultValue={initialSearchValue}
        name="query"
        type="text"
        className={s.input}
        placeholder="검색"
      />
      <button type="submit" className={s.button}>
        🔍
      </button>
    </form>
  );
};
