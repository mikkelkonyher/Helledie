import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

// Supported languages: 'da' (Danish), 'en' (English)
const LanguageContext = createContext({
  lang: 'da',
  setLang: () => {},
  t: (key) => key,
});

const STORAGE_KEY = 'app_lang';

const translations = {
  da: {
    // Navigation
    'nav.home': 'Forside',
    'nav.ole': 'Ole Helledie',
    'nav.lene': 'Lene Helledie',
    'nav.djJunior': 'DJ Junior',
    'nav.toggleLabel': 'Skift sprog',

    // Generic
    'generic.backToTable': 'Tilbage til DJ-bordet',

    // Landing Page
    'landing.title': 'HELLEDIE',
    'landing.subtitle': 'DJ • Kunst • Events',
    'landing.ole.role': 'DJ',
    'landing.djJunior.name': 'DJ Junior',
    'landing.djJunior.tagline': 'Young gun Helledie',
    'landing.lene.role': 'Kunst',

    // Footer
    'footer.title': 'DJ Ole Helledie',
    'footer.tagline': 'Forbinder generationer',
    'footer.email.note': 'Til booking og henvendelser',

    // About Page
    'about.back': 'Tilbage til DJ-bordet',
    'about.hero.title': 'DJ OLE HELLEDIE',
    'about.hero.subtitle': 'Forbinder generationer gennem musik og kunst',
    'about.story.title': 'Historien bag musikken',
    'about.booking.title': 'Book DJ Ole Helledie til dit næste event',
    'about.booking.text': 'Fra intime gallerier til store festivaler – få den unikke lyd, der forbinder generationer, med til din næste fest.',
    'about.booking.btn': 'Besøg bookingsiden',
    'about.quote': '"Hvis du spørger mig, hvem der holder festen kørende… så er svaret Mercantec-eleverne."',

    // Mother Art Page
    'mother.back': 'Tilbage til DJ-bordet',
    'mother.header.title': 'Lene Helledie Kunst',
    'mother.header.subtitle': 'At tage kampen op med den skønhed og kraft naturen har, er en vovet affære, men det er umuligt at lade være.',
    'mother.cta.visit': 'Lene Helledie Kunstside',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.ole': 'Ole Helledie',
    'nav.lene': 'Lene Helledie',
    'nav.djJunior': 'DJ Junior',
    'nav.toggleLabel': 'Toggle language',

    // Generic
    'generic.backToTable': 'Back to DJ Table',

    // Landing Page
    'landing.title': 'HELLEDIE',
    'landing.subtitle': 'DJ • Art • Events',
    'landing.ole.role': 'DJ',
    'landing.djJunior.name': 'DJ Junior',
    'landing.djJunior.tagline': 'Young gun Helledie',
    'landing.lene.role': 'Art',

    // Footer
    'footer.title': 'DJ Ole Helledie',
    'footer.tagline': 'Connecting generations',
    'footer.email.note': 'For booking and inquiries',

    // About Page
    'about.back': 'Back to DJ Table',
    'about.hero.title': 'DJ OLE HELLEDIE',
    'about.hero.subtitle': 'Connecting generations through music and art',
    'about.story.title': 'The story behind the music',
    'about.booking.title': 'Book DJ Ole Helledie for your next event',
    'about.booking.text': 'From intimate galleries to big festivals — bring the unique sound that connects generations to your next party.',
    'about.booking.btn': 'Visit booking page',
    'about.quote': '"If you ask me who keeps the party going… the answer is the Mercantec students."',

    // Mother Art Page
    'mother.back': 'Back to DJ Table',
    'mother.header.title': 'Lene Helledie Art',
    'mother.header.subtitle': 'Taking on the beauty and power of nature is a daring affair — but it is impossible not to.',
    'mother.cta.visit': 'Lene Helledie Art Site',
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('da');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === 'da' || saved === 'en') {
      setLangState(saved);
    } else {
      // Try browser preference
      const pref = typeof navigator !== 'undefined' ? navigator.language || navigator.userLanguage : 'da';
      const initial = pref && pref.toLowerCase().startsWith('da') ? 'da' : 'en';
      setLangState(initial);
      try {
        window.localStorage.setItem(STORAGE_KEY, initial);
      } catch {}
    }
  }, []);

  const setLang = (value) => {
    setLangState(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {}
  };

  const t = useMemo(() => {
    return (key) => {
      const dict = translations[lang] || translations.da;
      return (dict && dict[key]) || key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  return useContext(LanguageContext);
}
