"use client";

import {
  Cpu,
  Building2,
  Zap,
  Cog,
  Wheat,
  Shirt,
  Compass,
  Car,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Cpu,
  Building2,
  Zap,
  Cog,
  Wheat,
  Shirt,
  Compass,
  Car,
};

export function DeptIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = MAP[name] ?? Cpu;
  return <Icon className={className} />;
}
