import { Mail, ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function Contact() {
  const sendMessageHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="pt-20 space-y-6 mb-8">
      <div className="text-center space-y-4">
        <div className="bg-orange-100 text-orange-400 font-bold inline-block p-2 rounded-full text-sm">
          <span>Say Hello 👋🏼</span>
        </div>

        <h2 className=" text-3xl sm:text-5xl md:text-7xl font-bold">
          Ready to start a{" "}
          <span className="text-orange-400">conversation?</span>
        </h2>

        <p className="leading-tight text-gray-500 text-md sm:text-xl font-semibold">
          Got a machine learning idea, a project worth collaborating on, or a
          concrete question you’re stuck on? Send it over.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left column */}
        <div className="space-y-4">
          <Card className="p-5">
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-amber-50 p-2 text-orange-500">
                <Mail aria-hidden />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Reach out for collaborations or freelance work
                </p>
                <a
                  href="mailto:ukpowehgift@gmail.com"
                  className="font-medium text-orange-400"
                  aria-label="Send email to ukpowehgift@gmail.com"
                >
                  ukpowehgift@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <Card className="p-4 hover:bg-muted transition">
              <div className="flex justify-between items-center">
                <p className="font-medium">GitHub</p>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </Card>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <Card className="p-4 hover:bg-muted transition mt-4">
              <div className="flex justify-between items-center">
                <p className="font-medium">LinkedIn</p>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </Card>
          </a>
        </div>

        {/* Right column */}
        <Card className="p-6">
          <form className="space-y-12" onSubmit={sendMessageHandler}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  type="text"
                  aria-required="true"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="What are you trying to build?"
                rows={5}
                aria-required="true"
              />
            </div>

            <Button
              type="submit"
              className=" w-full rounded-full px-6 py-3 text-base font-semibold bg-orange-500 text-white flex items-center  justify-center gap-2 transition hover:bg-orange-600 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 cursor-pointer"
              aria-label="Send contact message"
            >
              Send message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
