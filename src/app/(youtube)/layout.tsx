import { SearchNavigationBar } from "@/shared/components/SearchNavigationBar";
import { NAVIGATION_BAR_HEIGHT } from "@/shared/components/SearchNavigationBar/style.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SearchNavigationBar />
      <div style={{ marginTop: NAVIGATION_BAR_HEIGHT }}>{children}</div>
    </div>
  );
}
