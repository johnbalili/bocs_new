/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://bocs-new.vercel.app',
    generateRobotsTxt: true, // (optional)
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [
            { userAgent: '', allow: '/' },
            { userAgent: 'Googlebot', allow: '/' }
        ]
    }
  }