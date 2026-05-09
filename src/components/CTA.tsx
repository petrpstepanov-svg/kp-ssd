import { ctaDetails } from "@/data/cta"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#1a0a00] bg-[linear-gradient(to_right,#2a1a0f_1px,transparent_1px),linear-gradient(to_bottom,#2a1a0f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#3d1f00,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{ctaDetails.heading}</h2>

                        <p className="mx-auto max-w-xl md:px-5">{ctaDetails.subheading}</p>

                        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                            <a
                                href="tel:+79080555555"
                                className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-primary text-white font-semibold text-lg shadow-lg shadow-orange-500/25 transition-all duration-300 hover:bg-primary-accent hover:-translate-y-0.5"
                            >
                                📞 Позвонить
                            </a>
                            <a
                                href="#pricing"
                                className="inline-flex items-center gap-2 rounded-full px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold text-lg transition-all duration-300 hover:bg-orange-500/10"
                            >
                                💰 Смотреть цены
                            </a>
                        </div>

                        <p className="mt-6 text-sm text-orange-200/70">
                            +7 (908) 055-55-55 · г. Челябинск, пр. Ленина, 27, стр. 4
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
