import CollectionRoom from '@/components/gallery/CollectionRoom'
import { getByCategory, categories } from '@/data/artworks'

export const metadata = {
  title: 'Portraits',
  description: 'Oil paintings and charcoal studies — the human presence, quietly observed.',
}

export default function PortraitsPage() {
  const artworks = getByCategory('portraits')
  const category = categories.find((c) => c.slug === 'portraits')

  return (
    <section className="pt-28 sm:pt-32 pb-20 sm:pb-28 px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto page-enter">
      <CollectionRoom
        artworks={artworks}
        label={category.label}
        description={category.description}
      />
    </section>
  )
}
