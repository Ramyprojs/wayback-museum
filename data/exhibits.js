const baseExhibits = [
  {
    slug: "geocities",
    name: "GeoCities",
    url_original: "http://www.geocities.com",
    wayback_url: "https://web.archive.org/web/*/geocities.com",
    successor_url: null,
    years_active_start: 1994,
    years_active_end: 2009,
    category: "Personal/GeoCities",
    status: "archived",
    short_description:
      "The neighborhood-based home page service that gave millions of people their first personal site.",
    full_story:
      "GeoCities began in 1994 as Beverly Hills Internet and quickly became one of the most recognizable homes for personal publishing on the early web. It organized pages into themed neighborhoods, making a sprawling and chaotic internet feel like a map you could actually walk through.\n\nBy the late 1990s GeoCities represented amateur web culture at full volume: animated GIFs, MIDI music, guestbooks, and hand-coded HTML experiments everywhere. Yahoo acquired the company in 1999 for billions during the dot-com boom, turning it into a mainstream entry point for first-time creators.\n\nAs blogging platforms and social media replaced static home pages, GeoCities traffic and relevance faded. Yahoo shut the US service in 2009, though archives and preservation groups saved large portions. Today GeoCities survives as a symbol of web creativity before platform standardization.",
    peak_visitors: "35 million monthly visitors",
    country_origin: "United States",
    what_made_it_special: [
      "Neighborhood metaphor that organized personal pages by interest",
      "Mass participation in hand-built web design",
      "A visual language of GIFs, marquees, and guestbooks"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: true,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "napster",
    name: "Napster",
    url_original: "http://www.napster.com",
    wayback_url: "https://web.archive.org/web/*/napster.com",
    successor_url: "https://www.napster.com",
    years_active_start: 1999,
    years_active_end: 2001,
    category: "Entertainment",
    status: "reborn",
    short_description:
      "Peer-to-peer file sharing giant that rewired music discovery and provoked an industry-wide legal war.",
    full_story:
      "Napster launched in 1999 and made digital music sharing effortless for ordinary users. Instead of slow, scattered downloads, it offered searchable MP3 catalogs through a central index connected to user computers.\n\nUsage exploded among students and young listeners who suddenly had near-instant access to massive libraries. At the same time, labels and artists argued that uncontrolled sharing undermined copyright and collapsed existing distribution models.\n\nCourt rulings forced the original service to shut down in 2001. The name later returned through licensed services under different ownership. Napster remains one of the defining stories of internet disruption, legality, and the shift to streaming-era expectations.",
    peak_visitors: "26.4 million users",
    country_origin: "United States",
    what_made_it_special: [
      "Simple search-first MP3 sharing",
      "Cultural flashpoint for digital copyright law",
      "Changed listener expectations for instant access"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: true,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "altavista",
    name: "AltaVista",
    url_original: "http://www.altavista.com",
    wayback_url: "https://web.archive.org/web/*/altavista.com",
    successor_url: null,
    years_active_start: 1995,
    years_active_end: 2013,
    category: "Search Engines",
    status: "gone",
    short_description:
      "A pioneering search engine known for speed, broad indexing, and early web translation tools.",
    full_story:
      "AltaVista was introduced in 1995 by Digital Equipment Corporation as a demonstration of search technology and hardware performance. It quickly gained attention because it indexed a large share of the web and delivered results fast for the era.\n\nAs the web commercialized, AltaVista tried to evolve from pure search into a portal, adding news, shopping, and other content layers. That move reflected the dominant strategy of late-1990s internet businesses, but it diluted the clean search experience that made users loyal.\n\nCompetition intensified and Google eventually dominated search through relevance and simplicity. AltaVista changed owners several times before Yahoo closed it in 2013. It is remembered as one of the first engines that made the growing web feel searchable at scale.",
    peak_visitors: "Around 80 million monthly users at peak era",
    country_origin: "United States",
    what_made_it_special: [
      "Large early web index",
      "Fast query response in dial-up years",
      "Babelfish translation became a widely known tool"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: true,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "ask-jeeves",
    name: "Ask Jeeves",
    url_original: "http://www.askjeeves.com",
    wayback_url: "https://web.archive.org/web/*/askjeeves.com",
    successor_url: "https://www.ask.com",
    years_active_start: 1997,
    years_active_end: 2006,
    category: "Search Engines",
    status: "reborn",
    short_description:
      "Question-and-answer styled search with a butler mascot that made the web feel conversational.",
    full_story:
      "Ask Jeeves launched in 1997 with a playful idea: users could type natural-language questions instead of keyword strings. The service framed search as an approachable helper experience, led by its iconic butler character.\n\nIts branded personality stood out in a crowded portal landscape, and many first-time users found the concept friendlier than technical search syntax. Over time, however, relevance quality and index breadth became decisive factors across the industry.\n\nThe company eventually rebranded toward Ask.com and retired the Jeeves character from center stage. While the original interface faded, Ask Jeeves is still remembered for normalizing conversational search behavior long before modern interfaces made it standard.",
    peak_visitors: "Over 40 million monthly visitors in early 2000s",
    country_origin: "United States",
    what_made_it_special: [
      "Natural-language query framing",
      "Strong mascot-driven brand identity",
      "Early push toward user-friendly search interaction"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: true,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "myspace",
    name: "MySpace",
    url_original: "http://www.myspace.com",
    wayback_url: "https://web.archive.org/web/*/myspace.com",
    successor_url: "https://myspace.com",
    years_active_start: 2003,
    years_active_end: null,
    category: "Social",
    status: "reborn",
    short_description:
      "The customizable social network where profile music, top friends, and HTML themes defined identity.",
    full_story:
      "MySpace launched in 2003 and rapidly became a central hub for online social identity, especially among younger users. It allowed deep profile customization with HTML and CSS tweaks, creating a wild visual culture unlike later standardized platforms.\n\nMusic communities grew quickly, and artists used MySpace to publish tracks and build fan bases before streaming platforms became dominant. The site became a cultural marker of mid-2000s internet life, including social rituals like Top 8 rankings.\n\nAfter Facebook's cleaner interface and broader network effects took over, MySpace lost mainstream momentum. The brand still exists in reduced form and changed strategic focus, but its original era remains one of the most influential chapters in social web history.",
    peak_visitors: "115 million monthly visitors (2008)",
    country_origin: "United States",
    what_made_it_special: [
      "Deep profile customization and expressive identity",
      "Major launchpad for independent musicians",
      "Defined social norms for an entire generation"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: true,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "friendster",
    name: "Friendster",
    url_original: "http://www.friendster.com",
    wayback_url: "https://web.archive.org/web/*/friendster.com",
    successor_url: null,
    years_active_start: 2002,
    years_active_end: 2015,
    category: "Social",
    status: "gone",
    short_description:
      "An early social network that introduced profile-based friend graphs to mainstream audiences.",
    full_story:
      "Friendster launched in 2002 and quickly attracted users eager to map real-world friendships online. Its profile and friend-connection model strongly influenced later social platforms that would scale globally.\n\nThe service struggled with performance as demand surged, and site reliability became a long-running complaint. As alternatives improved speed and user experience, migration accelerated away from Friendster in key markets.\n\nThe company later attempted pivots, including gaming, before shutting down in 2015. Even with its decline, Friendster occupies a foundational place in social networking history as one of the first major graph-based communities.",
    peak_visitors: "Over 100 million registered users",
    country_origin: "United States",
    what_made_it_special: [
      "Popularized social graph mechanics",
      "Influenced profile-driven network design",
      "Strong early adoption in Southeast Asia"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "neopets",
    name: "Neopets",
    url_original: "http://www.neopets.com",
    wayback_url: "https://web.archive.org/web/*/neopets.com",
    successor_url: "https://www.neopets.com",
    years_active_start: 1999,
    years_active_end: null,
    category: "Gaming",
    status: "reborn",
    short_description:
      "Virtual pets, browser games, and a kid-safe economy made Neopets a daily ritual for millions.",
    full_story:
      "Neopets started in 1999 as a virtual pet platform where users cared for digital creatures and earned currency through mini-games. It combined collection, role-play, and light economic systems in a browser-first world.\n\nIts bright visual design and frequent events helped users build long-term habits, while social features made it feel like a full online world. For many players, Neopets was both a game and an introduction to internet community norms.\n\nThough ownership and direction changed over the years, the brand endured through nostalgia and dedicated fans. Neopets remains active in successor form, showing unusual longevity for an early 2000s web game ecosystem.",
    peak_visitors: "35 million users by 2005",
    country_origin: "United Kingdom",
    what_made_it_special: [
      "Persistent virtual world in the browser",
      "Accessible mini-game and economy loop",
      "Long-running fan loyalty"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "homestar-runner",
    name: "Homestar Runner",
    url_original: "http://www.homestarrunner.com",
    wayback_url: "https://web.archive.org/web/*/homestarrunner.com",
    successor_url: "https://homestarrunner.com",
    years_active_start: 2000,
    years_active_end: null,
    category: "Entertainment",
    status: "reborn",
    short_description:
      "Flash-era comedy universe that thrived through animation, inside jokes, and weekly updates.",
    full_story:
      "Homestar Runner emerged around 2000 as a handcrafted animation site built around recurring characters and absurd humor. During the Flash era it became one of the web's most beloved independent comedy destinations.\n\nThe site rewarded repeat visits through serialized jokes, hidden links, and a distinct voice that spread through school labs and office desktops alike. Its Strong Bad Emails in particular shaped internet comedy cadence for a generation of fans.\n\nWhen Flash declined, the creators paused major output but later returned with selective updates. Homestar Runner still exists as a cultural artifact and active archive of a period when independent web animation could define mainstream internet humor.",
    peak_visitors: "Millions of weekly views in peak Flash era",
    country_origin: "United States",
    what_made_it_special: [
      "Original web-native animation style",
      "Serialized comedy with cult fanbase",
      "Interactive hidden jokes in site navigation"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "newgrounds",
    name: "Newgrounds",
    url_original: "http://www.newgrounds.com",
    wayback_url: "https://web.archive.org/web/*/newgrounds.com",
    successor_url: "https://www.newgrounds.com",
    years_active_start: 1995,
    years_active_end: null,
    category: "Entertainment",
    status: "reborn",
    short_description:
      "A creator-first portal for Flash animation and games that launched internet legends.",
    full_story:
      "Newgrounds began in 1995 and became a central stage for user-submitted animation and browser games. It was one of the earliest mainstream platforms where independent creators could publish directly to a massive audience.\n\nIts ratings, community forums, and contests built a merit-driven culture that helped artists improve and get discovered. Many creators who later entered mainstream media first built followings through Newgrounds projects.\n\nDespite the decline of Flash, Newgrounds adapted and stayed online, preserving older work while supporting newer formats. It remains one of the strongest examples of durable internet community infrastructure from the early web era.",
    peak_visitors: "Tens of millions of monthly visitors in Flash peak",
    country_origin: "United States",
    what_made_it_special: [
      "Open publishing for indie animators and game makers",
      "Community moderation and rating culture",
      "Long-term preservation of Flash-era creativity"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "xanga",
    name: "Xanga",
    url_original: "http://www.xanga.com",
    wayback_url: "https://web.archive.org/web/*/xanga.com",
    successor_url: "https://xanga.com",
    years_active_start: 1999,
    years_active_end: null,
    category: "Social",
    status: "reborn",
    short_description:
      "Blogging-meets-social platform where journals, comments, and rings built intimate online circles.",
    full_story:
      "Xanga launched in 1999 and evolved from a sharing utility into a personal publishing platform with strong social features. It was especially popular among teens and students who treated it as both diary and social feed.\n\nUsers customized layouts, posted long reflections, and built communities through comments and web rings. Compared with later short-form networks, Xanga encouraged longer personal writing and sustained interaction among regular readers.\n\nTraffic declined as newer social platforms shifted habits, and Xanga underwent ownership and product changes. The name persisted in reduced forms, but its classic era captures a moment when blogging and social identity lived in the same interface.",
    peak_visitors: "30+ million users in peak period",
    country_origin: "United States",
    what_made_it_special: [
      "Hybrid of blog, community, and profile",
      "Strong culture of long-form personal posts",
      "Comment-driven micro-communities"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "livejournal",
    name: "LiveJournal",
    url_original: "http://www.livejournal.com",
    wayback_url: "https://web.archive.org/web/*/livejournal.com",
    successor_url: "https://www.livejournal.com",
    years_active_start: 1999,
    years_active_end: null,
    category: "Forums",
    status: "reborn",
    short_description:
      "Community journaling platform that blended blogging, fandom, and threaded discussion culture.",
    full_story:
      "LiveJournal launched in 1999 and gave users a structured way to maintain journals with privacy controls and friend lists. It quickly became an influential home for fandom, niche communities, and personal writing.\n\nUnlike many later social networks, LiveJournal emphasized posts and comment threads rather than endless algorithmic feeds. Communities formed around shared interests and often developed sophisticated moderation and posting norms.\n\nThe platform changed ownership and regional focus over time, reducing its influence in many markets. Even so, its architecture and community practices left a lasting mark on online discourse and identity formation.",
    peak_visitors: "Millions of active journals in the 2000s",
    country_origin: "United States",
    what_made_it_special: [
      "Journaling plus community groups",
      "Flexible privacy controls for posts",
      "Deep role in fandom and online subcultures"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "bolt",
    name: "Bolt.com",
    url_original: "http://www.bolt.com",
    wayback_url: "https://web.archive.org/web/*/bolt.com",
    successor_url: null,
    years_active_start: 1996,
    years_active_end: 2007,
    category: "Social",
    status: "gone",
    short_description:
      "A youth-focused social portal mixing profiles, chat, and forums before social media matured.",
    full_story:
      "Bolt.com launched in the mid-1990s as a destination for teens and young adults seeking online community. It combined messaging, profiles, chat, and editorial content into a portal format typical of the era.\n\nAs advertising models tightened and competition increased, sustaining broad social portals became difficult. Bolt attempted redesigns and community features, but network effects shifted toward larger platforms.\n\nBy the late 2000s the site shut down, leaving only archived snapshots. Bolt is often remembered as a transitional platform between early chat communities and modern social networks.",
    peak_visitors: "Over 10 million registered users",
    country_origin: "United States",
    what_made_it_special: [
      "Youth-centered online community design",
      "Portal style with social tools and media",
      "Important bridge between chat rooms and modern social platforms"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "ivillage",
    name: "iVillage",
    url_original: "http://www.ivillage.com",
    wayback_url: "https://web.archive.org/web/*/ivillage.com",
    successor_url: null,
    years_active_start: 1995,
    years_active_end: 2018,
    category: "News & Media",
    status: "gone",
    short_description:
      "One of the largest online communities and content hubs focused on women and family life.",
    full_story:
      "iVillage launched in 1995 and built a major audience around health, parenting, relationships, and lifestyle content. It paired editorial programming with active message boards, creating a strong community identity.\n\nDuring the portal era, iVillage stood out by focusing on audience needs that were often underserved elsewhere. The brand expanded through partnerships and acquisitions as digital media models evolved through the 2000s.\n\nAfter changes in ownership and strategy, iVillage eventually shut down as a standalone destination. Its influence persists in the modern blend of niche content verticals with community discussion features.",
    peak_visitors: "30 million monthly uniques at peak",
    country_origin: "United States",
    what_made_it_special: [
      "Focused community and editorial voice",
      "Strong forum participation around life topics",
      "Pioneered targeted digital media verticals"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "excite",
    name: "Excite",
    url_original: "http://www.excite.com",
    wayback_url: "https://web.archive.org/web/*/excite.com",
    successor_url: "https://www.excite.com",
    years_active_start: 1994,
    years_active_end: null,
    category: "Search Engines",
    status: "reborn",
    short_description:
      "Search-to-portal heavyweight that helped define homepage culture in the late 1990s.",
    full_story:
      "Excite started in 1994 as a search technology company and quickly expanded into a major portal destination. For many users, Excite became the front door to news, email, search, and daily web browsing.\n\nIts growth reflected the period when portals competed to keep users inside broad ecosystems. Mergers and strategic bets during the dot-com years made the company a visible player, though the market eventually shifted toward specialist services and cleaner search-first experiences.\n\nThe Excite brand survived through later transitions and remains online in successor forms. Its peak years represent the moment when portal homepages tried to be the internet in one page.",
    peak_visitors: "Tens of millions monthly at portal peak",
    country_origin: "United States",
    what_made_it_special: [
      "Early blend of search, media, and communication tools",
      "Highly recognizable portal homepage format",
      "Major presence during first internet boom"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "lycos",
    name: "Lycos",
    url_original: "http://www.lycos.com",
    wayback_url: "https://web.archive.org/web/*/lycos.com",
    successor_url: "https://www.lycos.com",
    years_active_start: 1994,
    years_active_end: null,
    category: "Search Engines",
    status: "reborn",
    short_description:
      "A foundational search and portal brand that evolved through several internet business eras.",
    full_story:
      "Lycos was created in 1994 from a Carnegie Mellon research project and became one of the web's earliest popular search engines. It expanded rapidly as internet usage grew and portal strategies became dominant.\n\nThe brand added mail, hosting, and media features to compete in homepage wars. Corporate ownership changed several times, mirroring the volatility of early internet consolidation and international expansion.\n\nWhile no longer central to everyday browsing, Lycos still exists and remains historically significant. It demonstrates how academic search research became commercial infrastructure for the public web.",
    peak_visitors: "Up to 50 million monthly visitors in late 1990s",
    country_origin: "United States",
    what_made_it_special: [
      "University research roots in web search",
      "Major early portal expansion",
      "Long-lived brand through multiple market cycles"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "theglobe",
    name: "TheGlobe.com",
    url_original: "http://www.theglobe.com",
    wayback_url: "https://web.archive.org/web/*/theglobe.com",
    successor_url: null,
    years_active_start: 1995,
    years_active_end: 2008,
    category: "Social",
    status: "gone",
    short_description:
      "Early social networking experiment famous for one of the dot-com era's wildest IPO stories.",
    full_story:
      "TheGlobe.com launched in 1995 with a focus on community spaces, personal publishing, and online interaction. It gave users tools to join interest groups and build identity before social networking had settled into familiar formats.\n\nThe company became famous during the dot-com boom for a dramatic IPO surge that symbolized market hype around internet startups. Underneath that spectacle, it still represented real experimentation in large-scale user communities.\n\nAs the bubble burst and competition intensified, the platform's influence declined and operations changed course. The site eventually disappeared as a major destination, but its story remains a cautionary and iconic chapter of early web economics.",
    peak_visitors: "Millions of registered community members",
    country_origin: "United States",
    what_made_it_special: [
      "Very early social community model",
      "Landmark dot-com IPO moment",
      "Precursor to profile and group-based web interaction"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "deja-news",
    name: "Deja News",
    url_original: "http://www.dejanews.com",
    wayback_url: "https://web.archive.org/web/*/dejanews.com",
    successor_url: "https://groups.google.com",
    years_active_start: 1995,
    years_active_end: 2001,
    category: "Forums",
    status: "reborn",
    short_description:
      "Usenet search and archive service that made decades of online discussion discoverable.",
    full_story:
      "Deja News launched in 1995 and indexed Usenet postings, making distributed discussion archives searchable from the web. This transformed a vast text ecosystem into something casual users could navigate.\n\nResearchers, hobbyists, and journalists used Deja News to trace conversations and technical advice across years of posts. It acted as both a discovery engine and a memory layer for early online culture.\n\nGoogle acquired the archive in 2001 and integrated it into Google Groups. Deja News disappeared as a standalone brand, but its preservation mission lived on through successor infrastructure.",
    peak_visitors: "One of the largest searchable Usenet indexes",
    country_origin: "United States",
    what_made_it_special: [
      "Searchable archive of Usenet discussions",
      "Preserved long-tail technical and cultural knowledge",
      "Bridge between pre-web and web-era communities"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "mp3com",
    name: "MP3.com",
    url_original: "http://www.mp3.com",
    wayback_url: "https://web.archive.org/web/*/mp3.com",
    successor_url: null,
    years_active_start: 1997,
    years_active_end: 2003,
    category: "Entertainment",
    status: "gone",
    short_description:
      "A massive early destination for legal digital music distribution and indie artist discovery.",
    full_story:
      "MP3.com launched in 1997 as a hub for digital music listening, downloads, and independent artist exposure. It helped normalize the idea that music careers could begin on the open web without traditional label pathways.\n\nThe platform offered tools for artists and became a high-traffic destination during the transition from CDs to digital files. Legal battles around specific services and licensing complicated its trajectory during a turbulent period for music rights online.\n\nAfter acquisitions and strategic changes, MP3.com faded as a core destination and eventually shut down in its original form. Its legacy survives in the independent distribution culture that became standard in later music platforms.",
    peak_visitors: "Roughly 10 million unique monthly visitors",
    country_origin: "United States",
    what_made_it_special: [
      "Indie artist distribution at scale",
      "Mainstreamed web-native music discovery",
      "Early test case for online music rights conflict"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "kazaa",
    name: "Kazaa",
    url_original: "http://www.kazaa.com",
    wayback_url: "https://web.archive.org/web/*/kazaa.com",
    successor_url: null,
    years_active_start: 2001,
    years_active_end: 2012,
    category: "Entertainment",
    status: "gone",
    short_description:
      "Post-Napster peer-to-peer giant known for massive scale and controversial file-sharing culture.",
    full_story:
      "Kazaa rose in the early 2000s as one of the largest peer-to-peer file sharing networks after Napster's shutdown. It supported decentralized exchange of music and other media files at huge volume.\n\nFor users, Kazaa offered convenience and breadth; for rights holders, it represented a continuation of unauthorized distribution problems. The platform also became associated with security concerns, including bundled adware and malware risks in some versions.\n\nLegal pressure and market shifts eventually ended Kazaa's original role in internet culture. It remains part of the broader story of how media consumption habits changed faster than licensing and platform governance.",
    peak_visitors: "Hundreds of millions of downloads of client software",
    country_origin: "Netherlands",
    what_made_it_special: [
      "Massive decentralized sharing network",
      "Key successor to Napster-era behavior",
      "Critical chapter in digital media legality debates"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "angelfire",
    name: "Angelfire",
    url_original: "http://www.angelfire.com",
    wayback_url: "https://web.archive.org/web/*/angelfire.com",
    successor_url: "https://www.angelfire.com",
    years_active_start: 1996,
    years_active_end: null,
    category: "Personal/GeoCities",
    status: "reborn",
    short_description:
      "One of the classic free web hosting homes for personal pages, fandom shrines, and niche guides.",
    full_story:
      "Angelfire launched in 1996 and offered free hosting tools that brought amateur site creation to wide audiences. Along with peers like GeoCities, it became a canvas for personal expression in the pre-social era.\n\nUsers built fan pages, tutorials, diaries, and tightly focused hobby archives with minimal barriers to entry. The platform's DIY spirit helped establish norms for linking, attribution, and niche community knowledge sharing.\n\nThough no longer central to internet culture, Angelfire survives in reduced form and through extensive archives. Its enduring value is historical: a record of web publishing before templates and feeds flattened personal style.",
    peak_visitors: "Millions of hosted pages",
    country_origin: "United States",
    what_made_it_special: [
      "Free personal hosting for non-technical users",
      "Strong long-tail niche and fandom archives",
      "Iconic raw HTML aesthetic"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: true,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "askcom",
    name: "Ask.com",
    url_original: "http://www.ask.com",
    wayback_url: "https://web.archive.org/web/*/ask.com",
    successor_url: "https://www.ask.com",
    years_active_start: 2006,
    years_active_end: null,
    category: "Search Engines",
    status: "reborn",
    short_description:
      "The post-Jeeves evolution of Ask, retaining a Q and A identity while adapting to modern search.",
    full_story:
      "After the Ask Jeeves era, Ask.com continued as a search-oriented brand with changing strategies across results aggregation and Q and A formats. It represented an attempt to maintain identity while operating in a market increasingly dominated by a few giants.\n\nThe platform evolved interfaces and partnerships through the late 2000s and 2010s, often focusing on narrower audiences and utility categories. Although it never reclaimed top-tier share, it remained a recognizable name from the first generation of web search brands.\n\nAsk.com persists online, making it a partial survival story rather than a complete disappearance. In museum terms it shows how brands can outlive their original cultural peak while still carrying historical memory.",
    peak_visitors: "Major US web property in mid-2000s",
    country_origin: "United States",
    what_made_it_special: [
      "Carried forward natural-language search branding",
      "Adapted legacy identity to a consolidated search market",
      "Represents long-tail survival of first-wave web brands"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  },
  {
    slug: "dejanews-successor",
    name: "Google Groups (Deja News Successor)",
    url_original: "http://groups.google.com",
    wayback_url: "https://web.archive.org/web/*/groups.google.com",
    successor_url: "https://groups.google.com",
    years_active_start: 2001,
    years_active_end: null,
    category: "Forums",
    status: "archived",
    short_description:
      "Continuation path of searchable Usenet archives after Deja News disappeared as a standalone brand.",
    full_story:
      "When Google acquired Deja News assets in 2001, it inherited a major archive of Usenet history. Google Groups became the practical continuation path for users who relied on searchable historical threads.\n\nThe transition reflected how independent web services were absorbed into large ecosystems during consolidation years. While brand identity changed, much of the archival utility remained available to researchers and long-term community participants.\n\nIn the context of internet preservation, this successor story matters because it prevented a major memory loss event. It also demonstrates the trade-off between brand disappearance and data continuity.",
    peak_visitors: "High sustained usage as archive and discussion tool",
    country_origin: "United States",
    what_made_it_special: [
      "Preserved historical Usenet records",
      "Bridged legacy forums into modern web infrastructure",
      "A living continuation of pre-web discussion culture"
    ],
    thumbnail_url: "/icons/retro-site.svg",
    featured: false,
    created_at: "2026-03-24T00:00:00.000Z"
  }
];

const expansionSeed = [
  {
    slug: "tripod",
    name: "Tripod",
    domain: "tripod.com",
    years_active_start: 1994,
    years_active_end: null,
    category: "Personal/GeoCities",
    status: "archived",
    short_description:
      "Free homepage hosting that helped early users publish personal sites without owning servers.",
    peak_visitors: "Millions of hosted pages",
    country_origin: "United States"
  },
  {
    slug: "homestead",
    name: "Homestead",
    domain: "homestead.com",
    years_active_start: 1996,
    years_active_end: null,
    category: "Personal/GeoCities",
    status: "archived",
    short_description:
      "Site builder service that made small-business and personal web publishing easier in the dial-up era.",
    peak_visitors: "Large SMB web-builder user base",
    country_origin: "United States"
  },
  {
    slug: "aol-hometown",
    name: "AOL Hometown",
    domain: "hometown.aol.com",
    years_active_start: 1998,
    years_active_end: 2008,
    category: "Personal/GeoCities",
    status: "gone",
    short_description:
      "AOL's personal page hosting service that introduced many mainstream users to first-time publishing.",
    peak_visitors: "Major consumer ISP audience",
    country_origin: "United States"
  },
  {
    slug: "msn-spaces",
    name: "MSN Spaces",
    domain: "spaces.msn.com",
    years_active_start: 2004,
    years_active_end: 2011,
    category: "Social",
    status: "gone",
    short_description:
      "Microsoft's social blogging platform that linked profiles, photos, and personal updates before feed apps matured.",
    peak_visitors: "Tens of millions of users",
    country_origin: "United States"
  },
  {
    slug: "webring",
    name: "WebRing",
    domain: "webring.com",
    years_active_start: 1994,
    years_active_end: 2020,
    category: "Forums",
    status: "gone",
    short_description:
      "Link circles that connected niche sites into discoverable communities before algorithmic recommendations.",
    peak_visitors: "Hundreds of thousands of member sites",
    country_origin: "United States"
  },
  {
    slug: "blogrings",
    name: "BlogRings",
    domain: "blogrings.com",
    years_active_start: 2003,
    years_active_end: 2008,
    category: "Forums",
    status: "gone",
    short_description:
      "Blog discovery network that grouped independent writers into themed clusters.",
    peak_visitors: "Large long-tail blogging footprint",
    country_origin: "United States"
  },
  {
    slug: "bebo",
    name: "Bebo",
    domain: "bebo.com",
    years_active_start: 2005,
    years_active_end: null,
    category: "Social",
    status: "reborn",
    short_description:
      "Social network that became especially influential in the UK and Ireland during the mid-2000s.",
    peak_visitors: "40+ million users",
    country_origin: "United Kingdom"
  },
  {
    slug: "hi5",
    name: "Hi5",
    domain: "hi5.com",
    years_active_start: 2003,
    years_active_end: null,
    category: "Social",
    status: "reborn",
    short_description:
      "Profile-based social network with strong international growth before Facebook standardization.",
    peak_visitors: "70+ million users",
    country_origin: "United States"
  },
  {
    slug: "orkut",
    name: "Orkut",
    domain: "orkut.com",
    years_active_start: 2004,
    years_active_end: 2014,
    category: "Social",
    status: "gone",
    short_description:
      "Google's early social network that dominated in Brazil and India for years.",
    peak_visitors: "100+ million accounts",
    country_origin: "United States"
  },
  {
    slug: "google-plus",
    name: "Google+",
    domain: "plus.google.com",
    years_active_start: 2011,
    years_active_end: 2019,
    category: "Social",
    status: "gone",
    short_description:
      "Google's large social networking push built around circles and identity integration.",
    peak_visitors: "Hundreds of millions of signed-up users",
    country_origin: "United States"
  },
  {
    slug: "yahoo-360",
    name: "Yahoo! 360",
    domain: "360.yahoo.com",
    years_active_start: 2005,
    years_active_end: 2009,
    category: "Social",
    status: "gone",
    short_description:
      "Yahoo's social blogging service combining profiles, lists, and friend updates.",
    peak_visitors: "Large Yahoo account ecosystem",
    country_origin: "United States"
  },
  {
    slug: "sixdegrees",
    name: "SixDegrees",
    domain: "sixdegrees.com",
    years_active_start: 1997,
    years_active_end: 2001,
    category: "Social",
    status: "gone",
    short_description:
      "One of the first recognizable social networking services built around friend graphs.",
    peak_visitors: "Millions of registered users",
    country_origin: "United States"
  },
  {
    slug: "myyearbook",
    name: "myYearbook",
    domain: "myyearbook.com",
    years_active_start: 2005,
    years_active_end: 2012,
    category: "Social",
    status: "gone",
    short_description:
      "Teen-focused social platform that blended profiles, games, and chat features.",
    peak_visitors: "Millions of active teen users",
    country_origin: "United States"
  },
  {
    slug: "blackplanet-classic",
    name: "BlackPlanet (Classic)",
    domain: "blackplanet.com",
    years_active_start: 1999,
    years_active_end: null,
    category: "Social",
    status: "reborn",
    short_description:
      "Major early social community with strong cultural identity and forum-style participation.",
    peak_visitors: "Millions of member profiles",
    country_origin: "United States"
  },
  {
    slug: "friendfeed",
    name: "FriendFeed",
    domain: "friendfeed.com",
    years_active_start: 2007,
    years_active_end: 2015,
    category: "Social",
    status: "gone",
    short_description:
      "Real-time social aggregation service that influenced modern feed mechanics.",
    peak_visitors: "High influence among power users",
    country_origin: "United States"
  },
  {
    slug: "jaiku",
    name: "Jaiku",
    domain: "jaiku.com",
    years_active_start: 2006,
    years_active_end: 2012,
    category: "Social",
    status: "gone",
    short_description:
      "Microblogging and presence-sharing platform acquired by Google during early social experimentation.",
    peak_visitors: "Niche but influential user base",
    country_origin: "Finland"
  },
  {
    slug: "pownce",
    name: "Pownce",
    domain: "pownce.com",
    years_active_start: 2007,
    years_active_end: 2008,
    category: "Social",
    status: "gone",
    short_description:
      "Short-form sharing service remembered from the pre-consolidation social startup wave.",
    peak_visitors: "Early-adopter social audience",
    country_origin: "United States"
  },
  {
    slug: "identica",
    name: "Identi.ca",
    domain: "identi.ca",
    years_active_start: 2008,
    years_active_end: 2013,
    category: "Social",
    status: "gone",
    short_description:
      "Open-source microblogging community centered on federated social ideas.",
    peak_visitors: "Open web developer community",
    country_origin: "Canada"
  },
  {
    slug: "vine",
    name: "Vine",
    domain: "vine.co",
    years_active_start: 2013,
    years_active_end: 2017,
    category: "Entertainment",
    status: "gone",
    short_description:
      "Six-second looping video platform that shaped internet comedy and creator culture.",
    peak_visitors: "200+ million monthly active users",
    country_origin: "United States",
    featured: true
  },
  {
    slug: "bliptv",
    name: "Blip.tv",
    domain: "blip.tv",
    years_active_start: 2005,
    years_active_end: 2015,
    category: "Entertainment",
    status: "gone",
    short_description:
      "Independent web video hosting platform focused on creator-owned series.",
    peak_visitors: "Millions of monthly video viewers",
    country_origin: "United States"
  },
  {
    slug: "veoh",
    name: "Veoh",
    domain: "veoh.com",
    years_active_start: 2005,
    years_active_end: 2010,
    category: "Entertainment",
    status: "gone",
    short_description:
      "Long-form internet video destination active during the pre-streaming platform race.",
    peak_visitors: "Large early online video audience",
    country_origin: "United States"
  },
  {
    slug: "justin-tv",
    name: "Justin.tv",
    domain: "justin.tv",
    years_active_start: 2007,
    years_active_end: 2014,
    category: "Entertainment",
    status: "gone",
    short_description:
      "Live streaming service that later evolved into Twitch's core foundation.",
    peak_visitors: "Millions of live-stream viewers",
    country_origin: "United States",
    featured: true
  },
  {
    slug: "ustream",
    name: "Ustream",
    domain: "ustream.tv",
    years_active_start: 2007,
    years_active_end: 2016,
    category: "Entertainment",
    status: "reborn",
    short_description:
      "Mass-market live video platform used for events, news, and creator broadcasting.",
    peak_visitors: "Major global live-stream footprint",
    country_origin: "United States"
  },
  {
    slug: "stage6",
    name: "Stage6",
    domain: "stage6.divx.com",
    years_active_start: 2006,
    years_active_end: 2008,
    category: "Entertainment",
    status: "gone",
    short_description:
      "High-quality video sharing platform tied to DivX before broadband video fully consolidated.",
    peak_visitors: "Cult following for high-bitrate video",
    country_origin: "United States"
  },
  {
    slug: "metacafe",
    name: "Metacafe",
    domain: "metacafe.com",
    years_active_start: 2003,
    years_active_end: 2021,
    category: "Entertainment",
    status: "gone",
    short_description:
      "Short-form video portal that competed in the first generation of viral clip platforms.",
    peak_visitors: "40+ million monthly visitors",
    country_origin: "Israel"
  },
  {
    slug: "revver",
    name: "Revver",
    domain: "revver.com",
    years_active_start: 2005,
    years_active_end: 2011,
    category: "Entertainment",
    status: "gone",
    short_description:
      "Video sharing startup known for early creator-revenue experiments.",
    peak_visitors: "Prominent in early web video startup scene",
    country_origin: "United States"
  },
  {
    slug: "stickam",
    name: "Stickam",
    domain: "stickam.com",
    years_active_start: 2005,
    years_active_end: 2013,
    category: "Entertainment",
    status: "gone",
    short_description:
      "Live webcam social platform that mixed broadcasting with chatroom community culture.",
    peak_visitors: "Strong youth and creator communities",
    country_origin: "United States"
  },
  {
    slug: "ytmnd",
    name: "YTMND",
    domain: "ytmnd.com",
    years_active_start: 2004,
    years_active_end: null,
    category: "Entertainment",
    status: "reborn",
    short_description:
      "Meme remix site for looping image and sound combinations that became an internet folklore engine.",
    peak_visitors: "Large meme-community traffic in peak years",
    country_origin: "United States"
  },
  {
    slug: "break-com",
    name: "Break.com",
    domain: "break.com",
    years_active_start: 1998,
    years_active_end: 2018,
    category: "Entertainment",
    status: "gone",
    short_description:
      "Viral clip and humor destination prominent in early 2000s sharing culture.",
    peak_visitors: "Major viral-video audience",
    country_origin: "United States"
  },
  {
    slug: "collegehumor-classic",
    name: "CollegeHumor (Classic)",
    domain: "collegehumor.com",
    years_active_start: 1999,
    years_active_end: null,
    category: "Entertainment",
    status: "reborn",
    short_description:
      "Internet comedy brand that evolved from viral site era into studio production.",
    peak_visitors: "Millions of monthly visitors",
    country_origin: "United States"
  },
  {
    slug: "ebaumsworld",
    name: "eBaum's World",
    domain: "ebaumsworld.com",
    years_active_start: 2001,
    years_active_end: null,
    category: "Entertainment",
    status: "archived",
    short_description:
      "Viral media aggregator that shaped early internet humor circulation patterns.",
    peak_visitors: "Large viral-content audience",
    country_origin: "United States"
  },
  {
    slug: "fark",
    name: "Fark",
    domain: "fark.com",
    years_active_start: 1999,
    years_active_end: null,
    category: "Forums",
    status: "archived",
    short_description:
      "Headline-link community with editorial humor and highly engaged comments.",
    peak_visitors: "Long-running daily link audience",
    country_origin: "United States"
  },
  {
    slug: "digg-v1",
    name: "Digg (v1-v3 Era)",
    domain: "digg.com",
    years_active_start: 2004,
    years_active_end: null,
    category: "News & Media",
    status: "reborn",
    short_description:
      "Social news voting platform whose early versions heavily influenced modern feed ranking.",
    peak_visitors: "40+ million monthly visitors",
    country_origin: "United States",
    featured: true
  },
  {
    slug: "stumbleupon",
    name: "StumbleUpon",
    domain: "stumbleupon.com",
    years_active_start: 2001,
    years_active_end: 2018,
    category: "News & Media",
    status: "gone",
    short_description:
      "Serendipitous discovery engine that sent users to random, interest-matched web pages.",
    peak_visitors: "Large browser-toolbar user base",
    country_origin: "Canada",
    featured: true
  },
  {
    slug: "delicious",
    name: "Delicious",
    domain: "delicious.com",
    years_active_start: 2003,
    years_active_end: 2017,
    category: "News & Media",
    status: "gone",
    short_description:
      "Social bookmarking service that turned link curation into a public web practice.",
    peak_visitors: "Core tool for bloggers and researchers",
    country_origin: "United States"
  },
  {
    slug: "furl",
    name: "Furl",
    domain: "furl.net",
    years_active_start: 2003,
    years_active_end: 2009,
    category: "News & Media",
    status: "gone",
    short_description:
      "Bookmarking and clipping service focused on preserving full web pages for later retrieval.",
    peak_visitors: "Popular among early web curators",
    country_origin: "United States"
  },
  {
    slug: "ma-gnolia",
    name: "Ma.gnolia",
    domain: "ma.gnolia.com",
    years_active_start: 2006,
    years_active_end: 2009,
    category: "News & Media",
    status: "gone",
    short_description:
      "Community bookmarking service remembered for reliability incidents and eventual closure.",
    peak_visitors: "Highly engaged curation community",
    country_origin: "United States"
  },
  {
    slug: "mixx",
    name: "Mixx",
    domain: "mixx.com",
    years_active_start: 2007,
    years_active_end: 2011,
    category: "News & Media",
    status: "gone",
    short_description:
      "Social news recommendation platform from the Digg competitor wave.",
    peak_visitors: "Active voting and sharing community",
    country_origin: "United States"
  },
  {
    slug: "propeller",
    name: "Propeller",
    domain: "propeller.com",
    years_active_start: 2006,
    years_active_end: 2011,
    category: "News & Media",
    status: "gone",
    short_description:
      "User-submitted news portal launched by AOL to capture social discovery behavior.",
    peak_visitors: "Large portal-distributed audience",
    country_origin: "United States"
  },
  {
    slug: "yahoo-answers",
    name: "Yahoo! Answers",
    domain: "answers.yahoo.com",
    years_active_start: 2005,
    years_active_end: 2021,
    category: "Forums",
    status: "gone",
    short_description:
      "Massive Q&A community that archived internet curiosity, jokes, and practical advice.",
    peak_visitors: "200+ million global users",
    country_origin: "United States",
    featured: true
  },
  {
    slug: "askville",
    name: "Askville",
    domain: "askville.amazon.com",
    years_active_start: 2006,
    years_active_end: 2013,
    category: "Forums",
    status: "gone",
    short_description:
      "Amazon's community question-answer platform from the pre-voice assistant era.",
    peak_visitors: "Niche but active help community",
    country_origin: "United States"
  },
  {
    slug: "answerbag",
    name: "Answerbag",
    domain: "answerbag.com",
    years_active_start: 2003,
    years_active_end: 2022,
    category: "Forums",
    status: "gone",
    short_description:
      "Long-running community Q&A site with broad topics and casual knowledge sharing.",
    peak_visitors: "Large long-tail Q&A archive",
    country_origin: "United States"
  },
  {
    slug: "formspring",
    name: "Formspring",
    domain: "formspring.me",
    years_active_start: 2009,
    years_active_end: 2013,
    category: "Social",
    status: "gone",
    short_description:
      "Anonymous and social Q&A platform that spread rapidly among teens.",
    peak_visitors: "30+ million users",
    country_origin: "United States"
  },
  {
    slug: "spring-me",
    name: "Spring.me",
    domain: "spring.me",
    years_active_start: 2013,
    years_active_end: 2015,
    category: "Social",
    status: "gone",
    short_description:
      "Rebrand attempt after Formspring, unable to sustain prior momentum.",
    peak_visitors: "Declining post-peak audience",
    country_origin: "United States"
  },
  {
    slug: "posterous",
    name: "Posterous",
    domain: "posterous.com",
    years_active_start: 2008,
    years_active_end: 2013,
    category: "Social",
    status: "gone",
    short_description:
      "Effortless blogging-by-email service popular with creators and startups.",
    peak_visitors: "Strong creator and tech-community adoption",
    country_origin: "United States"
  },
  {
    slug: "xfire",
    name: "Xfire",
    domain: "xfire.com",
    years_active_start: 2003,
    years_active_end: 2015,
    category: "Gaming",
    status: "gone",
    short_description:
      "Gaming chat and session-tracking network used heavily by PC multiplayer communities.",
    peak_visitors: "Millions of gamer accounts",
    country_origin: "United States"
  },
  {
    slug: "gamespy-arcade",
    name: "GameSpy Arcade",
    domain: "gamespyarcade.com",
    years_active_start: 2000,
    years_active_end: 2014,
    category: "Gaming",
    status: "gone",
    short_description:
      "Lobby and server-browser ecosystem for classic PC multiplayer titles.",
    peak_visitors: "Huge installed base in PC gaming",
    country_origin: "United States"
  },
  {
    slug: "fileplanet",
    name: "FilePlanet",
    domain: "fileplanet.com",
    years_active_start: 1997,
    years_active_end: 2017,
    category: "Gaming",
    status: "gone",
    short_description:
      "Essential download hub for game demos, patches, and mods during broadband transition years.",
    peak_visitors: "Millions of monthly downloads",
    country_origin: "United States"
  },
  {
    slug: "planetquake",
    name: "PlanetQuake",
    domain: "planetquake.com",
    years_active_start: 1997,
    years_active_end: 2015,
    category: "Gaming",
    status: "gone",
    short_description:
      "Community news and mod hub central to Quake and FPS fandom culture.",
    peak_visitors: "Major FPS community traffic",
    country_origin: "United States"
  },
  {
    slug: "allakhazam",
    name: "Allakhazam",
    domain: "allakhazam.com",
    years_active_start: 1999,
    years_active_end: null,
    category: "Gaming",
    status: "archived",
    short_description:
      "Classic MMO database and strategy reference used by EverQuest players for years.",
    peak_visitors: "High MMO guide traffic",
    country_origin: "United States"
  },
  {
    slug: "webvan",
    name: "Webvan",
    domain: "webvan.com",
    years_active_start: 1999,
    years_active_end: 2001,
    category: "Shopping",
    status: "gone",
    short_description:
      "Dot-com grocery delivery pioneer that expanded too quickly and collapsed.",
    peak_visitors: "Large venture-backed urban customer base",
    country_origin: "United States",
    featured: true
  },
  {
    slug: "pets-com",
    name: "Pets.com",
    domain: "pets.com",
    years_active_start: 1998,
    years_active_end: 2000,
    category: "Shopping",
    status: "gone",
    short_description:
      "Iconic dot-com retailer remembered for aggressive branding and rapid failure.",
    peak_visitors: "Household-name dot-com brand reach",
    country_origin: "United States",
    featured: true
  },
  {
    slug: "etoys",
    name: "eToys",
    domain: "etoys.com",
    years_active_start: 1997,
    years_active_end: 2001,
    category: "Shopping",
    status: "gone",
    short_description:
      "Online toy retail pioneer and major casualty of the first internet bubble.",
    peak_visitors: "Leading online toy destination at peak",
    country_origin: "United States"
  },
  {
    slug: "boo-com",
    name: "Boo.com",
    domain: "boo.com",
    years_active_start: 1998,
    years_active_end: 2000,
    category: "Shopping",
    status: "gone",
    short_description:
      "Ambitious fashion e-commerce startup known for costly design and infrastructure overreach.",
    peak_visitors: "Global PR visibility despite brief life",
    country_origin: "United Kingdom"
  },
  {
    slug: "kozmo",
    name: "Kozmo.com",
    domain: "kozmo.com",
    years_active_start: 1998,
    years_active_end: 2001,
    category: "Shopping",
    status: "gone",
    short_description:
      "Ultra-fast urban delivery startup offering snacks, videos, and convenience goods.",
    peak_visitors: "Heavy metro demand during dot-com boom",
    country_origin: "United States"
  },
  {
    slug: "beenz",
    name: "Beenz",
    domain: "beenz.com",
    years_active_start: 1998,
    years_active_end: 2001,
    category: "Shopping",
    status: "gone",
    short_description:
      "Early web-reward digital currency experiment used for loyalty and engagement programs.",
    peak_visitors: "High-profile online rewards adoption",
    country_origin: "United Kingdom"
  },
  {
    slug: "flooz",
    name: "Flooz",
    domain: "flooz.com",
    years_active_start: 1999,
    years_active_end: 2001,
    category: "Shopping",
    status: "gone",
    short_description:
      "Internet gift-currency startup that became a symbol of speculative e-commerce exuberance.",
    peak_visitors: "High consumer marketing visibility",
    country_origin: "United States"
  },
  {
    slug: "alladvantage",
    name: "AllAdvantage",
    domain: "alladvantage.com",
    years_active_start: 1999,
    years_active_end: 2001,
    category: "Shopping",
    status: "gone",
    short_description:
      "Pay-to-surf model that rewarded users for screen time and ad exposure.",
    peak_visitors: "Millions of registered users",
    country_origin: "United States"
  },
  {
    slug: "hotbot",
    name: "HotBot",
    domain: "hotbot.com",
    years_active_start: 1996,
    years_active_end: 2016,
    category: "Search Engines",
    status: "gone",
    short_description:
      "Fast, feature-rich search engine from the early portal competition era.",
    peak_visitors: "Top-tier search traffic in late 1990s",
    country_origin: "United States"
  },
  {
    slug: "alltheweb",
    name: "AlltheWeb",
    domain: "alltheweb.com",
    years_active_start: 1999,
    years_active_end: 2011,
    category: "Search Engines",
    status: "gone",
    short_description:
      "Search engine known for clean interface and broad indexing before Yahoo integration.",
    peak_visitors: "Widely used alternative search destination",
    country_origin: "Norway"
  },
  {
    slug: "webcrawler",
    name: "WebCrawler",
    domain: "webcrawler.com",
    years_active_start: 1994,
    years_active_end: null,
    category: "Search Engines",
    status: "reborn",
    short_description:
      "One of the first full-text web search engines, later surviving as a metasearch brand.",
    peak_visitors: "Foundational early-web search traffic",
    country_origin: "United States"
  },
  {
    slug: "infospace-search",
    name: "InfoSpace Search",
    domain: "infospace.com",
    years_active_start: 1996,
    years_active_end: 2017,
    category: "Search Engines",
    status: "gone",
    short_description:
      "Meta-search and portal services provider behind multiple branded destinations.",
    peak_visitors: "Large syndicated search footprint",
    country_origin: "United States"
  },
  {
    slug: "dmoz",
    name: "DMOZ",
    domain: "dmoz.org",
    years_active_start: 1998,
    years_active_end: 2017,
    category: "Search Engines",
    status: "gone",
    short_description:
      "Human-edited web directory that powered taxonomy and categorization across many sites.",
    peak_visitors: "One of the largest volunteer web directories",
    country_origin: "United States",
    featured: true
  },
  {
    slug: "mahalo",
    name: "Mahalo",
    domain: "mahalo.com",
    years_active_start: 2007,
    years_active_end: 2014,
    category: "Search Engines",
    status: "gone",
    short_description:
      "Human-curated search and how-to project from the web 2.0 content optimization era.",
    peak_visitors: "Large SEO-era content audience",
    country_origin: "United States"
  },
  {
    slug: "mahalo-answers",
    name: "Mahalo Answers",
    domain: "mahalo.com/answers",
    years_active_start: 2010,
    years_active_end: 2014,
    category: "Forums",
    status: "gone",
    short_description:
      "Paid-and-community Q&A experiment linked to Mahalo's broader content strategy.",
    peak_visitors: "Niche contributor and answerer base",
    country_origin: "United States"
  },
  {
    slug: "mister-wong",
    name: "Mister Wong",
    domain: "mister-wong.com",
    years_active_start: 2006,
    years_active_end: 2014,
    category: "News & Media",
    status: "gone",
    short_description:
      "European social bookmarking service popular in Germany during web 2.0.",
    peak_visitors: "Large regional bookmarking audience",
    country_origin: "Germany"
  },
  {
    slug: "netvibes-classic",
    name: "Netvibes (Classic Public Dashboards)",
    domain: "netvibes.com",
    years_active_start: 2005,
    years_active_end: null,
    category: "News & Media",
    status: "reborn",
    short_description:
      "Personal dashboard homepage service central to RSS-era information workflows.",
    peak_visitors: "Global productivity and RSS audience",
    country_origin: "France"
  },
  {
    slug: "squidoo",
    name: "Squidoo",
    domain: "squidoo.com",
    years_active_start: 2005,
    years_active_end: 2014,
    category: "News & Media",
    status: "gone",
    short_description:
      "User-generated topic pages monetized through affiliate and ad models.",
    peak_visitors: "High long-tail search traffic",
    country_origin: "United States"
  },
  {
    slug: "hubpages-classic",
    name: "HubPages (Classic Era)",
    domain: "hubpages.com",
    years_active_start: 2006,
    years_active_end: null,
    category: "News & Media",
    status: "archived",
    short_description:
      "Revenue-sharing publishing platform emblematic of search-driven content economies.",
    peak_visitors: "Large community writer network",
    country_origin: "United States"
  },
  {
    slug: "icq-homepage-builder",
    name: "ICQ Homepage Builder",
    domain: "members.icq.com",
    years_active_start: 1998,
    years_active_end: 2005,
    category: "Personal/GeoCities",
    status: "gone",
    short_description:
      "Personal page tooling connected to ICQ identity and messenger-era social life.",
    peak_visitors: "Large messenger-linked creator base",
    country_origin: "Israel"
  },
  {
    slug: "multiply",
    name: "Multiply",
    domain: "multiply.com",
    years_active_start: 2004,
    years_active_end: 2013,
    category: "Social",
    status: "gone",
    short_description:
      "Social blogging and photo-sharing platform with strong adoption in Southeast Asia.",
    peak_visitors: "Millions of active users",
    country_origin: "United States"
  },
  {
    slug: "tagworld",
    name: "TagWorld",
    domain: "tagworld.com",
    years_active_start: 2005,
    years_active_end: 2008,
    category: "Social",
    status: "gone",
    short_description:
      "MySpace-era social network focused on media sharing and profile communities.",
    peak_visitors: "Large youth social audience",
    country_origin: "United States"
  }
];

const categorySpecials = {
  Social: [
    "Identity-first profiles and social graph dynamics",
    "Strong community rituals and migration stories",
    "Shaped later mainstream platform behaviors"
  ],
  Gaming: [
    "Community-driven discovery and strategy sharing",
    "Long-lived player knowledge archives",
    "Bridge between hobbyist and mainstream game culture"
  ],
  "News & Media": [
    "Crowdsourced discovery before modern feeds",
    "Editorial and community curation loops",
    "Captured a specific publishing-era economy"
  ],
  "Personal/GeoCities": [
    "Lowered barriers to personal publishing",
    "Distinctive hand-crafted design aesthetics",
    "Preserved niche interests in independent pages"
  ],
  Shopping: [
    "Early experiments in digital commerce logistics",
    "High-growth and high-risk business models",
    "Influenced modern online retail expectations"
  ],
  "Search Engines": [
    "Pioneered navigation of a rapidly growing web",
    "Competed across relevance, speed, and interface",
    "Left infrastructure and behavior legacy"
  ],
  Forums: [
    "Threaded community memory and participatory norms",
    "Long-tail knowledge accumulation",
    "Influenced Q&A and discussion design patterns"
  ],
  Entertainment: [
    "Web-native creator culture and remix behavior",
    "Viral distribution before algorithmic shorts",
    "Defined aesthetics of a specific internet era"
  ]
};

function buildExpandedStory(site) {
  const endLabel = site.years_active_end || "the present";

  return `${site.name} operated from ${site.years_active_start} to ${endLabel} and became part of the ${site.category.toLowerCase()} chapter of internet history. ${site.short_description}\n\nThe service gained traction through timing, community behavior, and the design constraints of its era. It is now preserved here as an exhibit to document how platform habits changed as the web moved from open experimentation to consolidated ecosystems.\n\nIts current museum status is \"${site.status}\", which helps trace whether the brand disappeared, survived in reduced form, or evolved into a successor path.`;
}

const expandedExhibits = expansionSeed.map((site) => {
  const originalDomain = site.domain.startsWith("http")
    ? site.domain
    : `http://${site.domain}`;
  const waybackDomain = site.domain.startsWith("http")
    ? site.domain.replace(/^https?:\/\//, "")
    : site.domain;

  return {
    slug: site.slug,
    name: site.name,
    url_original: originalDomain,
    wayback_url: `https://web.archive.org/web/*/${waybackDomain}`,
    successor_url: site.status === "gone" ? null : `https://${waybackDomain}`,
    years_active_start: site.years_active_start,
    years_active_end: site.years_active_end,
    category: site.category,
    status: site.status,
    short_description: site.short_description,
    full_story: buildExpandedStory(site),
    peak_visitors: site.peak_visitors,
    country_origin: site.country_origin,
    what_made_it_special: categorySpecials[site.category],
    thumbnail_url: "/icons/retro-site.svg",
    featured: Boolean(site.featured),
    created_at: "2026-03-24T00:00:00.000Z"
  };
});

export const fallbackExhibits = [...baseExhibits, ...expandedExhibits];

export const marqueeSites = fallbackExhibits.slice(0, 28).map((site) => site.name);

export const eraRanges = [
  "1993-1996",
  "1997-1999",
  "2000-2003",
  "2004-2007"
];

export const categories = [...new Set(fallbackExhibits.map((site) => site.category))];

export const statuses = ["gone", "archived", "reborn"];
