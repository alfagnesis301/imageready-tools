import HomePage from "../page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Herramienta gratuita para revisar imágenes antes de publicar",
  description:
    "Comprueba si tu imagen está lista para sitios web, SEO, redes sociales, miniaturas, e-commerce, emails y más con una herramienta privada que funciona en tu navegador.",
  path: "/es",
  locale: "es"
});

export default function SpanishHomePage() {
  return <HomePage />;
}
