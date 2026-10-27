type JsonLdData = Record<string, unknown> | Record<string, unknown>[];

/**
 * Serialises structured data for a <script type="application/ld+json">.
 * Escaping "<", ">", "&" and line separators keeps content such as "</script>"
 * inside a string from closing the tag early.
 */
export function serializeJsonLd(data: JsonLdData) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export default function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
