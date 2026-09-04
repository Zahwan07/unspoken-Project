import { MessageCircle } from "lucide-react";
import { Reveal, MaskedLines, SectionTag } from "@/components/motion";
import { waLink, MANAGER } from "@/data/site";

export default function Contact() {
  return (
    <div
      className="flex min-h-[100svh] flex-col items-center justify-center px-6 pb-20 pt-24 text-center"
      data-testid="contact-page"
    >
      <Reveal>
        <SectionTag center>Contact</SectionTag>
      </Reveal>

      <h1
        className="mt-8 max-w-4xl font-display text-5xl font-normal leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5vw]"
        data-testid="contact-title"
      >
        <MaskedLines lines={["Ready to tell", "your story?"]} />
      </h1>

      <Reveal delay={0.35}>
        <p className="mt-4 -rotate-1 font-hand text-2xl text-brand md:text-3xl">
          no forms. no waiting rooms. just one message.
        </p>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-smoke md:text-lg">
          Let's talk. One message is all it takes.
        </p>
      </Reveal>

      <Reveal delay={0.5}>
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          data-testid="contact-whatsapp-button"
          className="group mt-12 inline-flex items-center gap-4 bg-brand px-10 py-5 text-sm font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:bg-ink md:px-14 md:py-6"
        >
          <MessageCircle size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-rotate-12" />
          Message Us on WhatsApp
        </a>
      </Reveal>

      <Reveal delay={0.65}>
        <p className="mt-8 text-base text-smoke" data-testid="contact-manager">
          You'll be chatting with{" "}
          <span className="font-medium text-ink">{MANAGER.name}</span>, our{" "}
          {MANAGER.role}.
        </p>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-smoke">
          Replies within a few hours — 09.00–21.00 WIB
        </p>
      </Reveal>

      <Reveal delay={0.8}>
        <span className="mt-16 block h-1.5 w-1.5 rounded-full bg-brand" data-testid="contact-brand-mark" />
      </Reveal>
    </div>
  );
}
