import { Exo_2 } from "next/font/google";
import type { ComponentProps } from "react";
import type { Bar } from "react-chartjs-2";

const exo2 = Exo_2({ subsets: ["latin"] });

const stats = {
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

const top10ChattersTally = [
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

const viewerEngagement = [
  {
    channel: "paymoneywubby",
    engagement: 47.04,
  },
  {
    channel: "hasanabi",
    engagement: 28.6,
  },
  {
    channel: "qtcinderella",
    engagement: 22.89,
  },
  {
    channel: "willneff",
    engagement: 10.46,
  },
];

const topChatterChartLabels = top10ChattersTally.map(
  (chatter) => chatter.displayName,
);

const viewerEngagementChartLabels = viewerEngagement.map(
  (viewer) => viewer.channel,
);

const topChatterChartOptions: ComponentProps<typeof Bar>["options"] = {
  font: {
    family: exo2.style.fontFamily,
  },
  color: "#fafafa",
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      color: "#fafafa",
      display: true,
      text: "top 10 Chatters",
    },
  },
};

const viewerEngagementChartOptions: ComponentProps<typeof Bar>["options"] = {
  font: {
    family: exo2.style.fontFamily,
  },
  color: "#fafafa",
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      color: "#fafafa",
      display: true,
      text: "streamer viewer engagement",
    },
  },
};

const topChatterChartData: ComponentProps<typeof Bar>["data"] = {
  labels: topChatterChartLabels,
  datasets: [
    {
      label: "chats",
      data: top10ChattersTally.map((chatter) => chatter.chats),
      borderRadius: 6,
      backgroundColor: "#fafafa",
    },
  ],
};

const viewerEngagementChartData: ComponentProps<typeof Bar>["data"] = {
  labels: viewerEngagementChartLabels,
  datasets: [
    {
      label: "engagement %",
      data: viewerEngagement.map((channel) => channel.engagement),
      borderRadius: 6,
      backgroundColor: "#fafafa",
    },
  ],
};

const viewership = [
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

const viewershipLabels = viewership.map((view) =>
  new Date(view.ts).toLocaleTimeString(),
);

const viewershipChartData: ComponentProps<typeof Bar>["data"] = {
  labels: viewershipLabels,
  datasets: [
    {
      label: "views",
      data: viewership.map((view) => view.count),
      borderRadius: 6,
      backgroundColor: "#fafafa",
    },
  ],
};

export {
  top10ChattersTally,
  topChatterChartOptions,
  topChatterChartData,
  stats,
  viewerEngagement,
  viewerEngagementChartData,
  viewerEngagementChartOptions,
  viewershipChartData,
};
