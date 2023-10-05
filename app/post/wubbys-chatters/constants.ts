import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
import type { BarChart, LineChart } from "@/common/types";

const STATS = {
  fileMeta: {
    channelName: "paymoneywubby",
    logTimes: {
      init: "2023-10-05T00:30:15.642Z",
      end: "2023-10-05T03:40:51.279Z",
    },
    streamTitles: [
      "FINALLY BACK LETS GO SO MUCH TO DO CRAMMING CONTENT LIKE MOM CRAMS THE GEARSHIFT STRAIGHT UP THE OL",
    ],
    viewerCountSampleIntervalMs: 600000,
  },
  duration: {
    durationInHours: 3.1765658333333335,
    durationInSeconds: 11435.637,
  },
  views: {
    max: 15653,
    min: 0,
    avg: 13302.7,
  },
  chatters: {
    unique: 6257,
    totalChats: 65009,
  },
  engagement: {
    engagement: 0.4703556420876965,
    engagementPerHour: 0.14807048453144386,
  },
};

const TOP_10_CHATTERS_TALLY = [
  {
    displayName: "mr_mustash",
    chats: 691,
    ratioOfTotalChats: 0.010629297481887123,
  },
  {
    displayName: "PiercingThread7",
    chats: 674,
    ratioOfTotalChats: 0.010367795228352997,
  },
  {
    displayName: "quabop",
    chats: 459,
    ratioOfTotalChats: 0.0070605608454214035,
  },
  {
    displayName: "Invader_420",
    chats: 372,
    ratioOfTotalChats: 0.005722284606746758,
  },
  {
    displayName: "ECU_55",
    chats: 328,
    ratioOfTotalChats: 0.005045455244658432,
  },
  {
    displayName: "CyborgMagm4r",
    chats: 305,
    ratioOfTotalChats: 0.004691658078112261,
  },
  {
    displayName: "SaintofBottles",
    chats: 290,
    ratioOfTotalChats: 0.00446092079558215,
  },
  {
    displayName: "zebracakecats",
    chats: 280,
    ratioOfTotalChats: 0.004307095940562076,
  },
  {
    displayName: "xboxhater03",
    chats: 274,
    ratioOfTotalChats: 0.0042148010275500315,
  },
  {
    displayName: "Dr_Gonzz",
    chats: 261,
    ratioOfTotalChats: 0.004014828716023935,
  },
];

const VIEWER_ENGAGEMENT = [
  {
    channel: "wubby",
    engagement: 47.04,
    engagementPerHour: 14.81,
  },
  {
    channel: "hasanabi",
    engagement: 28.6,
    engagementPerHour: 10.24,
  },
  {
    channel: "qtcinderella",
    engagement: 22.89,
    engagementPerHour: 9.8,
  },
  {
    channel: "willneff",
    engagement: 10.46,
    engagementPerHour: 5.38,
  },
];

const VIEWERSHIP = [
  { ts: "2023-10-05T00:30:16.505Z", count: 0 },
  { ts: "2023-10-05T00:40:19.559Z", count: 8771 },
  { ts: "2023-10-05T00:50:16.488Z", count: 11786 },
  { ts: "2023-10-05T01:00:16.486Z", count: 12498 },
  { ts: "2023-10-05T01:10:16.478Z", count: 13606 },
  { ts: "2023-10-05T01:20:16.465Z", count: 14166 },
  { ts: "2023-10-05T01:30:16.508Z", count: 14116 },
  { ts: "2023-10-05T01:40:16.510Z", count: 14371 },
  { ts: "2023-10-05T01:50:16.644Z", count: 14906 },
  { ts: "2023-10-05T02:00:16.515Z", count: 15150 },
  { ts: "2023-10-05T02:10:16.504Z", count: 15494 },
  { ts: "2023-10-05T02:20:16.504Z", count: 15653 },
  { ts: "2023-10-05T02:30:16.679Z", count: 15326 },
  { ts: "2023-10-05T02:40:16.506Z", count: 15326 },
  { ts: "2023-10-05T02:50:16.500Z", count: 15043 },
  { ts: "2023-10-05T03:00:16.502Z", count: 14549 },
  { ts: "2023-10-05T03:10:16.657Z", count: 14549 },
  { ts: "2023-10-05T03:20:16.505Z", count: 13902 },
  { ts: "2023-10-05T03:30:16.513Z", count: 13616 },
  { ts: "2023-10-05T03:40:16.630Z", count: 13226 },
];

const TOP_10_CHATTERS_CHART: BarChart = {
  options: {
    indexAxis: "y",
    aspectRatio: 1,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        text: "top 10 Chatters",
        display: true,
      },
      datalabels: {
        color: "#09090b",
      },
    },
  },
  data: {
    labels: TOP_10_CHATTERS_TALLY.map((chatter) => chatter.displayName),
    datasets: [
      {
        label: "chats",
        data: TOP_10_CHATTERS_TALLY.map((chatter) => chatter.chats),
        borderRadius: 6,
        backgroundColor: "#fafafa",
      },
    ],
  },
};

const VIEWERSHIP_CHART: LineChart = {
  options: {
    aspectRatio: 1,
    plugins: {
      datalabels: {
        display: false,
      },
    },
  },
  data: {
    labels: VIEWERSHIP.map((viewership) =>
      new Date(viewership.ts).toLocaleTimeString(),
    ),
    datasets: [
      {
        label: "views",
        data: VIEWERSHIP.map((viewership) => viewership.count),
        fill: false,
        borderColor: "#fafafa",
        tension: 0.05,
      },
    ],
  },
};

const VIEWER_ENGAGEMENT_CHART: BarChart = {
  options: {
    aspectRatio: 1.5,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        text: "engagement - compared",
        display: true,
      },
    },
  },
  data: {
    labels: VIEWER_ENGAGEMENT.map((viewer) => viewer.channel),
    datasets: [
      {
        label: "engagement %",
        data: VIEWER_ENGAGEMENT.map((viewer) => viewer.engagement),
        borderRadius: 6,
        backgroundColor: "#fafafa",
        hoverBackgroundColor: "#a1a1aa",
      },
    ],
  },
};

const VIEWER_ENGAGEMENT_PER_HOUR_CHART: BarChart = {
  options: {
    aspectRatio: 1.5,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        text: "engagement per hour - compared",
        display: true,
      },
    },
  },
  data: {
    labels: VIEWER_ENGAGEMENT.map((viewer) => viewer.channel),
    datasets: [
      {
        label: "engagement per hour %",
        data: VIEWER_ENGAGEMENT.map((viewer) => viewer.engagementPerHour),
        borderRadius: 6,
        backgroundColor: "#fafafa",
        hoverBackgroundColor: "#a1a1aa",
      },
    ],
  },
};

const CONVERTED_TIMES = {
  init: dayjs(STATS.fileMeta.logTimes.init)
    .tz("America/Los_Angeles")
    .format("h:mm:ss a"),
  end: dayjs(STATS.fileMeta.logTimes.end)
    .tz("America/Los_Angeles")
    .format("h:mm:ss a"),
};

export {
  STATS,
  CONVERTED_TIMES,
  VIEWERSHIP_CHART,
  VIEWER_ENGAGEMENT,
  TOP_10_CHATTERS_CHART,
  VIEWER_ENGAGEMENT_CHART,
  VIEWER_ENGAGEMENT_PER_HOUR_CHART,
};
