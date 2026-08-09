import SpanishToolPage from "@/components/SpanishToolPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Revisor de imágenes para Instagram",
  description:
    "Comprueba tamaños y proporciones de Instagram antes de publicar: feed vertical 3:4, cuadrado, historias y Reels, con el recorte de la cuadrícula de perfil.",
  path: "/es/instagram-image-checker",
  ogVariant: "instagram.png",
  locale: "es"
});

export default function SpanishInstagramImageCheckerPage() {
  return (
    <SpanishToolPage
      eyebrow="Herramienta para Instagram"
      title="Revisor de imágenes para Instagram"
      description="Revisa si una imagen encaja con los formatos de Instagram: vertical 3:4, cuadrada, 4:5, horizontal, historia y Reel."
      path="/es/instagram-image-checker"
      preset="instagram-post"
      toolDescription="Sube una imagen y elige el ajuste predefinido de Instagram para revisar proporción, tamaño, peso y formato."
      sections={[
        {
          title: "Feed vertical 3:4",
          body: "1080 x 1440 px llena el feed y coincide con la cuadrícula de perfil, que recorta todo a 3:4. Las publicaciones cuadradas y 4:5 se publican bien pero pierden bordes ahí."
        },
        {
          title: "Historias y Reels",
          body: "Ambos usan un marco vertical 9:16 de 1080 x 1920 px. La portada del Reel sale de ese mismo fotograma y luego se recorta a 3:4 en la cuadrícula."
        },
        {
          title: "Versiones separadas",
          body: "Para campañas importantes, crea copias distintas para feed, historia, portada y otros canales."
        }
      ]}
      checklist={[
        "Exporta las publicaciones de feed a 1080 x 1440 px salvo que tengas un motivo para no hacerlo.",
        "Elige el destino antes de exportar: feed vertical, cuadrado, horizontal, historia o Reel.",
        "Comprueba cómo queda en la cuadrícula 3:4 del perfil, no solo en el feed.",
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
          question: "¿Qué tamaño debería tener una publicación de Instagram?",
          answer: "1080 x 1440 px (3:4) es la opción más segura: llena el feed y coincide con la cuadrícula de perfil, así que no se recorta en ninguno de los dos sitios. Cuadrado (1080 x 1080) y 4:5 (1080 x 1350) se publican bien en el feed pero se recortan en la cuadrícula. Historias y Reels usan 1080 x 1920 px."
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
