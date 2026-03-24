import { getAllExhibits } from "@/lib/repository";

export default async function sitemap() {
  const base = "http://localhost:3000";
  const exhibits = await getAllExhibits();

  const staticRoutes = [
    "",
    "/archive",
    "/graveyard",
    "/firsts",
    "/timeline",
    "/dialup",
    "/archaeology",
    "/acquisitions",
    "/submit",
    "/about"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));

  const exhibitRoutes = exhibits.map((item) => ({
    url: `${base}/archive/${item.slug}`,
    lastModified: item.created_at ? new Date(item.created_at) : new Date()
  }));

  return [...staticRoutes, ...exhibitRoutes];
}
