import { ListResponse } from "@/shared/api/youtube/types/list";
import { InfiniteData } from "@tanstack/react-query";

export const flattenInfinityListData = <T extends {}>(
  data: InfiniteData<ListResponse<T>>
): T[] => {
  return data.pages.map((page) => page?.lists ?? []).flat();
};
