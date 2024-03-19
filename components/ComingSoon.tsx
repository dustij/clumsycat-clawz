/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1rmLr6tnJhJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function ComingSoon() {
  return (
    <section className="mt-[70px] flex h-full w-full items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container grid h-full items-center gap-6 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
              Coming Soon
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              The Next Big Thing
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              We&apos;re working on something awesome.
            </p>
          </div>
          <div className="mx-auto space-y-2">
            <div className="space-2 flex items-center">
              <span className="text-4xl font-semibold" role="days" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
