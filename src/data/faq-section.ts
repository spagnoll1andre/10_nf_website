export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSectionData = {
  label: string;
  headline: string;
  subheadline: string;
  items: FaqItem[];
};

export const faqSection: FaqSectionData = {
  label: "FAQ",
  headline: "Domande frequenti",
  subheadline:
    "Hai domande su come lavoriamo o su cosa possiamo fare per la tua azienda? Ecco le risposte alle domande più comuni. Per tutto il resto, scrivici.",
  items: [
    {
      question: "Che cos'è un ERP e perché la mia azienda ne ha bisogno?",
      answer:
        "Un ERP (Enterprise Resource Planning) è un sistema gestionale integrato che unifica tutti i processi aziendali — contabilità, magazzino, vendite, acquisti, CRM e molto altro — in un'unica piattaforma. Per le PMI italiane significa eliminare la frammentazione tra strumenti diversi, ridurre gli errori manuali e avere una visione completa e in tempo reale dell'intera azienda.",
    },
    {
      question:
        "Quanto tempo richiede l'implementazione di un sistema Odoo personalizzato?",
      answer:
        "I tempi variano in base alla complessità del progetto. Un'implementazione standard richiede generalmente 2–4 mesi, dalla fase di analisi iniziale al go-live. Progetti più articolati, con integrazioni e personalizzazioni avanzate, possono richiedere fino a 6 mesi. Lavoriamo sempre con un piano di progetto dettagliato per rispettare le scadenze concordate.",
    },
    {
      question:
        "Il gestionale si adatta ai miei processi, o devo adattarmi io al software?",
      answer:
        "La nostra filosofia è chiara: non è l'azienda che si adatta al software, ma il software che si modella sull'azienda. Ogni progetto inizia con un'analisi approfondita dei processi reali, e il sistema viene costruito su misura per rispecchiarli fedelmente. Odoo offre una base solida e flessibile che personalizziamo in ogni dettaglio.",
    },
    {
      question: "Offrite assistenza e supporto dopo il go-live?",
      answer:
        "Sì, il supporto post-vendita è uno dei nostri punti di forza. Dopo il rilascio affianchiamo il team nella formazione, gestiamo le correzioni iniziali e rimaniamo disponibili per aggiornamenti, evoluzioni del sistema e nuove funzionalità. Non spariremo dopo la consegna: siamo il tuo partner tecnologico nel tempo.",
    },
    {
      question: "Con quale tipo di aziende lavorate principalmente?",
      answer:
        "Lavoriamo principalmente con PMI italiane in diversi settori: manifatturiero, commercio, e-commerce, servizi professionali ed efficienza energetica. La nostra esperienza spazia dalla gestione contabile e di fabbrica, alla distribuzione multicanale, fino a soluzioni verticali per settori specifici come la finanza agevolata e la certificazione ESG.",
    },
    {
      question: "Qual è la differenza tra NovaFlow e un rivenditore Odoo standard?",
      answer:
        "A differenza di chi si limita a installare Odoo \"as is\", NovaFlow progetta e sviluppa soluzioni ERP completamente personalizzate. Il nostro team multidisciplinare — sviluppatori, analisti e consulenti di processo — collabora per garantire che ogni automazione e ogni flusso siano costruiti sulle esigenze reali del tuo business. Offriamo un unico punto di contatto dedicato per tutta la durata del progetto.",
    },
    {
      question: "Come inizia un progetto con NovaFlow?",
      answer:
        "Il primo passo è sempre un'analisi conoscitiva gratuita: ascoltiamo i tuoi processi, identifichiamo le criticità e definiamo gli obiettivi. Dopodiché elaboriamo una demo su misura e un preventivo trasparente. Solo dopo la tua approvazione prende il via lo sviluppo, con milestone chiare e un piano di progetto condiviso.",
    },
  ],
};
