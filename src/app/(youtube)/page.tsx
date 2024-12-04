import { VideosPopularList } from "@/features/main/components/VideosPopularList";
import { VideosPopularListSkeleton } from "@/features/main/components/VideosPopularList/Skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<VideosPopularListSkeleton />}>
        <VideosPopularList />
      </Suspense>
    </main>
  );
}
