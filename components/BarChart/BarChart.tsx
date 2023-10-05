"use client";
import type { ComponentProps } from "react";
import { Exo_2 } from "next/font/google";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { Bar } from "react-chartjs-2";
import { Spacer } from "@/components/Spacer/Spacer";

const exo2 = Exo_2({ subsets: ["latin"] });

ChartJS.defaults.font.family = exo2.style.fontFamily;
ChartJS.defaults.font.size = 16;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
);

const BarChart: React.FC<ComponentProps<typeof Bar>> = ({ ...props }) => {
  return (
    <>
      <Bar {...props} />
      <Spacer size="pb-8" />
    </>
  );
};

export { BarChart };
