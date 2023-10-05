import type { ComponentProps } from "react";
import type { Bar, Line } from "react-chartjs-2";

type BarChart = ComponentProps<typeof Bar>;
type LineChart = ComponentProps<typeof Line>;

export type { BarChart, LineChart };
