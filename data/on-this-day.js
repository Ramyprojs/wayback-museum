export const onThisDayEvents = {
  "03-24": [
    "1999: The Melissa macro virus begins spreading through email systems globally.",
    "2000: Dot-com spending peaks as ad budgets flood early web portals.",
    "2006: Major social networks begin overtaking portal homepages in daily traffic."
  ],
  "01-15": [
    "2001: Wikipedia officially launches as a free collaborative encyclopedia.",
    "2004: Browser adoption accelerates after major tabbed browsing releases."
  ],
  "04-01": [
    "2004: Gmail launches in beta with 1 GB storage and changes email expectations.",
    "1996: Early web prank culture matures into annual April internet traditions."
  ],
  "08-16": [
    "1995: Internet Explorer begins shipping with Windows 95 add-ons.",
    "2000: Portal competition intensifies around integrated search and email."
  ]
};

export function getTodayEvents(date = new Date()) {
  const key = `${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  return onThisDayEvents[key] || [
    "The early web never stood still: something big launched, broke, or vanished this week.",
    "Check the timeline and archive pages to explore the era around this date."
  ];
}
