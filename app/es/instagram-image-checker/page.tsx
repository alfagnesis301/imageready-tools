import SpanishToolPage from "@/components/SpanishToolPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Revisor de imágenes para Instagram",
  description:
    "Comprueba tamaños y proporciones para publicaciones, historias y formatos comunes de Instagram antes de publicar.",
  path: "/es/instagram-image-checker",
  locale: "es"
});

export default function SpanishInstagramImageCheckerPage() {
  return (
    <SpanishToolPage
      eyebrow="Herramienta para Instagram"
      title="Revisor de imágenes para Instagram"
      description="Revisa si una imagen encaja con formatos comunes de Instagram como publicación cuadrada, vertical, horizontal o historia."
      path="/es/instagram-image-checker"
      preset="instagram-post"
      toolDescription="Sube una imagen y elige el ajuste predefinido de Instagram para revisar proporción, tamaño, peso y formato."
      sections={[
        {
          title: "Feed cuadrado o vertical",
          body: "Las publicaciones cuadradas y 4:5 funcionan bien para composiciones centradas y visuales de producto."
        },
        {
          title: "Historias",
          body: "Las historias usan un marco vertical 9:16; deja espacio seguro para elementos de interfaz arriba y abajo."
        },
        {
          title: "Versiones separadas",
          body: "Para campañas importantes, crea copias distintas para feed, historia, portada y otros canales."
        }
      ]}
      checklist={[
        "Elige el destino antes de exportar: feed cuadrado, feed vertical, horizontal o historia.",
        "Mantén texto, rostros y producto lejos de bordes y controles de interfaz.",
        "Comprime la imagen final y revisa que no pierda nitidez.",
        "Crea versiones separadas si la misma campaña se publica en varios formatos."
      ]}
      commonMistakes={[
        "Subir una sola versión para todos los formatos y aceptar recortes pobres.",
        "Diseñar texto demasiado pequeño para pantallas móviles.",
        "Colocar información clave en zonas donde la interfaz puede superponerse.",
        "Exportar imágenes pesadas cuando una versión optimizada bastaría."
      ]}
      relatedLinks={[
        {
          href: "/es/guides/social-media-image-sizes",
          label: "Tamaños de imagen para redes sociales",
          description: "Consulta dimensiones prácticas para Instagram y otras plataformas."
        },
        {
          href: "/es/guides/image-publishing-checklist",
          label: "Checklist para publicar imágenes",
          description: "Revisa peso, formato, nombre, privacidad y recorte antes de publicar."
        },
        {
          href: "/es/guides/compress-images-without-losing-quality",
          label: "Cómo comprimir imágenes sin perder calidad",
          description: "Reduce peso sin que texto y detalles visuales se deterioren."
        }
      ]}
      faqs={[
        {
          question: "¿Qué formato de Instagram debería revisar primero?",
          answer: "Depende del destino. Para publicaciones generales, empieza con cuadrado o 4:5; para historias y reels, usa un formato vertical 9:16."
        },
        {
          question: "¿Una imagen horizontal funciona en Instagram?",
          answer: "Sí, pero puede ocupar menos espacio visual en el feed. Úsala cuando el contenido necesite un encuadre amplio."
        },
        {
          question: "¿Conviene crear varias versiones?",
          answer: "Sí. Para campañas importantes, una versión específica por formato evita recortes y pérdida de legibilidad."
        },
        {
          question: "¿Esta herramienta publica en Instagram?",
          answer: "No. Solo revisa la imagen localmente en el navegador antes de que la subas a tu cuenta o gestor de contenidos."
        }
      ]}
    />
  );
}
