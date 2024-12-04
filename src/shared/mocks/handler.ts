import { getMockVideosPopularList } from "@/features/main/api/getVideosPopularList.mock";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [getMockVideosPopularList];
