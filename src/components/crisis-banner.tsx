import { Phone } from "lucide-react";

export function CrisisBanner() {
  return (
    <div className="crisis-banner flex flex-wrap items-start gap-2">
      <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-bordeaux" />
      <p className="text-graphite">
        <strong>Wenn du dich in akuter Gefahr befindest:</strong> Hilfetelefon Gewalt gegen Frauen{" "}
        <a href="tel:0800116016" className="font-bold text-bordeaux underline">
          0800 116 016
        </a>{" "}
        · Telefonseelsorge{" "}
        <a href="tel:08001110111" className="font-bold text-bordeaux underline">
          0800 111 0 111
        </a>{" "}
        (beide kostenlos, 24/7)
      </p>
    </div>
  );
}
