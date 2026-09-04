import {
  Building2,
  CalendarCheck,
  Handshake,
  MessageCircle,
  Route,
  Stethoscope,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { STROKE_WIDTH } from "@/lib/design-system";

type ValueProp = {
  icon: LucideIcon;
  headline: string;
  prop: string;
};

const VALUE_PROPS: ValueProp[] = [
  {
    icon: Handshake,
    headline: "Walk into every sales call knowing your website already did the selling",
    prop: "Conversion is the primary design constraint, not an afterthought. A website that works on day one, not one that needs 6 months of testing to start earning.",
  },
  {
    icon: Building2,
    headline: "Run your business without ever managing a website project again",
    prop: "Build and renovate under one roof. CRO shops can't build. Design shops can't optimize. One vendor. One vision. No handoffs. No \"that's outside our scope.\"",
  },
  {
    icon: Target,
    headline: "Finally work with a team that understands what's at stake in your industry",
    prop: "We work exclusively with high-value service businesses. We already understand your buyer, your sales cycle, and your trust barriers. You don't have to explain your industry.",
  },
  {
    icon: Route,
    headline: "Get one team that owns your entire online presence from find to sign",
    prop: "Full conversion stack: CRO + SEO + Branding + Build in one engagement. Stop juggling four vendors. One team owns the entire equation from \"they find you\" to \"they sign with you.\"",
  },
  {
    icon: MessageCircle,
    headline: "Talk directly to the person building your site. No layers, no delays, no translation",
    prop: "Small agency. The strategist IS the builder. The person who diagnoses your problem is the person who fixes it. No account manager. No junior dev. No telephone game.",
  },
  {
    icon: CalendarCheck,
    headline: "Watch your calendar fill while you're at dinner, on vacation, or asleep",
    prop: "Your website is a revenue engine, not a digital brochure. Stop paying for something that only looks good. Start owning an asset that works while you sleep.",
  },
  {
    icon: Stethoscope,
    headline: "Know exactly what's broken and what it costs to fix before you spend a dollar",
    prop: "We diagnose before we build. We identify exactly where leads leak before touching a pixel. You won't pay for a full redesign when three targeted fixes would solve 80% of the problem — and you'll know exactly why when a rebuild IS needed.",
  },
  {
    icon: TrendingUp,
    headline: "Your website improves every month without you lifting a single finger",
    prop: "An ongoing optimization retainer keeps the site improving after launch. Your website gets better every month while you focus on serving clients.",
  },
];

export default function ValueProps() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {VALUE_PROPS.map(({ icon: Icon, headline, prop }) => (
        <div key={headline} className="rounded-sm border border-foreground/10 bg-surface p-6">
          <div className="inline-flex rounded-sm border border-foreground/10 p-2.5">
            <Icon size={22} strokeWidth={STROKE_WIDTH} className="text-foreground" />
          </div>
          <h3 className="mt-4 text-lg leading-snug">{headline}</h3>
          <p className="mt-2 text-sm text-foreground/70">{prop}</p>
        </div>
      ))}
    </div>
  );
}
