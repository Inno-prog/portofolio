export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|assets/|sitemap.xml|robots.txt|api/).*)',
  ],
};

const BLOCKED_UA_PATTERNS = [
  'httrack', 'httrackwebsitecopier', 'webcopier', 'websitecopier',
  'wget', 'curl', 'python-requests', 'python-urllib', 'scrapy',
  'httpclient', 'libwww-perl', 'mechanize', 'java/',
  'go-http-client', 'okhttp', 'axios/', 'node-fetch', 'got/',
  'cheerio', 'jsdom', 'puppeteer', 'playwright', 'selenium',
  'headlesschrome', 'phantomjs', 'w3m', 'lynx',
  'teleport', 'offlineexplorer', 'webzip', 'blackwidow',
  'downloadmaster', 'flashget', 'getright', 'massdownloader',
  'sitecopy', 'webcapture', 'pagekeeper',
  'netants', 'webstripper', 'webmaster',
  'spinn3r', 'grapeshotcrawler', 'trendiction', 'semrushbot',
  'ahrefsbot', 'mj12bot', 'dotbot', 'rogerbot', 'screamingfrog',
  'sitebulb', 'deepcrawl', 'botify', 'oncrawl',
  'siteexplorer', 'linkdexbot', 'blexbot', 'proximic', 'wbsearchbot',
  'duckduckbot', 'yacybot', 'barkrowler', 'megaindex',
  'petalbot', 'aspiegelbot', 'yisouspider', '360spider',
  'amazonbot', 'bytespider', 'gptbot', 'ccbot', 'anthropic-ai', 'claudebot',
  'perplexitybot', 'omgilibot', 'diffbot', 'turnitinbot',
  'discordbot', 'slackbot', 'telegrambot', 'whatsapp',
  'baiduspider', 'sogou', 'exabot', 'yandeximages',
];

const ALLOWED_BOTS = ['googlebot', 'bingbot', 'duckduckbot', 'applebot'];

function isAllowedBot(userAgent) {
  const ua = userAgent.toLowerCase();
  return ALLOWED_BOTS.some(bot => ua.includes(bot));
}

function isScraper(userAgent) {
  const ua = userAgent.toLowerCase();
  return BLOCKED_UA_PATTERNS.some(pattern => ua.includes(pattern));
}

function hasNoAcceptHeader(request) {
  const accept = request.headers.get('accept') || '';
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return false;
  return !accept.includes('text/html') && !accept.includes('application/xhtml') && !accept.includes('*/*');
}

export default function middleware(request) {
  const { pathname } = new URL(request.url);
  if (pathname.startsWith('/api/')) return new Response(null, { status: 200 });

  const userAgent = request.headers.get('user-agent') || '';
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

  if (!userAgent) {
    return new Response('Forbidden', { status: 403 });
  }

  if (isAllowedBot(userAgent)) {
    return new Response(null, { headers: { 'x-robots-tag': 'all' } });
  }

  if (isScraper(userAgent)) {
    console.log(`[BLOCKED] UA: ${userAgent} | IP: ${ip}`);
    return new Response(
      `<!DOCTYPE html>
<html><head><title>403 Forbidden</title></head>
<body style="font-family:sans-serif;text-align:center;padding:50px;">
<h1>403 Forbidden</h1>
<p>Automated access is not allowed.</p>
<p style="color:#666;">If you are a human, please visit the site in a normal browser.</p>
</body></html>`,
      {
        status: 403,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Robots-Tag': 'noindex, nofollow',
        },
      }
    );
  }

  if (hasNoAcceptHeader(request)) {
    console.log(`[BLOCKED-NO-HTML] UA: ${userAgent} | IP: ${ip}`);
    return new Response('Forbidden', { status: 403 });
  }

  const response = new Response(null, { status: 200 });
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('X-Robots-Tag', 'noarchive, nosnippet');
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');

  return response;
}
