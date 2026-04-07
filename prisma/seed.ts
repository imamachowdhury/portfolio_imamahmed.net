import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Seed blogs
  await prisma.blogPost.createMany({
    data: [
      {
        title: "Lighting the Shadows: A Cinematic Guide",
        slug: "lighting-the-shadows",
        excerpt: "How to use negative fill and practical lighting to create deep, moody atmospheres in your narrative short films.",
        content: "Draft content...",
        category: "Cinematography",
        date: "April 2, 2026",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop&q=60",
        status: "Published",
      },
      {
        title: "The Ultimate Guide to Sony FX3 Workflows",
        slug: "sony-fx3-workflows",
        excerpt: "Maximizing dynamic range, using S-Cinetone vs S-Log3, and grading techniques for the FX3 in DaVinci Resolve.",
        content: "Draft content...",
        category: "Gear",
        date: "March 28, 2026",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60",
        status: "Published",
      },
      {
        title: "Pacing and Rhythm in Editing",
        slug: "pacing-rhythm-editing",
        excerpt: "Why the spaces between words matter more than the lines themselves. An analysis of edit pacing.",
        content: "Draft content...",
        category: "Storytelling",
        date: "March 15, 2026",
        readTime: "4 min",
        image: "https://placehold.co/800x450/18181b/3b82f6?text=Editing",
        status: "Published",
      }
    ],
  })

  // Seed POV Reviews
  await prisma.povReview.createMany({
    data: [
      {
        title: "Dune: Part Two",
        slug: "dune-part-two",
        creator: "Directed by Denis Villeneuve, 2024",
        rating: 9.5,
        excerpt: "A monumental achievement in sci-fi cinema. The stark desert landscapes and brutalist Harkonnen architecture redefine modern visual storytelling.",
        content: "Draft content...",
        category: "Movie & Series",
        color: "amber",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60",
        status: "Published",
      },
      {
        title: "The Politics of Storytelling",
        slug: "politics-storytelling",
        creator: "Written by Imam Ahmed",
        rating: 8.0,
        excerpt: "Why narratives matter in public discourse. A look at how structural storytelling shapes modern political campaigns.",
        content: "Draft content...",
        category: "Perspective",
        color: "blue",
        image: "https://placehold.co/800x1200/18181b/3b82f6?text=Perspective",
        status: "Published",
      },
      {
        title: "Sapiens: A Brief History of Humankind",
        slug: "sapiens",
        creator: "Written by Yuval Noah Harari, 2011",
        rating: 9.0,
        excerpt: "A sweeping look at how homo sapiens conquered the globe. The exploration of shared fictions (money, religion, corporations) is profoundly shifting.",
        content: "Draft content...",
        category: "Books",
        color: "purple",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=60",
        status: "Published",
      }
    ]
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
