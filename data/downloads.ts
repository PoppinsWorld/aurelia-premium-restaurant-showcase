/**
 * AURELIA - APK Download Configuration
 *
 * Defines available APK downloads for the mobile app.
 * Files are served from /public/apk/
 */

export interface ApkAsset {
  id: string;
  name: string;
  architecture: string;
  description: string;
  filename: string;
  path: string;
  sha1Path: string;
  size: string;
}

const BASE = "/aurelia-premium-restaurant-showcase";

export const apkAssets: ApkAsset[] = [
  {
    id: "arm64",
    name: "ARM64",
    architecture: "arm64-v8a",
    description: "For modern 64-bit devices (most recent phones & tablets)",
    filename: "app-arm64-v8a-release.apk",
    path: `${BASE}/apk/app-arm64-v8a-release.apk`,
    sha1Path: `${BASE}/apk/app-arm64-v8a-release.apk.sha1`,
    size: "~13 MB",
  },
  {
    id: "armv7",
    name: "ARMv7",
    architecture: "armeabi-v7a",
    description: "For older 32-bit ARM devices",
    filename: "app-armeabi-v7a-release.apk",
    path: `${BASE}/apk/app-armeabi-v7a-release.apk`,
    sha1Path: `${BASE}/apk/app-armeabi-v7a-release.apk.sha1`,
    size: "~12.6 MB",
  },
  {
    id: "x86_64",
    name: "x86_64",
    architecture: "x86_64",
    description: "For emulators and Intel-based devices",
    filename: "app-x86_64-release.apk",
    path: `${BASE}/apk/app-x86_64-release.apk`,
    sha1Path: `${BASE}/apk/app-x86_64-release.apk.sha1`,
    size: "~13.2 MB",
  },
];

export const recommendedApk = apkAssets[0]; // arm64 is most common
