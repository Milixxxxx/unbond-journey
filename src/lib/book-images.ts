/**
 * Zentrales Bild-Registry für alle Buchbilder/Infografiken.
 * Quelle: ebook_assets/* (siehe UNBOND_Core_BonusUnlock.html für Originalkontext).
 * Alle Bilder liegen im Lovable-CDN.
 */
import heroTraumabonding from "@/assets/book/hero-traumabonding.jpg.asset.json";
import heroNarzissmus from "@/assets/book/hero-narzissmus.png.asset.json";
import heroLoveaddict from "@/assets/book/hero-loveaddict.png.asset.json";
import heroRosabrille from "@/assets/book/hero-rosabrille.png.asset.json";
import heroUrlaub from "@/assets/book/hero-urlaub.png.asset.json";
import heroRadicalMary from "@/assets/book/hero-radical-mary.png.asset.json";
import heroNoContact from "@/assets/book/hero-no-contact.png.asset.json";
import heroTrigger from "@/assets/book/hero-trigger.png.asset.json";
import heroPolyvagal from "@/assets/book/hero-polyvagal.png.asset.json";
import heroSucht from "@/assets/book/hero-sucht.png.asset.json";
import heroWlw from "@/assets/book/hero-wlw.jpg.asset.json";
import heroIntHomophobie from "@/assets/book/hero-int-homophobie.png.asset.json";
import heroBindung from "@/assets/book/hero-bindung.png.asset.json";
import heroWeaponized from "@/assets/book/hero-weaponized.png.asset.json";
import heroSchema from "@/assets/book/hero-schema.png.asset.json";
import heroPartsWork from "@/assets/book/hero-parts-work.png.asset.json";
import heroIdentitaet from "@/assets/book/hero-identitaet.jpg.asset.json";
import heroBonusE from "@/assets/book/hero-bonus-e.png.asset.json";
import heroBonusF from "@/assets/book/hero-bonus-f.png.asset.json";
import heroDoppelmoral from "@/assets/book/hero-doppelmoral.png.asset.json";

import infoGaslighting from "@/assets/book/info-gaslighting.png.asset.json";
import infoGaslightingNotbremse from "@/assets/book/info-gaslighting-notbremse.png.asset.json";
import infoKptbs from "@/assets/book/info-kptbs.png.asset.json";
import infoKptbs2 from "@/assets/book/info-kptbs2.png.asset.json";
import infoBancroft from "@/assets/book/info-bancroft.png.asset.json";
import infoToxliebe from "@/assets/book/info-toxliebe.png.asset.json";
import infoZyklusTox from "@/assets/book/info-zyklus-tox.png.asset.json";
import infoRadicalAcceptance from "@/assets/book/info-radical-acceptance.png.asset.json";
import infoReactiveAbuse from "@/assets/book/info-reactive-abuse.png.asset.json";
import infoRueckfallAmpel from "@/assets/book/info-rueckfall-ampel.png.asset.json";
import infoTriangulation from "@/assets/book/info-triangulation.png.asset.json";
import infoIntHomophobie from "@/assets/book/info-int-homophobie.png.asset.json";
import infoBindungstheorie from "@/assets/book/info-bindungstheorie.png.asset.json";
import infoWeaponized from "@/assets/book/info-weaponized.png.asset.json";
import infoIfs from "@/assets/book/info-ifs.png.asset.json";
import infoCft from "@/assets/book/info-cft.png.asset.json";
import infoPtg from "@/assets/book/info-ptg.png.asset.json";
import infoWertekompass from "@/assets/book/info-wertekompass.jpg.asset.json";
import infoKintsugi from "@/assets/book/info-kintsugi.png.asset.json";

export const bookImages = {
  // Hero / Kapitel-Header
  heroTraumabonding: heroTraumabonding.url,
  heroNarzissmus: heroNarzissmus.url,
  heroLoveaddict: heroLoveaddict.url,
  heroRosabrille: heroRosabrille.url,
  heroUrlaub: heroUrlaub.url,
  heroRadicalMary: heroRadicalMary.url,
  heroNoContact: heroNoContact.url,
  heroTrigger: heroTrigger.url,
  heroPolyvagal: heroPolyvagal.url,
  heroSucht: heroSucht.url,
  heroWlw: heroWlw.url,
  heroIntHomophobie: heroIntHomophobie.url,
  heroBindung: heroBindung.url,
  heroWeaponized: heroWeaponized.url,
  heroSchema: heroSchema.url,
  heroPartsWork: heroPartsWork.url,
  heroIdentitaet: heroIdentitaet.url,
  heroBonusE: heroBonusE.url,
  heroBonusF: heroBonusF.url,
  heroDoppelmoral: heroDoppelmoral.url,

  // Infografiken (zoombar)
  infoGaslighting: infoGaslighting.url,
  infoGaslightingNotbremse: infoGaslightingNotbremse.url,
  infoKptbs: infoKptbs.url,
  infoKptbs2: infoKptbs2.url,
  infoBancroft: infoBancroft.url,
  infoToxliebe: infoToxliebe.url,
  infoZyklusTox: infoZyklusTox.url,
  infoRadicalAcceptance: infoRadicalAcceptance.url,
  infoReactiveAbuse: infoReactiveAbuse.url,
  infoRueckfallAmpel: infoRueckfallAmpel.url,
  infoTriangulation: infoTriangulation.url,
  infoIntHomophobie: infoIntHomophobie.url,
  infoBindungstheorie: infoBindungstheorie.url,
  infoWeaponized: infoWeaponized.url,
  infoIfs: infoIfs.url,
  infoCft: infoCft.url,
  infoPtg: infoPtg.url,
  infoWertekompass: infoWertekompass.url,
  infoKintsugi: infoKintsugi.url,
} as const;

export type BookImageKey = keyof typeof bookImages;
