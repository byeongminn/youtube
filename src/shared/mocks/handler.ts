import { getMockVideosPopularList } from "@/features/main/api/getVideosPopularList.mock";
import { getMockSearchVideosList } from "@/features/search/api/getSearchVideosList.mock";
import { getMockVideosDetail } from "@/features/videos/detail/api/getVideosDetail.mock";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [
  getMockVideosPopularList,
  getMockSearchVideosList,
  getMockVideosDetail,
];
