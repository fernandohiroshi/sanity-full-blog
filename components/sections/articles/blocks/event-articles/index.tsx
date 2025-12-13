import Image from 'next/image'
import Link from 'next/link'

import type { ArticleCard } from '@/types/types'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export type EventArticlesListProps = {
  articles: ArticleCard[]
}

export const EventArticlesList = ({ articles }: EventArticlesListProps) => (
  <div className="space-y-2 pt-1.5">
    {articles.map((article) => (
      <Link key={article.title} href={article.href} className="block">
        <Card className="p-0 shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md">
          <CardHeader className="flex flex-row items-center gap-3 py-3.5 px-2">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md border bg-muted sm:h-24 sm:w-36">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="112px"
                className="object-cover transition-transform duration-500 ease-out hover:scale-110"
              />
            </div>
            <div className="space-y-0.5">
              <CardTitle className="text-sm font-medium leading-snug line-clamp-4">
                {article.title}
              </CardTitle>
            </div>
          </CardHeader>
        </Card>
      </Link>
    ))}
  </div>
)
