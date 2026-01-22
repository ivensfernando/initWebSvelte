import { writable } from 'svelte/store';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'green';
  }

  return localStorage.getItem('theme') || 'green';
};

export const theme = writable(getInitialTheme());

theme.subscribe((value) => {
  if (typeof document === 'undefined') {
    return;
  }
  document.documentElement.dataset.theme = value;
  localStorage.setItem('theme', value);
});
