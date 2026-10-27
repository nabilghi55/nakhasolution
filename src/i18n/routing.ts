import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['id', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'id',
  
  // Indonesian stays at "/", English gets "/en". Distinct URLs per language are
  // what makes hreflang and canonical tags valid for search engines.
  localePrefix: 'as-needed',

  // Every visitor (and crawler) gets the language the URL names. The switcher
  // changes the URL instead of relying on cookies or Accept-Language.
  localeDetection: false,

  // hreflang is emitted per page through metadata, because some pages are Indonesian-only.
  alternateLinks: false
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
