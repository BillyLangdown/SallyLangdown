import CollectionRoom from '@/components/gallery/CollectionRoom'
import { getByCategory, categories } from '@/data/artworks'

export const metadata = {
  title: 'Portraits',
  description: 'Oil paintings and charcoal studies.',
}

export default function PortraitsPage() {
  const artworks = getByCategory('portraits')
  const category = categories.find((c) => c.slug === 'portraits')

  return (
    <section className="pt-28 sm:pt-32 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1400px] mx-auto page-enter">
      <CollectionRoom
        artworks={artworks}
        label={category.label}
        description={category.description}
        category="portraits"
      />
    </section>
  )
}
