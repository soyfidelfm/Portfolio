import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

const SESSION_KEY = 'portfolio_visit_notified';

// Expanded bot / scraper detection
const BOT_PATTERN =
  /bot|crawl|spider|slurp|preview|facebookexternalhit|whatsapp|telegram|discord|lighthouse|pagespeed|headless|dataprovider|scrapy|python-requests|go-http-client|java\/|curl|wget|postman|insomnia|okhttp|apache-httpclient|libwww|httpclient|phantom|selenium|puppeteer|playwright|headlesschrome|semrush|ahrefs|mj12bot|dotbot|petalbot|bingbot|googlebot|yandex|baiduspider|sogou|exabot|ia_archiver|archive.org|wayback|uptimerobot|pingdom|statuscake|newrelic|datadog|site24x7|monitor|checker|probe|scanner/i;

// Hosting / datacenter ISPs commonly used by bots and scrapers
const BOT_ISP_PATTERN =
  /ovh|digitalocean|linode|vultr|hetzner|amazon|aws|google cloud|azure|microsoft|cloudflare|fastly|akamai|leaseweb|contabo|choopa|psychz|quadranet|serverius|nforce|worldstream/i;

const SERVICE_ID = 'service_r6rgmen';
const TEMPLATE_ID = 'template_pa2uspr';
const PUBLIC_KEY = 'ucldgL879wkI1OnLX';

interface GeoLookup {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  org?: string;
  connection?: { isp?: string };
}

@Injectable({ providedIn: 'root' })
export class VisitorPingService {
  notifyVisit(): void {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    if (BOT_PATTERN.test(navigator.userAgent)) return;

    sessionStorage.setItem(SESSION_KEY, 'true');
    void this.sendPing();
  }

  private async sendPing(): Promise<void> {
    const geo = await this.lookupVisitor();
    const isp = geo.org || geo.connection?.isp || '';

    // Skip if the ISP looks like a datacenter / bot host
    if (BOT_ISP_PATTERN.test(isp)) {
      console.log('Skipped bot-like ISP:', isp);
      return;
    }

    const locationParts = [geo.city, geo.region, geo.country].filter(Boolean);
    const pstTime = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      dateStyle: 'full',
      timeStyle: 'medium'
    }).format(new Date());

    const templateParams = {
      to_email: 'fidelfilio@icloud.com',
      visitor_name: 'Portfolio visitor',
      visitor_email: 'Not provided (silent visit ping)',
      visitor_ip: geo.ip || 'Not available',
      visitor_location:
        locationParts.join(', ') || 'Approximate location not available',
      action: [
        `Page visit: ${window.location.pathname || '/'}`,
        `Referrer: ${document.referrer || 'Direct / unknown'}`,
        `ISP: ${isp || 'Unknown'}`,
        `Browser: ${navigator.userAgent}`
      ].join(' | '),
      timestamp: pstTime
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    } catch (error) {
      console.error('Visit notification failed:', error);
    }
  }

  private async lookupVisitor(): Promise<GeoLookup> {
    try {
      const response = await fetch('https://ipwho.is/');
      if (!response.ok) return {};
      const data = (await response.json()) as GeoLookup & { success?: boolean };
      return data.success === false ? {} : data;
    } catch {
      return {};
    }
  }
}
