"use client";

import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string | null): FetchState<T> & { refetch: () => void } {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: !!url,
    error: null,
  });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!url) return;
    let active = true;
    const controller = new AbortController();

    // Defer the loading flag so we don't call setState synchronously in the effect body.
    queueMicrotask(() => {
      if (active) setState((s) => ({ ...s, loading: true, error: null }));
    });

    fetch(url, { signal: controller.signal })
      .then(async (r) => {
        const json = await r.json();
        if (!active) return;
        if (!r.ok || !json.success) {
          setState({ data: null, loading: false, error: json.error || "Request failed" });
        } else {
          setState({ data: json.data, loading: false, error: null });
        }
      })
      .catch((e) => {
        if (!active) return;
        if (e?.name === "AbortError") return;
        setState({ data: null, loading: false, error: e?.message || "Network error" });
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [url, tick]);

  return { ...state, refetch: () => setTick((t) => t + 1) };
}
