import { API_BASE_URL } from "@/shared/api/constants";
import { VideoThumbnail } from "@/shared/api/youtube/types/item";
import {
  ListPageApiInfo,
  ListResponse,
  VideoListItem,
} from "@/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type GetVideosPopularListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;

export type PopularListItem = {
  viewCount: number;
  viewCountDisplayText: string; // 23만
} & VideoListItem;

export type GetVideosPopularListResponse = ListResponse<PopularListItem>;

export const getVideosPopularListURL = `${API_BASE_URL}/api/videos/popular-list`;

export const getVideosPopularList = async (
  params: GetVideosPopularListRequestParams
): Promise<GetVideosPopularListResponse> => {
  const queryParams = queryString.stringify(params);

  const url = `${getVideosPopularListURL}?${queryParams}`;

  const response = await fetch(url);

  return await response.json();
};
