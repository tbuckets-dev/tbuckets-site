import Link from "next/link";

interface ContactCtaProps {
  heading?: string;
  body?: string;
}

export default function ContactCta({
  heading = "Need someone who has actually carried the pager?",
  body = "Every pipeline I build is shaped by a decade of being the person who answered when production broke. Let’s talk about your infrastructure.",
}: ContactCtaProps) {
  return (
    <section className="border-t border-line px-5 py-20 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-fg sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-muted">{body}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full rounded-lg bg-primary-strong px-6 py-3 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-hover sm:w-auto"
          >
            Start a conversation
          </Link>
          <a
            href="mailto:system@tbuckets.us"
            className="w-full rounded-lg border border-line px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-muted sm:w-auto"
          >
            system@tbuckets.us
          </a>
        </div>
      </div>
    </section>
  );
}
