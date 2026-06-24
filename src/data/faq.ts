export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

export const faqCategories = ['All', 'Technology', 'Process', 'Results', 'Costs', 'Certifications']

export const faqs: FAQItem[] = [
  {
    id: 'faq-001',
    category: 'Technology',
    question: 'How does Biodry technology work?',
    answer: 'Biodry works on the principle of electromagnetic counter-phase interference. Rising damp is caused by disturbing electrical waves in walls and ground that alter capillary action. The Biodry device detects these waves and emits precise counter-waves that neutralise them. Once the disturbance is eliminated, water can no longer rise through the capillaries, and existing moisture drains downward by gravity.',
  },
  {
    id: 'faq-002',
    category: 'Technology',
    question: 'Is Biodry technology safe for people and animals?',
    answer: 'Yes, completely. Biodry is CE and TUV certified, meaning it has been rigorously tested for electromagnetic safety in compliance with European regulations. The signals emitted are extremely low power — far below any thresholds that could affect human, animal, or plant health.',
  },
  {
    id: 'faq-003',
    category: 'Process',
    question: 'How long does it take to see results?',
    answer: 'You can expect to see measurable reduction in moisture levels within 3–6 months. Full drying typically takes 12–24 months, depending on the thickness of the walls, the initial moisture content, and the ambient climate. Our UNI-standard monitoring protocol tracks progress and provides you with certified reports.',
  },
  {
    id: 'faq-004',
    category: 'Process',
    question: 'Does installation require drilling or structural work?',
    answer: 'No. Biodry installation is completely non-invasive. The device is simply placed on the wall (or in some cases, plugged into a power socket nearby) and immediately begins working. No drilling, no demolition, no chemical injection, and no disruption to your daily life.',
  },
  {
    id: 'faq-005',
    category: 'Process',
    question: 'What types of buildings can Biodry treat?',
    answer: 'Biodry works on all types of structures: residential homes, historic buildings, commercial properties, warehouses, churches, hotels, and public buildings. It is effective on all wall materials including stone, brick, concrete, and mixed masonry. It has been successfully applied in buildings ranging from 14th-century medieval castles to modern new-builds.',
  },
  {
    id: 'faq-006',
    category: 'Results',
    question: 'Is the solution permanent?',
    answer: 'Yes. Biodry addresses the root cause of rising damp — the electromagnetic disturbances that drive capillary action. Once neutralised, the drying process occurs naturally and permanently. As long as the device operates (it runs on minimal power, equivalent to a small LED light), the protection is continuous.',
  },
  {
    id: 'faq-007',
    category: 'Results',
    question: 'What happens to the mould and stains on my walls?',
    answer: 'Once moisture is eliminated, mould cannot survive or spread. Existing mould dies and can be cleaned away. Efflorescence (salt stains) will stop appearing. After the walls are fully dry (verified by UNI-standard measurement), they can be replastered and repainted normally — and the results will last.',
  },
  {
    id: 'faq-008',
    category: 'Costs',
    question: 'How much does Biodry cost compared to traditional methods?',
    answer: 'Traditional methods like chemical injection, drainage trenches, or barrier membranes typically cost €5,000–€30,000 and often fail to provide permanent results. Biodry is generally more cost-effective and comes with a performance guarantee. A free inspection and diagnosis is offered to all potential clients, and pricing is provided based on the specific structure.',
  },
  {
    id: 'faq-009',
    category: 'Certifications',
    question: 'What certifications does Biodry hold?',
    answer: 'Biodry holds CE certification (European conformity) and TUV certification (German technical inspection association). Drying progress is measured according to UNI (Italian national standards) protocols. These certifications mean that both the device safety and the measurement methodology meet internationally recognised standards.',
  },
  {
    id: 'faq-010',
    category: 'Process',
    question: 'How is moisture measured and verified?',
    answer: 'Our certified technicians measure wall moisture using calibrated instruments according to UNI standards before, during, and after treatment. You receive written measurement reports at each stage, providing transparent, verifiable proof of progress and final results.',
  },
]
