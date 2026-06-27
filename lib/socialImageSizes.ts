export type LanguageCode = "en" | "es";

type LocalizedText = Record<LanguageCode, string>;

export type SocialImageSizeItem = {
  id: string;
  type: LocalizedText;
  dimensions: string;
  aspectRatio: string;
  notes: LocalizedText;
  featuredInCheatSheet?: boolean;
};

export type SocialImagePlatform = {
  id: string;
  name: string;
  intro: LocalizedText;
  items: SocialImageSizeItem[];
};

export const SOCIAL_MEDIA_IMAGE_OG = "/social-media-image-sizes-og.svg";
export const SOCIAL_MEDIA_IMAGE_OG_ABSOLUTE =
  "https://publishpixel.net/social-media-image-sizes-og.svg";

export const SOCIAL_MEDIA_IMAGE_SIZES: SocialImagePlatform[] = [
  {
    id: "instagram",
    name: "Instagram",
    intro: {
      en: "Instagram works best with square images, 4:5 portrait posts, and 9:16 content for Stories and Reels. Keep text and key subjects away from the edges so interface overlays do not crowd the design.",
      es: "Instagram funciona mejor con imágenes cuadradas, publicaciones verticales 4:5 y contenido 9:16 para historias y reels. Mantén el texto y los elementos clave lejos de los bordes para evitar superposiciones."
    },
    items: [
      {
        id: "profile-photo",
        type: { en: "Profile photo", es: "Foto de perfil" },
        dimensions: "320 x 320 px",
        aspectRatio: "1:1",
        notes: {
          en: "A square source keeps the profile image sharp across the app.",
          es: "Una fuente cuadrada ayuda a mantener la imagen nítida en toda la aplicación."
        }
      },
      {
        id: "feed-square",
        type: { en: "Feed square", es: "Publicación cuadrada" },
        dimensions: "1080 x 1080 px",
        aspectRatio: "1:1",
        notes: {
          en: "Safe square format for general feed posts.",
          es: "Formato cuadrado seguro para publicaciones generales del feed."
        },
        featuredInCheatSheet: true
      },
      {
        id: "feed-portrait",
        type: { en: "Feed portrait", es: "Publicación vertical" },
        dimensions: "1080 x 1350 px",
        aspectRatio: "4:5",
        notes: {
          en: "A strong mobile-first format that uses more vertical feed space.",
          es: "Formato pensado para móvil que aprovecha mejor el espacio vertical del feed."
        }
      },
      {
        id: "feed-landscape",
        type: { en: "Feed landscape", es: "Publicación horizontal" },
        dimensions: "1080 x 566 px",
        aspectRatio: "1.91:1",
        notes: {
          en: "Useful for wide scenes, but text can feel smaller in feed previews.",
          es: "Útil para escenas amplias, aunque el texto puede verse más pequeño en el feed."
        }
      },
      {
        id: "stories",
        type: { en: "Stories", es: "Historias" },
        dimensions: "1080 x 1920 px",
        aspectRatio: "9:16",
        notes: {
          en: "Keep important details away from top and bottom interface zones.",
          es: "Mantén los detalles importantes lejos de las zonas superiores e inferiores de interfaz."
        },
        featuredInCheatSheet: true
      },
      {
        id: "reels-cover",
        type: { en: "Reels cover / vertical", es: "Portada de Reel / vertical" },
        dimensions: "1080 x 1920 px",
        aspectRatio: "9:16",
        notes: {
          en: "Use a centered focal point so the cover still works when cropped in grids.",
          es: "Usa un punto focal centrado para que la portada siga funcionando en recortes de cuadrícula."
        }
      }
    ]
  },
  {
    id: "facebook",
    name: "Facebook",
    intro: {
      en: "Facebook uses different formats for feed posts, stories, cover images, and profile photos. Cropping can vary between desktop and mobile, so centered compositions are usually safer.",
      es: "Facebook usa formatos distintos para feed, historias, portada y perfil. El recorte puede variar entre escritorio y móvil, así que una composición centrada suele ser más segura."
    },
    items: [
      {
        id: "profile-picture",
        type: { en: "Profile picture", es: "Foto de perfil" },
        dimensions: "400 x 400 px or larger",
        aspectRatio: "1:1",
        notes: {
          en: "Facebook may display smaller, but a larger square upload preserves quality.",
          es: "Facebook puede mostrarla más pequeña, pero una subida cuadrada mayor conserva calidad."
        }
      },
      {
        id: "cover-photo",
        type: { en: "Cover photo", es: "Portada" },
        dimensions: "851 x 315 px",
        aspectRatio: "2.7:1",
        notes: {
          en: "Keep logos and text centered because the crop changes by screen size.",
          es: "Mantén logos y texto centrados porque el recorte cambia según el dispositivo."
        },
        featuredInCheatSheet: true
      },
      {
        id: "feed-square",
        type: { en: "Feed square", es: "Publicación cuadrada" },
        dimensions: "1080 x 1080 px",
        aspectRatio: "1:1",
        notes: {
          en: "A flexible square option for general feed content.",
          es: "Opción cuadrada flexible para contenido general del feed."
        }
      },
      {
        id: "feed-landscape",
        type: { en: "Feed landscape / link image", es: "Publicación horizontal / enlace" },
        dimensions: "1200 x 630 px",
        aspectRatio: "1.91:1",
        notes: {
          en: "A common safe default for links and wider feed creatives.",
          es: "Valor seguro común para enlaces y creatividades horizontales del feed."
        },
        featuredInCheatSheet: true
      },
      {
        id: "story",
        type: { en: "Story", es: "Historia" },
        dimensions: "1080 x 1920 px",
        aspectRatio: "9:16",
        notes: {
          en: "Keep text away from top and bottom controls.",
          es: "Mantén el texto lejos de los controles superiores e inferiores."
        }
      }
    ]
  },
  {
    id: "x-twitter",
    name: "X / Twitter",
    intro: {
      en: "X uses a wide header image, a square profile image, and multiple post image formats. Center important content so it still works when previews crop differently.",
      es: "X usa un encabezado ancho, una imagen de perfil cuadrada y varios formatos de publicación. Centra el contenido importante para soportar recortes distintos."
    },
    items: [
      {
        id: "profile-photo",
        type: { en: "Profile photo", es: "Foto de perfil" },
        dimensions: "400 x 400 px",
        aspectRatio: "1:1",
        notes: {
          en: "A square upload remains the safest source.",
          es: "Una subida cuadrada sigue siendo la fuente más segura."
        }
      },
      {
        id: "header-image",
        type: { en: "Header image", es: "Encabezado" },
        dimensions: "1500 x 500 px",
        aspectRatio: "3:1",
        notes: {
          en: "Keep key text and logos centered because the sides may crop on smaller displays.",
          es: "Mantén textos y logos centrados porque los lados pueden recortarse en pantallas pequeñas."
        },
        featuredInCheatSheet: true
      },
      {
        id: "post-landscape",
        type: { en: "Single image post landscape", es: "Publicación horizontal" },
        dimensions: "1200 x 675 px",
        aspectRatio: "16:9",
        notes: {
          en: "A useful default for previews and shared editorial images.",
          es: "Buen valor por defecto para vistas previas e imágenes editoriales compartidas."
        },
        featuredInCheatSheet: true
      },
      {
        id: "post-square",
        type: { en: "Single image post square", es: "Publicación cuadrada" },
        dimensions: "1080 x 1080 px",
        aspectRatio: "1:1",
        notes: {
          en: "Good when you want a balanced crop in-feed.",
          es: "Funciona bien cuando quieres un recorte equilibrado en el feed."
        }
      },
      {
        id: "post-portrait",
        type: { en: "Single image post portrait", es: "Publicación vertical" },
        dimensions: "1080 x 1350 px",
        aspectRatio: "4:5",
        notes: {
          en: "Useful for mobile-first creative while staying manageable in feed.",
          es: "Útil para creatividad pensada para móvil sin perder manejabilidad en el feed."
        }
      }
    ]
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    intro: {
      en: "LinkedIn images usually perform better when they feel clean, professional, and readable at a glance. Separate profile assets from company assets and shared posts.",
      es: "Las imágenes de LinkedIn suelen funcionar mejor cuando se ven limpias, profesionales y legibles a primera vista. Separa perfil personal, empresa y publicaciones compartidas."
    },
    items: [
      {
        id: "personal-profile",
        type: { en: "Personal profile photo", es: "Foto de perfil personal" },
        dimensions: "400 x 400 px",
        aspectRatio: "1:1",
        notes: {
          en: "A square portrait keeps professional headshots crisp.",
          es: "Un retrato cuadrado ayuda a mantener nítidas las fotos profesionales."
        }
      },
      {
        id: "personal-background",
        type: { en: "Personal background image", es: "Banner personal" },
        dimensions: "1584 x 396 px",
        aspectRatio: "4:1",
        notes: {
          en: "Use a clean composition and keep important text away from profile overlays.",
          es: "Usa una composición limpia y mantén textos importantes lejos de las superposiciones del perfil."
        }
      },
      {
        id: "company-logo",
        type: { en: "Company logo", es: "Logo de empresa" },
        dimensions: "400 x 400 px",
        aspectRatio: "1:1",
        notes: {
          en: "A square source keeps the logo sharp across placements.",
          es: "Una fuente cuadrada ayuda a mantener el logo nítido en distintas ubicaciones."
        }
      },
      {
        id: "company-cover",
        type: { en: "Company cover image", es: "Banner de empresa" },
        dimensions: "1128 x 191 px",
        aspectRatio: "5.9:1",
        notes: {
          en: "Use a restrained design because LinkedIn crops aggressively across layouts.",
          es: "Usa un diseño sobrio porque LinkedIn recorta de forma agresiva en distintas vistas."
        },
        featuredInCheatSheet: true
      },
      {
        id: "shared-square",
        type: { en: "Shared image square", es: "Publicación cuadrada" },
        dimensions: "1080 x 1080 px",
        aspectRatio: "1:1",
        notes: {
          en: "Useful for concise, mobile-friendly post graphics.",
          es: "Útil para gráficos de publicación concisos y orientados a móvil."
        }
      },
      {
        id: "shared-landscape",
        type: { en: "Shared image landscape", es: "Publicación horizontal" },
        dimensions: "1200 x 627 px",
        aspectRatio: "1.91:1",
        notes: {
          en: "A common safe default for landscape post previews.",
          es: "Valor seguro común para vistas previas horizontales."
        },
        featuredInCheatSheet: true
      },
      {
        id: "shared-portrait",
        type: { en: "Shared image portrait", es: "Publicación vertical" },
        dimensions: "1080 x 1350 px",
        aspectRatio: "4:5",
        notes: {
          en: "Useful when you want more vertical space in-feed.",
          es: "Útil cuando quieres más espacio vertical en el feed."
        }
      }
    ]
  },
  {
    id: "youtube",
    name: "YouTube",
    intro: {
      en: "YouTube is especially sensitive to safe areas and 16:9 presentation. Thumbnails should remain readable at small sizes, while banners need a protected center area for cross-device use.",
      es: "YouTube es especialmente sensible al área segura y a la presentación 16:9. Las miniaturas deben seguir siendo legibles en tamaños pequeños y los banners necesitan un centro protegido."
    },
    items: [
      {
        id: "channel-banner",
        type: { en: "Channel banner", es: "Banner del canal" },
        dimensions: "2560 x 1440 px",
        aspectRatio: "16:9",
        notes: {
          en: "Design around the center because the visible crop changes by device.",
          es: "Diseña alrededor del centro porque el recorte visible cambia según el dispositivo."
        },
        featuredInCheatSheet: true
      },
      {
        id: "banner-safe-area",
        type: { en: "Banner safe area", es: "Área segura del banner" },
        dimensions: "1546 x 423 px",
        aspectRatio: "3.65:1",
        notes: {
          en: "Keep text, logos, and calls to action inside this center-safe zone.",
          es: "Mantén texto, logos y llamadas a la acción dentro de esta zona central segura."
        }
      },
      {
        id: "video-thumbnail",
        type: { en: "Video thumbnail", es: "Miniatura de video" },
        dimensions: "1280 x 720 px",
        aspectRatio: "16:9",
        notes: {
          en: "A standard 16:9 thumbnail size that scales well across YouTube surfaces.",
          es: "Tamaño estándar 16:9 que escala bien en las distintas superficies de YouTube."
        },
        featuredInCheatSheet: true
      },
      {
        id: "profile-picture",
        type: { en: "Profile picture", es: "Foto de perfil" },
        dimensions: "800 x 800 px",
        aspectRatio: "1:1",
        notes: {
          en: "A larger square source preserves sharpness after circular display crops.",
          es: "Una fuente cuadrada mayor ayuda a conservar nitidez tras el recorte circular."
        }
      }
    ]
  },
  {
    id: "tiktok",
    name: "TikTok",
    intro: {
      en: "TikTok is mobile-first and strongly favors 9:16 vertical creative. Keep copy and product details away from interface overlays near the edges.",
      es: "TikTok está pensado para móvil y favorece claramente la creatividad vertical 9:16. Mantén texto y detalles de producto lejos de las superposiciones de interfaz."
    },
    items: [
      {
        id: "profile-photo",
        type: { en: "Profile photo", es: "Foto de perfil" },
        dimensions: "400 x 400 px or larger",
        aspectRatio: "1:1",
        notes: {
          en: "A larger square upload helps preserve quality even if the minimum display is smaller.",
          es: "Una subida cuadrada mayor ayuda a conservar calidad aunque la visualización mínima sea menor."
        }
      },
      {
        id: "vertical-video-cover",
        type: { en: "Vertical video / cover", es: "Video vertical / portada" },
        dimensions: "1080 x 1920 px",
        aspectRatio: "9:16",
        notes: {
          en: "The safest default for TikTok-style vertical video and cover art.",
          es: "Valor seguro principal para video vertical y portadas de estilo TikTok."
        },
        featuredInCheatSheet: true
      },
      {
        id: "feed-image-ad",
        type: { en: "Feed image / ad vertical", es: "Imagen vertical / anuncio" },
        dimensions: "1080 x 1920 px",
        aspectRatio: "9:16",
        notes: {
          en: "Plan around top and bottom overlays when using text.",
          es: "Planifica pensando en superposiciones superiores e inferiores cuando uses texto."
        }
      },
      {
        id: "square-creative",
        type: { en: "Square creative", es: "Creatividad cuadrada" },
        dimensions: "1080 x 1080 px",
        aspectRatio: "1:1",
        notes: {
          en: "Useful for repurposed assets, but vertical remains the main format.",
          es: "Útil para adaptar activos existentes, aunque el formato principal sigue siendo el vertical."
        }
      }
    ]
  },
  {
    id: "pinterest",
    name: "Pinterest",
    intro: {
      en: "Pinterest still works best with vertical imagery. A 2:3 format is a safe default, while very tall pins may be cropped more aggressively in some views.",
      es: "Pinterest sigue funcionando mejor con imágenes verticales. El formato 2:3 es un valor seguro y los pines excesivamente altos pueden recortarse más."
    },
    items: [
      {
        id: "profile-photo",
        type: { en: "Profile photo", es: "Foto de perfil" },
        dimensions: "400 x 400 px",
        aspectRatio: "1:1",
        notes: {
          en: "A square profile image remains the safest source.",
          es: "Una imagen de perfil cuadrada sigue siendo la fuente más segura."
        }
      },
      {
        id: "standard-pin",
        type: { en: "Standard pin", es: "Pin estándar" },
        dimensions: "1000 x 1500 px",
        aspectRatio: "2:3",
        notes: {
          en: "A common vertical format that leaves room for clear imagery and text.",
          es: "Formato vertical común que deja espacio para imágenes y texto claros."
        },
        featuredInCheatSheet: true
      },
      {
        id: "square-pin",
        type: { en: "Square pin", es: "Pin cuadrado" },
        dimensions: "1000 x 1000 px",
        aspectRatio: "1:1",
        notes: {
          en: "Useful when a square crop suits the subject better than a taller frame.",
          es: "Útil cuando un recorte cuadrado se adapta mejor al tema que un marco alto."
        }
      },
      {
        id: "story-idea-pin",
        type: { en: "Story / Idea pin", es: "Historia / Idea Pin" },
        dimensions: "1080 x 1920 px",
        aspectRatio: "9:16",
        notes: {
          en: "Vertical content benefits from clean spacing and easy-to-read text.",
          es: "El contenido vertical se beneficia de espacios limpios y texto fácil de leer."
        }
      },
      {
        id: "board-cover",
        type: { en: "Board cover", es: "Portada de tablero" },
        dimensions: "600 x 600 px",
        aspectRatio: "1:1",
        notes: {
          en: "Use a clean centered crop that still looks clear when reduced.",
          es: "Usa un recorte limpio y centrado que siga viéndose claro al reducirse."
        }
      }
    ]
  }
];

