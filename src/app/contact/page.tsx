import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="py-8">
      <h1 className="text-5xl text-[var(--foreground)] font-semibold mb-8">
        Let&apos;s <span className="text-[var(--accent)]">chat</span>.
      </h1>
      <p className="text-[var(--foreground)]/70">
        I am actively looking for work so let&apos;s have a cup of coffee and
        discuss your work or just drop a text with your contact info and I will
        reach out to you.
      </p>
      <ContactForm />
      <p>
        Or just drop a mail at{" "}
        <a
          href="mailto:animesh99dev@gmail.com"
          className="underline text-[var(--accent)]"
        >
          animesh99dev@gmail.com
        </a>
      </p>
    </div>
  );
}
