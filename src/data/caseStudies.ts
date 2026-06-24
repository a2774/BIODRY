export interface CaseStudy {
  id: string
  title: string
  location: string
  country: string
  type: 'residential' | 'commercial' | 'historic' | 'industrial'
  year: number
  description: string
  result: string
  moistureReduction: number
  timeToComplete: string
  tags: string[]
  image?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-001',
    title: 'Historic Villa Restoration in Tuscany',
    location: 'Florence, Tuscany',
    country: 'Italy',
    type: 'historic',
    year: 2024,
    description: 'A 19th-century villa suffering from severe rising damp affecting all ground-floor walls up to 1.8m height. Traditional remedies had been attempted twice without lasting success.',
    result: 'Complete moisture elimination within 18 months. Walls restored and plaster reapplied without recurrence.',
    moistureReduction: 97,
    timeToComplete: '18 months',
    tags: ['Historic', 'Residential', 'Stone Walls', 'Italy'],
    image: '/src/assets/image/Foto-1-scaled.jpg',
  },
  {
    id: 'cs-002',
    title: 'Provincial Palace of Guipuzcoa',
    location: 'San Sebastián',
    country: 'Spain',
    type: 'historic',
    year: 2024,
    description: 'The iconic Provincial Palace suffering from deep capillary rising damp affecting the historic stone foundations and internal masonry walls.',
    result: 'Problem resolved in 14 months. All walls certified moisture-free with verified UNI measurements.',
    moistureReduction: 99,
    timeToComplete: '14 months',
    tags: ['Historic', 'Government', 'Spain', 'Stone Masonry'],
    image: '/src/assets/image/Provincial-Palace-of-Guipuzcoa.png',
  },
  {
    id: 'cs-003',
    title: 'Monastery of Santa María La Real',
    location: 'Nájera, La Rioja',
    country: 'Spain',
    type: 'historic',
    year: 2023,
    description: 'A UNESCO heritage monastery with rising damp threatening irreplaceable medieval frescoes, stone masonry and historic wooden structures.',
    result: 'Frescoes protected. Moisture reduced from 24% to below 2% within 20 months.',
    moistureReduction: 92,
    timeToComplete: '20 months',
    tags: ['UNESCO', 'Historic', 'Religious', 'Spain'],
    image: '/src/assets/image/Monastery-of-Santa-Maria-La-Real.png',
  },
  {
    id: 'cs-004',
    title: 'Church of the Assumption of Our Lady – Toledo',
    location: 'Toledo',
    country: 'Spain',
    type: 'historic',
    year: 2023,
    description: 'Historic church with severe damp issues causing deterioration of frescoes, stone walls and historic artworks dating back centuries.',
    result: 'Full structural drying achieved. No further deterioration after 18 months post-treatment.',
    moistureReduction: 96,
    timeToComplete: '18 months',
    tags: ['Religious', 'Historic', 'Spain', 'Stone'],
    image: '/src/assets/image/Church-of-the-Assumption-of-Our-Lady-toledo.png',
  },
  {
    id: 'cs-005',
    title: 'Archaeological Museum Restoration',
    location: 'Spain',
    country: 'Spain',
    type: 'historic',
    year: 2024,
    description: 'Major archaeological museum with rising damp affecting display areas, storage vaults and irreplaceable artefacts housed in the building.',
    result: 'All galleries fully dry and reopened. Museum artifacts safeguarded permanently.',
    moistureReduction: 98,
    timeToComplete: '12 months',
    tags: ['Museum', 'Historic', 'Spain', 'Cultural Heritage'],
    image: '/src/assets/image/Archaeological-Museum-1.png',
  },
  {
    id: 'cs-006',
    title: 'Pimentel Palace – Historic Restoration',
    location: 'Valladolid',
    country: 'Spain',
    type: 'historic',
    year: 2023,
    description: 'The renowned Pimentel Palace, birthplace of Philip II, suffering from persistent rising damp compromising the historic stone and plasterwork.',
    result: 'Moisture eliminated. Palace fully restored and certified dry within 16 months.',
    moistureReduction: 95,
    timeToComplete: '16 months',
    tags: ['Palace', 'Heritage', 'Spain', 'Historic'],
    image: '/src/assets/image/Pimentel-Palace.png',
  },
]
