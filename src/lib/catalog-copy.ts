export function cleanCatalogText(value: string | number | undefined | null) {
  if (value === undefined || value === null) {
    return "";
  }

  return String(value)
    .replaceAll("â€“", "-")
    .replaceAll("â€”", "-")
    .replaceAll("â†’", " to ")
    .replaceAll("â‚¹", "Rs. ")
    .replaceAll("Â£", "GBP ")
    .replaceAll("Â¥", "JPY ")
    .replaceAll("Â©", "(c)")
    .replaceAll("â€¢", "/")
    .replaceAll("â€™", "'")
    .replaceAll("â€œ", "\"")
    .replaceAll("â€", "\"")
    .replaceAll("Â", "")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;:])/g, "$1")
    .trim();
}

export function compactCatalogText(value: string | undefined, maxLength = 132) {
  const text = cleanCatalogText(value);

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).replace(/\s+\S*$/, "")}...`;
}

export function productJobLabel(format: string) {
  const cleanFormat = cleanCatalogText(format).toLowerCase();

  if (cleanFormat.includes("tool")) return "Reusable tool";
  if (cleanFormat.includes("kit")) return "Starter kit";
  if (cleanFormat.includes("wrap")) return "Wrap system";
  if (cleanFormat.includes("sealing")) return "Seal system";
  if (cleanFormat.includes("storage")) return "Storage system";

  return cleanCatalogText(format);
}