export const UNIVERSAL_SOCIAL_IMAGE_SIZES = [
  {
    id: "square",
    label: { en: "Square", es: "Cuadrado" },
    dimensions: "1080 x 1080 px",
    description: {
      en: "A safe default for many feed posts, profile-adjacent creative, and multi-platform repurposing.",
      es: "Valor seguro para muchas publicaciones de feed y reutilización entre plataformas."
    }
  },
  {
    id: "portrait-feed",
    label: { en: "Portrait feed", es: "Feed vertical" },
    dimensions: "1080 x 1350 px",
    description: {
      en: "A strong mobile-first format that works well for Instagram, LinkedIn, and some X posts.",
      es: "Formato pensado para móvil que funciona bien para Instagram, LinkedIn y algunas publicaciones en X."
    }
  },
  {
    id: "vertical-story",
    label: { en: "Vertical story / reel", es: "Historia / Reel vertical" },
    dimensions: "1080 x 1920 px",
    description: {
      en: "The main vertical format for Stories, Reels, Shorts, and TikTok.",
      es: "Formato vertical principal para historias, reels, Shorts y TikTok."
    }
  },
  {
    id: "landscape",
    label: { en: "Landscape", es: "Horizontal" },
    dimensions: "1200 x 630 px",
    description: {
      en: "A reliable default for Open Graph previews, Facebook links, and many wider editorial cards.",
      es: "Valor fiable para vistas Open Graph, enlaces de Facebook y tarjetas editoriales amplias."
    }
  },
  {
    id: "youtube-thumb",
    label: { en: "YouTube thumbnail", es: "Miniatura de YouTube" },
    dimensions: "1280 x 720 px",
    description: {
      en: "A dedicated 16:9 export that keeps YouTube thumbnails clean and legible.",
      es: "Exportación 16:9 dedicada para mantener limpias y legibles las miniaturas de YouTube."
    }
  }
];

