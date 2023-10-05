"use client";
import type { ComponentProps } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Spacer } from "@/components/Spacer/Spacer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
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
