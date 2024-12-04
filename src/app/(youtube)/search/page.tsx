import { SearchFilter } from "@/features/search/components/SearchFilter";
import { SearchResultList } from "@/features/search/components/SearchResultList";
import { Suspense } from "react";

export default function Search() {
  return (
    <main>
      <SearchFilter />
      <Suspense fallback={<></>}>
        <SearchResultList />
      </Suspense>
    </main>
  );
}
