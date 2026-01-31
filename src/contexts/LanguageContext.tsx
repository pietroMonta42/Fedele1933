'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'it' | 'en';

interface Translations {
  nav: {
    home: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    tagline: string;
    cta: string;
  };
  excellence: {
    title: string;
    subtitle: string;
    spices: {
      title: string;
      description: string;
    };
    desserts: {
      title: string;
      description: string;
    };
    broth: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    heritage: string;
    story1: string;
    story2: string;
    story3: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
    address: {
      title: string;
      line1: string;
      line2: string;
    };
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

const translations: Record<Language, Translations> = {
  it: {
    nav: {
      home: 'Home',
      about: 'Chi Siamo',
      contact: 'Contatti',
    },
    hero: {
      title: 'Fedele 1933',
      tagline: 'Tradizione in ogni sapore',
      cta: 'Scopri di più',
    },
    excellence: {
      title: 'La Nostra Eccellenza',
      subtitle: 'Dal 1933, produciamo artigianalmente i migliori preparati per la tua cucina',
      spices: {
        title: 'Spezie',
        description: 'Una selezione pregiata di spezie e mix importati da tutto il mondo',
      },
      desserts: {
        title: 'Dolci',
        description: 'Creme istantanee dolci per dessert raffinati e preparazioni veloci',
      },
      broth: {
        title: 'Brodo',
        description: 'Preparati per brodi di altissima qualità, le materie prime fanno la differenza',
      },
    },
    about: {
      title: 'Chi Siamo',
      heritage: 'Dal 1933',
      story1: 'La nostra azienda produce artigianalmente dal 1933 preparati per brodi, insaporitori e minestre oltre a diversi tipi di creme istantanee dolci e salate.',
      story2: 'Da moltissimi anni importiamo spezie e mix di spezie. La conoscenza delle materie prime e dei processi produttivi ci permette di garantire un prodotto di elevatissima qualità.',
      story3: 'I brodi non sono tutti uguali, le materie prime fanno la differenza!',
    },
    contact: {
      title: 'Contatti',
      subtitle: 'Siamo qui per rispondere alle tue domande',
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Messaggio',
        send: 'Invia Messaggio',
      },
      address: {
        title: 'Dove Trovarci',
        line1: 'Via Fegino 10 r',
        line2: '16161 Genova (GE), Italia',
      },
    },
    footer: {
      rights: 'Tutti i diritti riservati',
      tagline: 'Tradizione in ogni sapore dal 1933',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      contact: 'Contact',
    },
    hero: {
      title: 'Fedele 1933',
      tagline: 'Tradition in every flavor',
      cta: 'Discover More',
    },
    excellence: {
      title: 'Our Excellence',
      subtitle: 'Since 1933, we craft the finest preparations for your kitchen',
      spices: {
        title: 'Spices',
        description: 'A premium selection of spices and blends imported from around the world',
      },
      desserts: {
        title: 'Desserts',
        description: 'Instant sweet creams for refined desserts and quick preparations',
      },
      broth: {
        title: 'Broth',
        description: 'The highest quality broth preparations – raw ingredients make the difference',
      },
    },
    about: {
      title: 'About Us',
      heritage: 'Since 1933',
      story1: 'Our company has been artisanally producing broth preparations, seasonings, and soups since 1933, along with various types of instant sweet and savory creams.',
      story2: 'For many years, we have been importing spices and spice blends. Our knowledge of raw materials and production processes allows us to guarantee the highest quality products.',
      story3: 'Not all broths are the same – raw ingredients make the difference!',
    },
    contact: {
      title: 'Contact',
      subtitle: "We're here to answer your questions",
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
      },
      address: {
        title: 'Find Us',
        line1: 'Via Fegino 10 r',
        line2: '16161 Genova (GE), Italy',
      },
    },
    footer: {
      rights: 'All rights reserved',
      tagline: 'Tradition in every flavor since 1933',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
