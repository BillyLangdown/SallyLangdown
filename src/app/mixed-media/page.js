import CollectionRoom from '@/components/gallery/CollectionRoom'
import { getByCategory, categories } from '@/data/artworks'

export const metadata = {
  title: 'Mixed Media',
  description: 'Layered, experimental works. Collage, paint, pattern.',
}

export default function MixedMediaPage() {
  const artworks = getByCategory('mixed-media')
  const category = categories.find((c) => c.slug === 'mixed-media')

  return (
    <section className="pt-28 sm:pt-32 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-16 xl:px-20 max-w-[1400px] mx-auto page-enter">
      <CollectionRoom
        artworks={artworks}
        label={category.label}
        description={category.description}
        category="mixed-media"
      />
    </section>
  )
}
