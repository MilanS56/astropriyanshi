import { normalizeConsultationSelectionIds } from "@/lib/consultations";

export const CONSULTATION_SELECTION_STORAGE_KEY =
  "astro-priyanshii:selected-consultations:v1";

function canUseLocalStorage() {
  return typeof window !== "undefined" && "localStorage" in window;
}

function validateConsultationIds(value: unknown) {
  if (!Array.isArray(value)) return [];

  const stringIds = value.filter((id): id is string => typeof id === "string");

  return normalizeConsultationSelectionIds(stringIds);
}

export function getSelectedConsultationIds() {
  if (!canUseLocalStorage()) return [];

  try {
    const storedValue = window.localStorage.getItem(
      CONSULTATION_SELECTION_STORAGE_KEY,
    );

    if (!storedValue) return [];

    return validateConsultationIds(JSON.parse(storedValue));
  } catch {
    return [];
  }
}

export function saveSelectedConsultationIds(ids: string[]) {
  if (!canUseLocalStorage()) return;

  try {
    const validIds = validateConsultationIds(ids);
    window.localStorage.setItem(
      CONSULTATION_SELECTION_STORAGE_KEY,
      JSON.stringify(validIds),
    );
  } catch {
    // Selection remains usable in memory if storage is unavailable.
  }
}

export function clearSelectedConsultationIds() {
  if (!canUseLocalStorage()) return;

  try {
    window.localStorage.removeItem(CONSULTATION_SELECTION_STORAGE_KEY);
  } catch {
    // Selection remains usable in memory if storage is unavailable.
  }
}
