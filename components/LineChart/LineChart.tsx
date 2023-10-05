"use client";
import type { ComponentProps } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Spacer } from "@/components/Spacer/Spacer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const LineChart: React.FC<ComponentProps<typeof Line>> = ({ ...props }) => {
  return (
    <>
      <Line {...props} />
      <Spacer size="pb-8" />
    </>
  );
};

export { LineChart };