export const SOCIAL_MEDIA_FAQS = [
  {
    question: {
      en: "What is the best image size for social media posts?",
      es: "¿Cuál es el mejor tamaño de imagen para publicaciones en redes sociales?"
    },
    answer: {
      en: "A safe starting point is 1080 x 1080 px for square posts, 1080 x 1350 px for portrait feed posts, and 1080 x 1920 px for stories, reels, shorts, and other vertical formats.",
      es: "Un buen punto de partida es 1080 x 1080 px para publicaciones cuadradas, 1080 x 1350 px para publicaciones verticales y 1080 x 1920 px para historias, reels, shorts y otros formatos verticales."
    }
  },
  {
    question: {
      en: "What are the standard social media image dimensions?",
      es: "¿Cuáles son las dimensiones estándar de imagen para redes sociales?"
    },
    answer: {
      en: "The standard social media image dimensions are 1080 x 1080 px (square), 1080 x 1350 px (portrait), 1080 x 1920 px (stories and reels), 1280 x 720 px (YouTube) and 1200 x 630 px (link previews). These cover most placements across every major platform.",
      es: "Las dimensiones estándar son 1080 x 1080 px (cuadrado), 1080 x 1350 px (vertical), 1080 x 1920 px (historias y reels), 1280 x 720 px (YouTube) y 1200 x 630 px (vistas de enlace). Cubren la mayoría de ubicaciones en las plataformas principales."
    }
  },
  {
    question: {
      en: "What social media banner sizes should I use?",
      es: "¿Qué tamaños de banner para redes sociales debería usar?"
    },
    answer: {
      en: "Common social media banner sizes are: Facebook cover 851 x 315 px, X header 1500 x 500 px, LinkedIn company cover 1128 x 191 px, LinkedIn personal background 1584 x 396 px and YouTube channel art 2560 x 1440 px. Keep logos and text centered to survive responsive cropping.",
      es: "Tamaños comunes de banner: portada de Facebook 851 x 315 px, encabezado de X 1500 x 500 px, portada de empresa en LinkedIn 1128 x 191 px, fondo personal de LinkedIn 1584 x 396 px y arte de canal de YouTube 2560 x 1440 px. Mantén logos y texto centrados para sobrevivir al recorte."
    }
  },
  {
    question: {
      en: "What size should Instagram posts be?",
      es: "¿Qué tamaño deberían tener las publicaciones de Instagram?"
    },
    answer: {
      en: "Instagram feed posts commonly use 1080 x 1080 px for square, 1080 x 1350 px for portrait, and 1080 x 566 px for landscape. Stories and reels commonly use 1080 x 1920 px.",
      es: "Las publicaciones de Instagram suelen usar 1080 x 1080 px en cuadrado, 1080 x 1350 px en vertical y 1080 x 566 px en horizontal. Historias y reels suelen usar 1080 x 1920 px."
    }
  },
  {
    question: {
      en: "What is the best Facebook image size?",
      es: "¿Cuál es el mejor tamaño de imagen para Facebook?"
    },
    answer: {
      en: "For general Facebook feed posts, 1080 x 1080 px or 1200 x 630 px are common safe sizes. Facebook cover images commonly use 851 x 315 px.",
      es: "Para publicaciones generales en Facebook, 1080 x 1080 px o 1200 x 630 px son tamaños seguros comunes. Las portadas suelen usar 851 x 315 px."
    }
  },
  {
    question: {
      en: "What is the best X / Twitter header size?",
      es: "¿Cuál es el mejor tamaño para el encabezado de X / Twitter?"
    },
    answer: {
      en: "The recommended X header image size is 1500 x 500 px. Keep important text and logos centered because cropping can vary by device.",
      es: "El tamaño recomendado para el encabezado de X es 1500 x 500 px. Mantén textos y logos importantes centrados porque el recorte puede variar según el dispositivo."
    }
  },
  {
    question: {
      en: "What is the best LinkedIn post image size?",
      es: "¿Cuál es el mejor tamaño para una imagen de publicación en LinkedIn?"
    },
    answer: {
      en: "For LinkedIn posts, 1200 x 627 px works well for landscape images, while 1080 x 1080 px and 1080 x 1350 px are useful for square and portrait formats.",
      es: "Para publicaciones de LinkedIn, 1200 x 627 px funciona bien en horizontal, mientras 1080 x 1080 px y 1080 x 1350 px son útiles para cuadrado y vertical."
    }
  },
  {
    question: {
      en: "What is the best YouTube thumbnail size?",
      es: "¿Cuál es el mejor tamaño para una miniatura de YouTube?"
    },
    answer: {
      en: "The standard YouTube thumbnail size is 1280 x 720 px with a 16:9 aspect ratio.",
      es: "El tamaño estándar de una miniatura de YouTube es 1280 x 720 px con proporción 16:9."
    }
  },
  {
    question: {
      en: "What is the best Pinterest pin size?",
      es: "¿Cuál es el mejor tamaño para un pin de Pinterest?"
    },
    answer: {
      en: "A common Pinterest standard pin size is 1000 x 1500 px with a 2:3 aspect ratio.",
      es: "Un tamaño común para un pin estándar de Pinterest es 1000 x 1500 px con proporción 2:3."
    }
  },
  {
    question: {
      en: "Should I use JPG, PNG, or WebP for social media?",
      es: "¿Debo usar JPG, PNG o WebP para redes sociales?"
    },
    answer: {
      en: "Use JPG for photos, PNG for graphics with text or transparency, and WebP when the platform supports it. Always check quality after compression.",
      es: "Usa JPG para fotos, PNG para gráficos con texto o transparencia y WebP cuando la plataforma lo soporte. Revisa siempre la calidad después de comprimir."
    }
  }
];

export function getSocialMediaFaqs(language: LanguageCode) {
  return SOCIAL_MEDIA_FAQS.map((item) => ({
    question: item.question[language],
    answer: item.answer[language]
  }));
}

export function getCheatSheetRows() {
  return SOCIAL_MEDIA_IMAGE_SIZES.flatMap((platform) =>
    platform.items
      .filter((item) => item.featuredInCheatSheet)
      .map((item) => ({
        platform: platform.name,
        item
      }))
  );
}
