'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaFacebookF } from 'react-icons/fa6'
import { Search } from 'lucide-react'
import {
  featuredArticle,
  popularArticles,
  categories,
  mainCategoryLabels,
  recentArticles,
  upcomingHighlights,
} from './articles-data'

const ArticlesSection = () => {
  return (
    <section className="w-full flex justify-center py-16">
      <div className="w-full max-w-5xl space-y-8">
        <header className="space-y-3 text-center md:text-left">
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Dentro do mais recente
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Turismo e notícias da tríplice fronteira
          </h2>
          <p className="max-w-2xl mx-auto md:mx-0 text-muted-foreground text-xs sm:text-sm md:text-base">
            Conteúdos jornalísticos com notícias, bastidores da hotelaria, eventos e informações de
            Foz do Iguaçu e região.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">
          <Link href={featuredArticle.href} className="block h-full">
            <Card className="h-full overflow-hidden p-0 shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md">
              <div className="grid h-full gap-0 md:grid-rows-[auto_minmax(0,1fr)]">
                <div className="relative aspect-16/8 w-full overflow-hidden">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                    sizes="(min-width: 1024px) 720px, 100vw"
                  />
                </div>

                <CardContent className="flex flex-col gap-3 py-5">
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] uppercase tracking-wide">
                      {featuredArticle.category}
                    </span>
                    <span>{featuredArticle.date}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold leading-snug line-clamp-3">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </CardContent>
              </div>
            </Card>
          </Link>

          <div className="space-y-4">
            <div className="space-y-3">
              <div className="relative">
                <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="search" placeholder="Buscar textos..." className="h-9 pl-8 text-sm" />
              </div>

              <div className="flex items-center justify-between gap-4 px-2">
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                    Em destaque
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[11px] font-medium text-muted-foreground rounded-full px-3 py-1 hover:bg-muted"
                >
                  Ver todos
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {popularArticles.map((article) => (
                <Link key={article.title} href={article.href} className="block">
                  <Card className="p-0 shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md">
                    <CardHeader className="flex flex-row items-center gap-3 py-5">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border bg-muted sm:h-20 sm:w-20">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="80px"
                          className="object-cover transition-transform duration-500 ease-out hover:scale-110"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[11px] text-muted-foreground">{article.date}</p>
                        <CardTitle className="text-xs sm:text-sm font-semibold leading-snug line-clamp-3">
                          {article.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.1fr)] items-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold tracking-tight">
                Categorias em foco
              </h3>

              <div className="flex flex-wrap items-center gap-3">
                <div className="w-full max-w-xs sm:w-auto">
                  <Select>
                    <SelectTrigger className="h-8 text-sm">
                      <SelectValue placeholder="Outras categorias" />
                    </SelectTrigger>
                    <SelectContent className="max-h-56 overflow-y-auto">
                      {categories
                        .filter((category) => !mainCategoryLabels.includes(category.label))
                        .map((category) => (
                          <SelectItem key={category.label} value={category.label}>
                            {category.label}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {mainCategoryLabels.map((label) => (
                    <Button
                      key={label}
                      variant="outline"
                      size="sm"
                      className="rounded-full text-xs font-medium"
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm md:text-base font-semibold tracking-tight">Recentes</h3>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {recentArticles.map((article) => (
                  <Link key={article.title} href={article.href} className="block h-full">
                    <Card className="overflow-hidden p-0 flex h-full flex-col shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md">
                      <div className="relative aspect-16/11 w-full overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                          sizes="(min-width: 1024px) 420px, 100vw"
                        />
                      </div>
                      <CardContent className="flex flex-1 flex-col gap-1.5 py-3">
                        <div className="inline-flex items-center gap-2 text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                          <span className="rounded-full bg-muted px-2 py-0.5 text-[10px]">
                            {article.category}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold leading-snug line-clamp-3">
                          {article.title}
                        </h4>
                        <p className="text-[11px] text-muted-foreground">{article.date}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader className="space-y-2">
                <CardTitle className="text-base font-semibold">Mais conteúdos?</CardTitle>
                <CardDescription>
                  Pode me seguir também nas redes sociais ou receber convites para encontros, novos
                  textos e reflexões no seu e-mail.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-muted-foreground">Ou acompanhe pelas redes sociais:</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                      <a href="#" aria-label="Instagram">
                        <FaInstagram className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                      <a href="#" aria-label="LinkedIn">
                        <FaLinkedinIn className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                      <a href="#" aria-label="X (Twitter)">
                        <FaXTwitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
                      <a href="#" aria-label="Facebook">
                        <FaFacebookF className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed bg-muted/40 shadow-sm transition-colors hover:bg-muted/60 hover:shadow-md">
              <CardContent className="py-5 flex flex-col gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                  Eventos & gastronomia
                </p>
                <p className="text-[11px] font-semibold text-muted-foreground">
                  Próximos destaques
                </p>
                <div className="space-y-2 pt-1.5">
                  {upcomingHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center gap-3 rounded-lg border bg-background/90 p-2.5 text-left shadow-sm transition-colors hover:bg-muted/40 hover:shadow-md"
                    >
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border bg-muted sm:h-14 sm:w-14">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="56px"
                          className="object-cover transition-transform duration-500 ease-out hover:scale-110"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                          {item.tag}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold leading-snug line-clamp-3">
                          {item.title}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-muted-foreground">
                          {item.info}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 text-sm font-medium hover:bg-muted"
          >
            Ver mais
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ArticlesSection
