import SpanishToolPage from "@/components/SpanishToolPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Revisor de miniaturas de YouTube",
  description:
    "Revisa si una miniatura de YouTube tiene proporción 16:9, dimensiones prácticas, peso adecuado y composición legible.",
  path: "/es/youtube-thumbnail-checker",
  locale: "es"
});

export default function SpanishYouTubeThumbnailCheckerPage() {
  return (
    <SpanishToolPage
      eyebrow="Herramienta para miniaturas"
      title="Revisor de miniaturas de YouTube"
      description="Comprueba una miniatura antes de subirla: tamaño, proporción, peso, formato y señales prácticas de legibilidad."
      path="/es/youtube-thumbnail-checker"
      preset="youtube-thumbnail"
      toolDescription="Sube una miniatura y revisa si encaja con un objetivo práctico de 1280 x 720 px y proporción 16:9."
      sections={[
        {
          title: "Proporción 16:9",
          body: "La miniatura suele funcionar mejor en un marco ancho 16:9, especialmente para feeds y resultados."
        },
        {
          title: "Texto legible",
          body: "Si usas texto, mantenlo grande, breve y con contraste suficiente para pantallas móviles."
        },
        {
          title: "Zona segura",
          body: "Evita colocar rostros, texto o productos clave en los bordes, donde las superposiciones pueden cubrirlos."
        }
      ]}
      checklist={[
        "Trabaja en un lienzo 16:9 y revisa el resultado a tamaño pequeño.",
        "Usa un punto focal claro y suficiente contraste entre texto y fondo.",
        "Evita saturar la miniatura con demasiadas palabras o elementos.",
        "Comprime la imagen final y conserva una copia editable por separado."
      ]}
      commonMistakes={[
        "Diseñar solo para escritorio y olvidar cómo se verá en móvil.",
        "Usar texto largo que se vuelve ilegible en resultados o recomendaciones.",
        "Colocar caras, producto o texto demasiado cerca de los bordes.",
        "Exportar una captura borrosa o una imagen ampliada desde una fuente pequeña."
      ]}
      relatedLinks={[
        {
          href: "/es/guides/youtube-thumbnail-image-guide",
          label: "Guía de miniaturas para YouTube",
          description: "Prepara miniaturas legibles, consistentes y listas para publicar."
        },
        {
          href: "/es/guides/social-media-image-sizes",
          label: "Tamaños de imagen para redes sociales",
          description: "Compara tamaños comunes para YouTube y otras plataformas."
        },
        {
          href: "/es/guides/webp-vs-jpeg-vs-png",
          label: "WebP vs JPEG vs PNG",
          description: "Elige un formato práctico según el tipo de imagen y el destino."
        }
      ]}
      faqs={[
        {
          question: "¿Qué tamaño suele funcionar para miniaturas de YouTube?",
          answer: "Un objetivo práctico habitual es 1280 x 720 px con proporción 16:9."
        },
        {
          question: "¿Cuánto texto debería tener una miniatura?",
          answer: "El mínimo necesario. Debe leerse rápido en móvil y no competir con el título del vídeo."
        },
        {
          question: "¿La herramienta detecta si una miniatura atraerá clics?",
          answer: "No. Revisa señales técnicas como tamaño, proporción, peso y formato, pero la calidad editorial depende del contenido."
        },
        {
          question: "¿Debo revisar la miniatura después de comprimir?",
          answer: "Sí. La compresión puede afectar texto, caras y bordes; conviene revisar visualmente la versión final."
        }
      ]}
    />
  );
}
