/**
 * AURELIA - Navigation Configuration
 *
 * Defines site navigation structure.
 */

export interface NavItem {
  label: string;
  href: string;
}

const BASE = "/aurelia-premium-restaurant-showcase";

export const navItems: NavItem[] = [
  { label: "Home", href: `${BASE}/` },
  { label: "Menu", href: `${BASE}/#menu` },
  { label: "Gallery", href: `${BASE}/#gallery` },
  { label: "About", href: `${BASE}/#about` },
  { label: "Download", href: `${BASE}/#download` },
  { label: "Contact", href: `${BASE}/#contact` },
];
