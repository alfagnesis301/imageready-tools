import SpanishToolPage from "@/components/SpanishToolPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Optimizador de imágenes para sitios web",
  description:
    "Optimiza imágenes para velocidad, SEO, formatos web y publicación en sitios antes de subirlas a tu CMS.",
  path: "/es/website-image-optimizer",
  locale: "es"
});

export default function SpanishWebsiteImageOptimizerPage() {
  return (
    <SpanishToolPage
      eyebrow="Optimizador web"
      title="Optimizador de imágenes para sitios web"
      description="Revisa peso, dimensiones, formato, nombre de archivo y preparación antes de subir imágenes a tu sitio."
      path="/es/website-image-optimizer"
      preset="website-blog"
      toolDescription="Sube una imagen y obtén una revisión práctica para sitios web, blogs, páginas de aterrizaje y contenido SEO."
      sections={[
        {
          title: "Antes del CMS",
          body: "Detecta archivos demasiado pesados, nombres genéricos y dimensiones que no coinciden con el diseño antes de subirlos."
        },
        {
          title: "Velocidad y claridad",
          body: "Busca el archivo más ligero que siga viéndose claro en el contexto real de la página."
        },
        {
          title: "Formato intencional",
          body: "WebP suele ser útil para web moderna, JPG para fotos y PNG cuando transparencia o gráficos nítidos importan."
        }
      ]}
    />
  );
}
