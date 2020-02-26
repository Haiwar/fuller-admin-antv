import defaultSettings from "@/settings";

const title = defaultSettings.title || "Vue Admin Template By Antv";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
