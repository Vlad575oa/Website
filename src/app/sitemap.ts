import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://devvlad.ru';
    const locales = ['ru', 'en'];
    const paths = [
        '',
        '/legislation',
        '/portfolio',
        '/pricing',
        '/privacy',
        '/terms',
        '/cookies',
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    locales.forEach((locale) => {
        paths.forEach((path) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${path}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: path === '' ? 1 : 0.8,
            });
        });
    });

    return sitemapEntries;
}
