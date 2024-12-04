import {
  InfiniteData,
  UseSuspenseInfiniteQueryResult,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import {
  GetSearchVideosListRequestParams,
  GetSearchVideosListResponse,
  getSearchVideosList,
  getSearchVideosListURL,
} from "../api/getSearchVideosList";

type Params = Pick<GetSearchVideosListRequestParams, "q" | "order"> & {
  initPageToken?: string;
};

export const useGetSearchVideosList = ({
  q,
  order,
  initPageToken,
}: Params): UseSuspenseInfiniteQueryResult<
  InfiniteData<GetSearchVideosListResponse>,
  Error
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["search", getSearchVideosListURL, q, order, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) => {
      return await getSearchVideosList({ q, order, pageToken: pageParam });
    },
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
    getPreviousPageParam: (firstPage) => firstPage.prevPageToken,
  });
};
