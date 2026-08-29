import { ProjectList } from '@/components/project-list'

export const metadata = {
  title: 'Impact & Case Studies | Colin Batchelor Consulting',
  description: 'Reference projects and impact case studies of Colin Batchelor.',
}

export default function ImpactPage() {
  return (
    <main className="impact-page bg-white pb-24">
      <section className="about-intro">
        <div className="about-kicker">IMPACT & CASE STUDIES</div>
        <h1>Reference projects and delivery leadership.</h1>
        <p className="about-lede">A track record of managing complex infrastructure programmes across international markets.</p>
      </section>

      <section className="px-[5.3vw] pt-20">
        <ProjectList />
      </section>
    </main>
  )
}
