import type { Dataset } from "./types";

const STORAGE_KEY = "paddington-dashboard:dataset";

export function saveDataset(dataset: Dataset) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataset));
}

export function loadDataset(): Dataset | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Dataset;
  } catch {
    return null;
  }
}

export function clearDataset() {
  localStorage.removeItem(STORAGE_KEY);
}
