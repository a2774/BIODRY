export interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  country: string
  rating: number
  text: string
  building: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't-001',
    name: 'Marco Bianchi',
    role: 'Property Owner',
    location: 'Milan',
    country: 'Italy',
    rating: 5,
    building: 'Historic Townhouse (1890)',
    text: 'After 20 years of fighting rising damp with every traditional method available, Biodry solved our problem permanently. Our walls have been completely dry for 3 years now. The installation was non-invasive and the team was incredibly professional.',
  },
  {
    id: 't-002',
    name: 'Helga Müller',
    role: 'Hotel Director',
    location: 'Munich',
    country: 'Germany',
    rating: 5,
    building: 'Boutique Hotel',
    text: 'The rising damp in our hotel basement was costing us €40,000 per year in remediation. Biodry solved it in 10 months. The ROI has been incredible and our guests now have completely dry, healthy rooms.',
  },
  {
    id: 't-003',
    name: 'Sophie Dubois',
    role: 'Architect',
    location: 'Lyon',
    country: 'France',
    rating: 5,
    building: 'Heritage Restoration Project',
    text: 'As an architect specialising in heritage buildings, I was skeptical but desperate. The science behind Biodry is solid and the results were verified by independent measurement. I now recommend it on every heritage project.',
  },
  {
    id: 't-004',
    name: 'Andrzej Kowalski',
    role: 'Church Restoration Committee',
    location: 'Kraków',
    country: 'Poland',
    rating: 5,
    building: '14th Century Church',
    text: 'Our medieval church was losing its precious frescoes to rising damp. We could not drill or inject chemicals into these historic walls. Biodry was the only solution that respected the structure and it worked beautifully.',
  },
  {
    id: 't-005',
    name: 'Carlos Mendoza',
    role: 'Homeowner',
    location: 'Buenos Aires',
    country: 'Argentina',
    rating: 5,
    building: 'Family Home',
    text: 'My children were suffering from respiratory problems due to mould from our damp walls. Within 8 months of Biodry treatment, the mould was gone and their health improved dramatically. This technology changed our lives.',
  },
  {
    id: 't-006',
    name: 'Patricia van den Berg',
    role: 'Property Manager',
    location: 'Amsterdam',
    country: 'Netherlands',
    rating: 5,
    building: 'Canal House Portfolio',
    text: 'Managing 12 historic canal houses, rising damp was my biggest operational challenge. After installing Biodry across the portfolio, we have seen a 94% reduction in moisture-related maintenance calls. Extraordinary results.',
  },
]
