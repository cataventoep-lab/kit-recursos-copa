export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `/kit-recursos-copa${src}`;
}
