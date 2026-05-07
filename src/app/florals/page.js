import CollectionRoom from '@/components/gallery/CollectionRoom'
import { getByCategory, categories } from '@/data/artworks'

export const metadata = {
  title: 'Florals',
  description: 'Bold, expressive paintings — colour and energy at full volume.',
}

export default function FloralsPage() {
  const artworks = getByCategory('florals')
  const category = categories.find((c) => c.slug === 'florals')

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
