import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Premium Android Course',
    description: 'Comprehensive course covering Kotlin, Jetpack Compose, and advanced Android development.',
    price: '$49.99',
    image: '/products/android-course.png',
  },
  {
    id: 2,
    name: 'UI Kit for Android',
    description: 'A collection of beautiful, reusable UI components for Jetpack Compose.',
    price: '$29.99',
    image: '/products/ui-kit.png',
  },
  {
    id: 3,
    name: 'Android Project Templates',
    description: 'Ready-to-use project templates for MVVM, Clean Architecture, and more.',
    price: '$39.99',
    image: '/products/templates.png',
  },
];

export default function Shop() {
  return (
    <section id="shop" className="py-12 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold text-center">Shop</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="rounded-lg border border-border/50 bg-muted/50 p-6 hover:bg-muted/100 transition-colors">
              <div className="aspect-w-4 aspect-h-3 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                  placeholder="blur"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{product.name}</h3>
              <p className="mb-4 text-muted-foreground line-clamp-3">{product.description}</p>
              <div className="mt-4 flex items-baseline space-x-3">
                <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
                <a href="#" className="ml-auto rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors">
                  Buy Now
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}