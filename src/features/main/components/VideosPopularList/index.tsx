"use client";

import { VisibilityLoader } from "@/shared/components/VisibilityLoader";
import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";
import { VideosPopularListItem } from "./ListItem";
import * as s from "./style.css";

export const VideosPopularList = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetVideosPopularList({});

  const flatData = data.pages.map((page) => page?.lists ?? []).flat();

  return (
    <>
      <section className={s.wrapper}>
        {flatData.map((item) => (
          <VideosPopularListItem key={item.videoId} video={item} />
        ))}
      </section>
      {hasNextPage && (
        <VisibilityLoader
          callback={() => {
            !isFetchingNextPage && fetchNextPage();
          }}
        />
      )}
    </>
  );
};
