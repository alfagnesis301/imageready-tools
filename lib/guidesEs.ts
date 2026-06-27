import type { Guide } from "./guides";

export const GUIDES_ES: Guide[] = [
  {
    slug: "image-size-for-web",
    title: "Tamaño de imagen para web: dimensiones prácticas antes de publicar",
    description:
      "Aprende a elegir dimensiones de imagen que se vean nítidas sin ralentizar tus páginas.",
    intro:
      "Elegir el tamaño de una imagen para web es una decisión de equilibrio. Un archivo puede ser válido y aun así ser demasiado grande para la página, demasiado pequeño para pantallas modernas o tener una forma que no encaja con el diseño final.",
    sections: [
      {
        heading: "Empieza por la ubicación final",
        body: [
          "Una imagen principal, una miniatura de producto, una imagen de artículo y un retrato de autor no necesitan las mismas dimensiones. Antes de exportar, decide dónde aparecerá la imagen y cuánto espacio ocupará en escritorio y móvil.",
          "Para muchos artículos y páginas de aterrizaje, un ancho entre 1200 y 1600 píxeles es un punto de partida práctico. Los banners grandes pueden necesitar más anchura, mientras que cards y miniaturas suelen funcionar con menos."
        ]
      },
      {
        heading: "Evita originales sobredimensionados",
        body: [
          "Subir una foto de 5000 píxeles de ancho para una columna de contenido de 700 píxeles desperdicia ancho de banda y puede perjudicar la velocidad.",
          "Los archivos grandes también hacen más lento el flujo del CMS. Un recurso más ligero es más fácil de previsualizar, subir, cachear y entregar."
        ]
      },
      {
        heading: "Cuidado con ampliar imágenes pequeñas",
        body: [
          "Si una imagen es demasiado pequeña, hacerla más grande no recupera detalle. Puede encajar en las dimensiones, pero los bordes y el texto se verán blandos.",
          "Para contenido importante como productos o miniaturas, parte de una fuente con más tamaño que el destino final."
        ]
      },
      {
        heading: "Combina dimensiones y compresión",
        body: [
          "Las dimensiones controlan cuántos píxeles contiene la imagen. La compresión controla cómo se almacenan esos píxeles.",
          "PublishPixel ayuda a detectar imágenes demasiado pesadas, demasiado pequeñas o desajustadas para objetivos comunes de publicación."
        ]
      }
    ],
    takeaway:
      "Usa las dimensiones más pequeñas que sigan viéndose nítidas en el diseño final y comprime con cuidado antes de publicar."
  },
  {
    slug: "remove-image-metadata",
    title: "Cómo eliminar metadatos de una imagen antes de publicar",
    description:
      "Comprende los metadatos EXIF, riesgos de privacidad y formas más seguras de publicar imágenes online.",
    intro:
      "Los archivos de imagen pueden contener metadatos que no se ven en la foto. Según el dispositivo y el flujo, pueden incluir detalles de cámara, fechas, software de edición y, a veces, información de ubicación.",
    sections: [
      {
        heading: "Qué pueden incluir los metadatos",
        body: [
          "Los metadatos comunes pueden describir modelo de cámara, lente, exposición, fecha de creación o software usado para editar el archivo.",
          "Algunas fotos también pueden incluir coordenadas GPS si los servicios de ubicación estaban activos al capturar la imagen."
        ]
      },
      {
        heading: "Por qué importan",
        body: [
          "Los metadatos pueden ser útiles en fotografía, pero pueden ser innecesarios o arriesgados cuando publicas en una web pública.",
          "En imágenes personales, sensibles o ligadas a ubicaciones privadas, eliminar metadatos innecesarios reduce exposición."
        ]
      },
      {
        heading: "Reexportación con Canvas y metadatos",
        body: [
          "Cuando el navegador reexporta una imagen mediante Canvas, normalmente no conserva metadatos EXIF. Esto puede ayudar, pero el comportamiento varía por navegador y formato.",
          "No dependas de una sola herramienta si la privacidad es crítica. Verifica el archivo final con una herramienta dedicada."
        ]
      },
      {
        heading: "Un flujo más seguro",
        body: [
          "Comprueba si existen metadatos, exporta una copia limpia y verifica el archivo final cuando la privacidad importe.",
          "PublishPixel muestra señales básicas en navegador y recuerda revisar fotos sensibles antes de compartirlas."
        ]
      }
    ],
    takeaway:
      "Trata los metadatos como parte de la preparación de imagen, sobre todo en fotos personales o contextos sensibles."
  },
  {
    slug: "image-alt-text",
    title: "Cómo escribir texto alternativo útil para imágenes",
    description:
      "Escribe texto alternativo más claro para accesibilidad, contexto y mejores flujos de publicación.",
    intro:
      "El texto alternativo ayuda a entender una imagen cuando no se puede ver o cuando no carga. Debe describir el contenido visual relevante dentro del contexto de la página, no funcionar como una lista de palabras clave.",
    sections: [
      {
        heading: "Describe la información útil",
        body: [
          "Un buen texto alternativo se centra en lo que el lector necesita saber. Una imagen de producto, un gráfico, un retrato y un fondo decorativo requieren tratamientos diferentes.",
          "Si la imagen es puramente decorativa y no aporta información, un atributo alt vacío puede ser más apropiado en el HTML final."
        ]
      },
      {
        heading: "Sé específico y natural",
        body: [
          "Evita textos vagos como imagen, foto o gráfico salvo que ese contexto sea relevante. También evita rellenar palabras clave que no ayudan al usuario.",
          "Una estructura práctica es: sujeto visible, detalle importante y contexto de la página."
        ]
      },
      {
        heading: "Ejemplos de mejor texto alternativo",
        body: [
          "En vez de “imagen de mochila”, escribe “Mochila negra de viaje con bolsillo frontal sobre fondo blanco” cuando ese detalle importe.",
          "Para una cabecera de artículo, describe la escena y su relación con el tema sin inventar detalles no visibles."
        ]
      },
      {
        heading: "Cuándo no sobre-describir",
        body: [
          "Si el texto alrededor ya explica la imagen, el texto alternativo puede ser breve. Si la imagen contiene información esencial, ofrece suficiente detalle o una alternativa textual cercana.",
          "PublishPixel da una guía de estructura en vez de inventar descripciones visuales por ti."
        ]
      }
    ],
    takeaway:
      "Escribe texto alternativo primero para el usuario: claro, relevante y honesto sobre lo que realmente muestra la imagen."
  },
  {
    slug: "webp-vs-jpeg-vs-png",
    title: "WebP vs JPEG vs PNG: qué formato de imagen deberías usar",
    description:
      "Compara formatos comunes y elige un formato práctico para páginas web y vistas sociales.",
    intro:
      "El mejor formato depende del contenido de la imagen y de dónde se publicará. WebP, JPEG y PNG pueden ser opciones correctas en contextos distintos.",
    sections: [
      {
        heading: "Cuándo WebP es útil",
        body: [
          "WebP suele crear archivos más pequeños que JPEG o PNG manteniendo buena calidad visual. Es una buena opción por defecto para muchas imágenes web modernas.",
          "También puede admitir transparencia, lo que lo hace útil en algunos gráficos donde PNG sería más pesado."
        ]
      },
      {
        heading: "Cuándo JPEG es útil",
        body: [
          "JPEG tiene soporte amplio y funciona bien para fotografías sin transparencia.",
          "No admite transparencia, por lo que los fondos transparentes se aplanarán."
        ]
      },
      {
        heading: "Cuándo PNG es útil",
        body: [
          "PNG es útil para gráficos nítidos, capturas, logotipos e imágenes que necesitan transparencia.",
          "En fotos grandes, PNG puede generar archivos mucho más pesados de lo necesario."
        ]
      },
      {
        heading: "El formato no lo resuelve todo",
        body: [
          "Un buen formato puede seguir siendo lento si la imagen está sobredimensionada.",
          "Revisa siempre dimensiones, compresión y cómo se mostrará la imagen."
        ]
      }
    ],
    takeaway:
      "Usa WebP para muchas imágenes web modernas, JPEG para fotos de compatibilidad amplia y PNG cuando importen transparencia o gráficos nítidos."
  },
  {
    slug: "image-seo-checklist",
    title: "Checklist SEO de imágenes antes de publicar",
    description:
      "Un checklist práctico para nombres de archivo, texto alternativo, dimensiones, peso y vistas sociales.",
    intro:
      "El SEO de imágenes no es un truco único. Es un conjunto de hábitos de publicación que hacen que las imágenes sean más fáciles de cargar, entender y reutilizar en buscadores y superficies de compartición.",
    sections: [
      {
        heading: "Usa nombres de archivo claros",
        body: [
          "Un nombre de archivo debe dar una pista básica sobre la imagen. Usa palabras simples separadas por guiones y evita nombres largos aleatorios.",
          "Un buen nombre no necesita repetir todas las palabras clave de la página."
        ]
      },
      {
        heading: "Añade texto alternativo relevante",
        body: [
          "El texto alternativo debe explicar la imagen en contexto. Apoya accesibilidad y puede aclarar el propósito de la imagen.",
          "No inventes detalles visuales ni uses el texto alternativo como lista de términos de búsqueda."
        ]
      },
      {
        heading: "Prepara imágenes de vista previa",
        body: [
          "Open Graph y vistas de artículo suelen usar proporciones amplias como 1200 x 630.",
          "Prepara una imagen dedicada para artículos, productos y campañas importantes."
        ]
      },
      {
        heading: "Mantén imágenes rápidas",
        body: [
          "Los archivos pesados pueden ralentizar páginas y hacer que el contenido parezca menos pulido.",
          "PublishPixel destaca archivos pesados y sugiere objetivos prácticos de exportación."
        ]
      }
    ],
    takeaway:
      "Un buen SEO de imágenes combina contexto claro, descripciones accesibles, dimensiones adecuadas y carga rápida."
  },
  {
    slug: "social-media-image-sizes",
    title: "Cómo recortar y preparar imágenes para redes sociales (2026)",
    description:
      "Flujo paso a paso para recortar y preparar una sola imagen fuente para Open Graph, YouTube, Instagram, LinkedIn, Pinterest y feeds de producto.",
    intro:
      "Las plataformas sociales muestran imágenes en formas diferentes. Esta guía explica cómo preparar una sola imagen fuente para varias ubicaciones. ¿Buscas las dimensiones exactas en píxeles por plataforma? Consulta nuestra hoja de tamaños de imagen para redes sociales enlazada más abajo.",
    sections: [
      {
        heading: "Open Graph y vistas de enlace",
        body: [
          "Un tamaño común de Open Graph es 1200 x 630 píxeles, cercano a una proporción 1.91:1.",
          "Mantén el contenido importante lejos de los bordes porque las vistas previas varían entre aplicaciones."
        ]
      },
      {
        heading: "Miniaturas de YouTube",
        body: [
          "Un tamaño práctico común es 1280 x 720 píxeles con proporción 16:9.",
          "Usa un punto focal claro y deja espacio para superposiciones de interfaz."
        ]
      },
      {
        heading: "Instagram y formatos verticales",
        body: [
          "Instagram usa proporciones cuadradas, verticales y horizontales. Las historias usan un marco vertical 9:16.",
          "No dependas del recorte automático para texto o rostros importantes."
        ]
      },
      {
        heading: "Pins y productos",
        body: [
          "Pinterest suele funcionar bien con una proporción alta 2:3, mientras que productos encajan a menudo en cuadrados.",
          "PublishPixel te permite comparar la imagen con ajustes predefinidos orientados a plataformas."
        ]
      }
    ],
    takeaway:
      "Elige el recorte según el destino y revisa dimensiones, proporción y peso antes de publicar."
  },
  {
    slug: "compress-images-without-losing-quality",
    title: "Cómo comprimir imágenes sin perder demasiada calidad",
    description:
      "Reduce el peso de imágenes manteniendo fotos y gráficos suficientemente claros para publicar.",
    intro:
      "Comprimir consiste en encontrar el archivo más pequeño que todavía se vea bien en contexto. El ajuste correcto depende del contenido, formato y lugar donde aparecerá la imagen.",
    sections: [
      {
        heading: "Redimensiona antes de comprimir",
        body: [
          "Si una imagen es mucho más grande que el diseño final, redimensiónala primero. La compresión por sí sola no corrige dimensiones innecesarias.",
          "Reducir píxeles suele ahorrar más que bajar unos pocos puntos de calidad."
        ]
      },
      {
        heading: "Usa el formato correcto",
        body: [
          "Para muchas fotos web, WebP o JPEG comprimido pueden ser más ligeros que PNG.",
          "Para gráficos con transparencia, WebP o PNG pueden ser apropiados según compatibilidad."
        ]
      },
      {
        heading: "Revisa detalles visuales",
        body: [
          "Observa rostros, texto, bordes y degradados después de comprimir. Esas zonas suelen mostrar pérdida de calidad antes.",
          "No juzgues solo por el peso: verifica si el resultado sigue sirviendo al lector."
        ]
      },
      {
        heading: "Crea un objetivo repetible",
        body: [
          "Para imágenes de blog, unos cientos de KB suelen ser un objetivo práctico. En banners principales puede ser más alto, pero debe ser intencional.",
          "PublishPixel estima oportunidad de compresión y ofrece exportaciones locales en formatos comunes."
        ]
      }
    ],
    takeaway:
      "Redimensiona al tamaño correcto, elige un formato práctico y comprime hasta que la imagen siga siendo clara para su propósito."
  },
  {
    slug: "photo-privacy-before-publishing",
    title: "Checklist de privacidad antes de publicar fotos online",
    description:
      "Revisa metadatos, detalles visibles, permisos y contexto sensible antes de publicar fotos.",
    intro:
      "Una foto puede revelar más de lo previsto. Antes de publicarla, revisa tanto el contenido visible como la información oculta del archivo para no compartir detalles privados por accidente.",
    sections: [
      {
        heading: "Revisa información visible",
        body: [
          "Busca direcciones, documentos, pantallas, credenciales, matrículas, rostros y entornos privados.",
          "Puede ser necesario recortar o difuminar cuando una foto contiene información que no debería ser pública."
        ]
      },
      {
        heading: "Revisa metadatos",
        body: [
          "Algunas fotos contienen EXIF con marcas de tiempo, detalles de cámara o información de ubicación.",
          "Elimina metadatos innecesarios antes de publicar imágenes personales o sensibles."
        ]
      },
      {
        heading: "Confirma derechos y consentimiento",
        body: [
          "Asegúrate de tener permiso para publicar la imagen, especialmente si incluye personas, propiedades privadas, productos o material con copyright.",
          "PublishPixel no sustituye asesoría legal, pero puede recordarte revisar riesgos de publicación."
        ]
      },
      {
        heading: "Conserva copias más seguras",
        body: [
          "Exporta una copia de publicación en vez de subir el archivo original.",
          "Usa el archivo exportado final para web, redes o marketplace."
        ]
      }
    ],
    takeaway:
      "Antes de publicar una foto, revisa detalles visibles, metadatos ocultos y si tienes derecho a compartirla."
  },
  {
    slug: "image-publishing-checklist",
    title: "Checklist de imágenes antes de subirlas online",
    description:
      "Un checklist previo para tamaño, formato, texto alternativo, nombre de archivo, metadatos y vistas previas.",
    intro:
      "Publicar una imagen no es solo subir un archivo. Un buen flujo revisa si la imagen es clara, ligera, privada, accesible y adecuada para el lugar donde aparecerá.",
    sections: [
      {
        heading: "Revisa primero el destino",
        body: [
          "Una imagen de blog, vista social, producto y cabecera de email necesitan dimensiones y formatos distintos.",
          "Cuando el destino está claro, es más fácil elegir recorte, ancho máximo, peso objetivo y formato."
        ]
      },
      {
        heading: "Prepara una copia de publicación",
        body: [
          "Mantén el archivo original privado y exporta una copia dedicada para la web, CMS, campaña o tienda.",
          "Una copia de publicación se puede redimensionar, comprimir y renombrar sin dañar la fuente."
        ]
      },
      {
        heading: "Comprueba accesibilidad y contexto",
        body: [
          "Las imágenes útiles deberían tener un plan de texto alternativo cuando comunican información.",
          "Un nombre de archivo claro y contenido cercano relevante también ayudan a gestionar el recurso."
        ]
      },
      {
        heading: "Verifica privacidad y metadatos",
        body: [
          "Revisa detalles visibles y metadatos legibles por navegador antes de publicar fotos personales o sensibles.",
          "En situaciones de mayor riesgo, usa herramientas dedicadas y verifica el archivo final."
        ]
      }
    ],
    takeaway:
      "Un flujo completo revisa destino, dimensiones, peso, formato, nombre, texto alternativo y privacidad antes de subir."
  },
  {
    slug: "open-graph-image-best-practices",
    title: "Buenas prácticas para imágenes Open Graph y mejores vistas previas",
    description:
      "Prepara imágenes Open Graph con dimensiones prácticas, zonas seguras, texto legible y exportaciones ligeras.",
    intro:
      "Las imágenes Open Graph influyen en cómo se ve una página al compartirse. Un mal recorte, archivo pesado o texto ilegible puede hacer que una página útil parezca incompleta.",
    sections: [
      {
        heading: "Usa una imagen dedicada",
        body: [
          "Las páginas importantes suelen merecer una imagen Open Graph dedicada en vez de depender de una imagen cualquiera de la página.",
          "Una vista dedicada da más control sobre recorte, foco, tamaño de texto y consistencia visual."
        ]
      },
      {
        heading: "Mantén el recorte seguro",
        body: [
          "Un objetivo común es 1200 x 630 píxeles, pero las superficies de vista previa pueden variar.",
          "Aleja rostros, productos, logos y texto de los bordes extremos."
        ]
      },
      {
        heading: "Equilibra peso y calidad",
        body: [
          "Una imagen de vista previa debe ser clara, pero no necesita ser un original de cámara enorme.",
          "Comprime el archivo e inspecciona texto pequeño, degradados y bordes."
        ]
      },
      {
        heading: "Alinea la metadata de la página",
        body: [
          "La imagen funciona mejor cuando título, descripción y mensaje visual apuntan en la misma dirección.",
          "Después de publicar, prueba la URL final en las plataformas importantes."
        ]
      }
    ],
    takeaway:
      "Una buena imagen Open Graph es una vista dedicada, ligera, amplia y con contenido importante centrado."
  },
  {
    slug: "youtube-thumbnail-image-guide",
    title: "Guía de miniaturas de YouTube para vistas previas más claras",
    description:
      "Prepara miniaturas de YouTube con dimensiones prácticas, texto legible, zonas seguras y composición clara.",
    intro:
      "Una miniatura tiene que comunicar rápido a tamaños pequeños. Incluso una exportación técnica correcta puede fallar si el foco, contraste o texto no son claros.",
    sections: [
      {
        heading: "Empieza con el marco 16:9",
        body: [
          "Un objetivo práctico común es 1280 x 720 píxeles. Da un marco amplio que funciona en muchas superficies de vídeo.",
          "Usa una fuente con suficiente detalle para que el exportado siga siendo nítido."
        ]
      },
      {
        heading: "Haz evidente el punto focal",
        body: [
          "Rostros, productos, resultados o sujetos clave deberían reconocerse incluso en miniatura.",
          "Evita fondos saturados y detalles diminutos que desaparecen en móvil."
        ]
      },
      {
        heading: "Usa texto con cuidado",
        body: [
          "Si incluyes texto, que sea breve, grande y con buen contraste.",
          "Deja espacio alrededor del texto y evita colocar palabras clave en bordes extremos."
        ]
      },
      {
        heading: "Exporta un archivo dedicado",
        body: [
          "Un fotograma aleatorio puede servir, pero los vídeos importantes suelen beneficiarse de una miniatura diseñada.",
          "Comprueba dimensiones, peso y formato antes de subir el archivo final."
        ]
      }
    ],
    takeaway:
      "Una miniatura útil combina exportación 16:9, punto focal claro, texto legible y un archivo fácil de subir."
  },
  {
    slug: "website-image-performance-checklist",
    title: "Checklist de rendimiento de imágenes para sitios web",
    description:
      "Mejora velocidad revisando dimensiones, peso, formato, entrega adaptable y flujo de publicación.",
    intro:
      "Las imágenes suelen llevar el mayor peso evitable de una página. Un flujo práctico empieza antes de subir el archivo y continúa con entrega adaptable.",
    sections: [
      {
        heading: "Redimensiona al diseño",
        body: [
          "No subas un original enorme cuando el diseño final necesita una imagen mucho menor.",
          "Cada ubicación debería tener una razón para sus dimensiones."
        ]
      },
      {
        heading: "Elige el formato correcto",
        body: [
          "WebP suele ser útil en sitios modernos, JPEG sigue siendo práctico para fotos y PNG sirve para transparencia o gráficos nítidos.",
          "El formato adecuado depende del contenido, transparencia y compatibilidad."
        ]
      },
      {
        heading: "Comprime con cuidado",
        body: [
          "La compresión debe reducir peso sin destruir información visual importante.",
          "Inspecciona texto, detalles de producto, rostros y degradados después de exportar."
        ]
      },
      {
        heading: "Planifica entrega adaptable",
        body: [
          "El archivo preparado es solo una parte del rendimiento. En producción conviene usar marcado adaptable, caché y carga adecuada.",
          "Un recurso limpio ayuda con esas optimizaciones posteriores."
        ]
      }
    ],
    takeaway:
      "El rendimiento mejora cuando dimensiones, formato, compresión y entrega adaptable se planifican juntos."
  }
];

export function getGuideEs(slug: string): Guide | undefined {
  return GUIDES_ES.find((guide) => guide.slug === slug);
}
