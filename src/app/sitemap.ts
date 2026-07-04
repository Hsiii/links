import type { MetadataRoute } from 'next';

const siteUrl = 'https://links.hsichen.dev';

export const dynamic = 'force-static';

export default function sitemap(): Readonly<MetadataRoute.Sitemap> {
    return [
        {
            url: siteUrl,
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
