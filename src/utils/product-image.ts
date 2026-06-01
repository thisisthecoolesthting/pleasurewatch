/** Product image URLs — catalog URL first, then Amazon fallbacks, optional local asset, SVG last. */

const FALLBACK_SVG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>` +
      `<rect width='120' height='120' fill='#EBE6DF'/>` +
      `<g fill='none' stroke='#64748B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'>` +
      `<rect x='28' y='34' width='64' height='52' rx='6'/>` +
      `<circle cx='46' cy='52' r='5'/>` +
      `<path d='m34 78 16-16 14 12 10-8 12 14'/>` +
      `</g></svg>`,
  );

export function localProductImagePath(slug: string): string {
  return `/images/products/${slug}.jpg`;
}

export function amazonAsinImageUrl(asin: string): string {
  const id = asin.trim().toUpperCase();
  return `https://m.media-amazon.com/images/P/${id}.01._SL500_.jpg`;
}

/** Prefer m.media-amazon.com — survives hotlink better than legacy ssl-images host. */
export function normalizeAmazonImageUrl(url: string): string {
  const trimmed = url.trim();
  const match = trimmed.match(/\/images\/I\/([^/?]+)/i);
  if (match?.[1]) return `https://m.media-amazon.com/images/I/${match[1]}`;
  return trimmed.replace(/images-na\.ssl-images-amazon\.com/i, 'm.media-amazon.com');
}

export function productImageCandidates(
  slug: string,
  asin: string,
  imageUrl?: string | null,
): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const add = (candidate?: string | null) => {
    const value = (candidate ?? '').trim();
    if (!value || seen.has(value)) return;
    seen.add(value);
    out.push(value);
  };

  if (asin?.trim()) add(amazonAsinImageUrl(asin));
  if (imageUrl?.trim()) {
    add(normalizeAmazonImageUrl(imageUrl));
    add(imageUrl.trim());
  }
  add(localProductImagePath(slug));
  add(FALLBACK_SVG);
  return out;
}

export function primaryProductImage(
  slug: string,
  asin: string,
  imageUrl?: string | null,
): string {
  return productImageCandidates(slug, asin, imageUrl)[0] ?? FALLBACK_SVG;
}

export { FALLBACK_SVG };
