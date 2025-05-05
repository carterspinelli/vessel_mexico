import { cn } from "../../lib/utils";
import {
  IconBrandHipchat,
  IconCertificate,
  IconHammer,
  IconHeartHandshake,
  IconRecycle,
  IconRulerMeasure,
  IconSettings,
  IconTools,
} from "@tabler/icons-react";

export function FeaturesHoverSection() {
  const features = [
    {
      title: "Precisión japonesa",
      description:
        "Herramientas fabricadas bajo estrictos estándares de calidad para garantizar precisión y durabilidad.",
      icon: <IconRulerMeasure size={24} />,
    },
    {
      title: "Innovación Constante",
      description:
        "Mejoramos continuamente nuestros productos incorporando las últimas tecnologías y materiales.",
      icon: <IconSettings size={24} />,
    },
    {
      title: "Desde 1916",
      description:
        "Más de 100 años de experiencia y tradición en la fabricación de herramientas profesionales.",
      icon: <IconCertificate size={24} />,
    },
    {
      title: "Garantía Superior",
      description: "Respaldamos nuestros productos con garantía y servicio postventa de primer nivel.",
      icon: <IconHeartHandshake size={24} />,
    },
    {
      title: "Diseño Ergonómico",
      description: "Herramientas diseñadas pensando en el profesional, con mangos ergonómicos y materiales que reducen la fatiga.",
      icon: <IconHammer size={24} />,
    },
    {
      title: "Soporte Técnico",
      description:
        "Equipo de expertos disponible para brindar asesoramiento técnico y resolver cualquier consulta.",
      icon: <IconBrandHipchat size={24} />,
    },
    {
      title: "Materiales Sostenibles",
      description:
        "Comprometidos con el medio ambiente, utilizamos materiales y procesos de producción sostenibles.",
      icon: <IconRecycle size={24} />,
    },
    {
      title: "Versatilidad Profesional",
      description: "Soluciones para cada necesidad: desde herramientas manuales hasta sistemas eléctricos especializados.",
      icon: <IconTools size={24} />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-200 dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-vessel-red">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 dark:bg-neutral-700 group-hover/feature:bg-vessel-red transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-vessel-gray dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};