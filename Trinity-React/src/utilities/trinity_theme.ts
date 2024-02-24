import TrinityApp from '@/TrinityApp';
import trinityApp from '@/TrinityApp.tsx';

const replaceLink = (linkElement: HTMLElement, href: string, onComplete?: () => void) => {
    if (!linkElement || !href) {
        return;
    }

    const id = linkElement.getAttribute('id')!;
    const cloneLinkElement = linkElement.cloneNode(true) as HTMLElement;

    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');

    linkElement.parentNode?.insertBefore(cloneLinkElement, linkElement.nextSibling);

    cloneLinkElement.addEventListener('load', () => {
        linkElement.remove();

        const element = document.getElementById(id); // re-check
        element && element.remove();

        cloneLinkElement.setAttribute('id', id);
        onComplete && onComplete();
    });
};

export function changeTrinityTheme(theme: string, onComplete?: () => void) {
    const configs = TrinityApp.configs;
    // @ts-ignore
    if (import.meta.env.DEV) {
        replaceLink(document.getElementById('theme-css')!, `${trinityApp.configs.viteUrl}/${theme}-theme.css`, onComplete);
    } else {
        replaceLink(document.getElementById('theme-css')!, `${configs.prefix}/trinity/dist/${theme}-theme.css`, onComplete);
    }

    localStorage.setItem('theme', theme);
}
