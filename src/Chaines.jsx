import React, { useMemo, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { Globe, Search } from "lucide-react";

/**
 * Liste des chaînes – composant réutilisable
 * Remarque : les données ci-dessous sont un *exemple structuré* inspiré d'une
 * présentation par pays/régions. Adaptez le tableau `catalog` pour refléter
 * votre inventaire réel (pays, compte de chaînes, labels HD/4K, etc.).
 */
const catalog = [
  // Afrique & régions majeures
  { code: "AF",   name: "Afrique",               count: 648,  quality: "HD/4K" },
  { code: "ARAB", name: "Monde arabe",           count: 6230, quality: "HD/4K" },
  { code: "INTL", name: "Mondial / International", count: 34,  quality: "HD/4K" },

  // Europe
  { code: "FR", name: "France",       count: 1534, quality: "4K UHD" },
  { code: "DE", name: "Allemagne",    count: 2181, quality: "4K UHD" },
  { code: "UK", name: "Royaume-Uni",  count: 4606, quality: "HD/4K" },
  { code: "ES", name: "Espagne",      count: 1305, quality: "4K UHD" },
  { code: "IT", name: "Italie",       count: 1467, quality: "4K UHD" },
  { code: "PT", name: "Portugal",     count: 723,  quality: "HD/4K" },
  { code: "TR", name: "Turquie",      count: 525,  quality: "HD/4K" },
  { code: "NL", name: "Pays-Bas",     count: 1398, quality: "4K UHD" },
  { code: "SE", name: "Suède",        count: 1281, quality: "4K UHD" },
  { code: "BE", name: "Belgique",     count: 484,  quality: "HD/4K" },
  { code: "CH", name: "Suisse",       count: 266,  quality: "HD/4K" },

  // Amériques & Asie-Pacifique
  { code: "BR", name: "Brésil",       count: 627,  quality: "HD/4K" },
  { code: "AR", name: "Argentine",    count: 4606, quality: "4K UHD" },
  { code: "AU", name: "Australie",    count: 420,  quality: "HD/4K" },
  { code: "IN", name: "Inde",         count: 514,  quality: "HD/4K" },
  { code: "TH", name: "Thaïlande",    count: 141,  quality: "HD/4K" },
];

export default function Chaines() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return catalog;
    return catalog.filter((c) =>
      [c.name, c.code, c.quality, String(c.count)]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <section id="chaines" className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
            📺 Catalogue de chaînes
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4">
            Chaînes disponibles — en Afrique et dans le monde
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Parcourez un échantillon par pays/régions. Les chiffres sont
            indicatifs et peuvent être adaptés à votre inventaire réel.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            <Search className="w-5 h-5 text-purple-300" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un pays, une région ou une qualité (ex: Afrique, 4K)"
              className="w-full bg-transparent outline-none text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Grille de cartes */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <Card key={item.code} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-lg">{item.name}</CardTitle>
                  <Globe className="w-5 h-5 text-purple-300" />
                </div>
              </CardHeader>
              <CardContent className="text-gray-300">
                <div className="text-3xl font-bold text-white">+{item.count}</div>
                <div className="text-sm opacity-80">Qualité : {item.quality}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
