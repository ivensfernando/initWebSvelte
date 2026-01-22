import { render } from '@testing-library/svelte';
import { tick } from 'svelte';
import Header from '../src/lib/components/Header.svelte';

const getAssetsLink = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('a')).find((anchor) =>
    anchor.textContent?.includes('Assets')
  );

describe('Header', () => {
  it('marks Assets link as active on /assets route', async () => {
    window.history.pushState({}, '', '/assets');

    const { container } = render(Header);
    await tick();
    const assetsLink = getAssetsLink(container);

    expect(assetsLink).toBeTruthy();
    expect(assetsLink?.classList.contains('is-active')).toBe(true);
  });
});
