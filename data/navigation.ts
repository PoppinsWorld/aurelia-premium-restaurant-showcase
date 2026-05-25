/**
 * AURELIA - Navigation Configuration
 *
 * Defines site navigation structure.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/#menu" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/#about" },
  { label: "Download", href: "/#download" },
  { label: "Contact", href: "/#contact" },
];
