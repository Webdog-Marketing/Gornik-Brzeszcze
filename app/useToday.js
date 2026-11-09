'use client';
import { useEffect, useState } from 'react';
import { DATA_ASOF } from './data';

// Returns today's date as 'YYYY-MM-DD'. Starts from the data's own date so the
// server-rendered HTML and the first browser render always agree, then
// switches to the visitor's real date after the page has loaded.
export function useToday() {
  const [today, setToday] = useState(DATA_ASOF);
  useEffect(() => {
    const d = new Date();
    const iso = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    setToday(iso);
  }, []);
  return today;
}
