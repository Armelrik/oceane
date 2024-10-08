import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

  return (
  <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">Bienvenue sur la plateforme Oceane</h1>
            <p className="p-regular-20 md:p-regular-24">Vous pouvez acheter vos billets pour le concert de 
              Fally Ipupa à Paris et bien d'autres</p>
              <Button size="lg" asChild className="button w-full sm:w-fit" >
                <Link href="#events" >
                  Voir les dates
                </Link>
              </Button>
        </div>
        <div className="rounded-lg bg-black">
          <Image src='/assets/images/fally.jpg' alt="Hero" width={1000} height={1000}
        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]" />
        </div>
        
      </div>
    </section>

    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">Vous donner le <br /> meilleur des événement en vue</h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        <Search />
        <CategoryFilter />
      </div>

      <Collection
        data={events?.data}
        emptyTitle="Aucun événement en vue"
        emptyStateSubtext="Revenez plus tard"
        collectionType="All_Events"
        limit={6}
        page={page}
        totalPages={events?.totalPages}
      />
    </section>
  </>
  );
}
//http://localhost:3000/
//Mongo user pass: jk8ui9kUJYRYStJp