import { SearchVideosListItem } from "@/features/search/api/getSearchVideosList";

import * as s from "./style.css";
import Link from "next/link";
import { getVideoDetailPageLink } from "@/shared/utils/link/page";

type Props = {
  video: SearchVideosListItem;
};

export const SearchResultListItem = ({ video }: Props) => {
  const {
    thumbnail,
    title,
    channelTitle,
    publishedAtDisplayText,
    description,
    videoId,
  } = video;

  return (
    <Link href={getVideoDetailPageLink({ videoId })} className={s.link}>
      <div className={s.wrapper}>
        <div className={s.thumbnailWrapper}>
          <img
            className={s.image}
            src={thumbnail.url}
            alt={title}
            width={thumbnail.width}
            height={thumbnail.height}
          />
        </div>
        <div className={s.contentsWrapper}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.metadata}>
            {channelTitle} • {publishedAtDisplayText}
          </p>
          <p className={s.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};
