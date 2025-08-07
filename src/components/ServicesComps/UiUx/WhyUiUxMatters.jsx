import Container from "../../Container"; // adjust the path if needed

const DesignBenefits = () => {
  return (
    <div className="mt-20">
      <Container>
        <div className="w-full flex flex-wrap justify-center gap-4">
          {/* Row 1: Image | Text | Image | Text */}
          <div className="w-[300px] h-[300px]">
            <img
              className="w-full h-full rounded-3xl border-2 border-stone-500 object-cover"
              src="https://plus.unsplash.com/premium_photo-1661762710287-27923a334564?w=600&auto=format&fit=crop&q=60"
              alt="First Impression"
            />
          </div>

          <div className="w-[300px] h-[300px] px-6 py-6 bg-zinc-800 rounded-3xl outline outline-2 outline-offset-[-2px] outline-stone-500 flex flex-col justify-center items-start">
            <h3 className="text-neutral-50 text-xl font-bold mb-2">
              First Impression Counts
            </h3>
            <p className="text-neutral-50 text-sm">
              94% of first impressions are design-related.
            </p>
          </div>

          <div className="w-[300px] h-[300px]">
            <img
              className="w-full h-full rounded-3xl border-2 border-stone-500 object-cover"
              src="https://plus.unsplash.com/premium_photo-1661632329237-c3181a43fe88?w=600&auto=format&fit=crop&q=60"
              alt="Better Conversion"
            />
          </div>

          <div className="w-[300px] h-[300px] px-6 py-6 bg-zinc-800 rounded-3xl outline outline-2 outline-offset-[-2px] outline-stone-500 flex flex-col justify-center items-start">
            <h3 className="text-neutral-50 text-xl font-bold mb-2">
              Better Conversion
            </h3>
            <p className="text-neutral-50 text-sm">
              Great design improves user trust and boosts conversion rates.
            </p>
          </div>

          {/* Row 2: Text | Image | Text | Image */}
          <div className="w-[300px] h-[300px] px-6 py-6 bg-zinc-800 rounded-3xl outline outline-2 outline-offset-[-2px] outline-stone-500 flex flex-col justify-center items-start">
            <h3 className="text-neutral-50 text-xl font-bold mb-2">
              Lower Bounce Rates
            </h3>
            <p className="text-neutral-50 text-sm">
              Intuitive interfaces keep users engaged longer.
            </p>
          </div>

          <div className="w-[300px] h-[300px]">
            <img
              className="w-full h-full rounded-3xl border-2 border-stone-500 object-cover"
              src="https://plus.unsplash.com/premium_photo-1661611565504-61ae8325d069?w=600&auto=format&fit=crop&q=60"
              alt="Lower Bounce Rates"
            />
          </div>

          <div className="w-[300px] h-[300px] px-6 py-6 bg-zinc-800 rounded-3xl outline outline-2 outline-offset-[-2px] outline-stone-500 flex flex-col justify-center items-start">
            <h3 className="text-neutral-50 text-xl font-bold mb-2">
              Fewer Support Queries
            </h3>
            <p className="text-neutral-50 text-sm">
              Simple flows mean less confusion and more satisfaction.
            </p>
          </div>

          <div className="w-[300px] h-[300px]">
            <img
              className="w-full h-full rounded-3xl border-2 border-stone-500 object-cover"
              src="https://plus.unsplash.com/premium_photo-1664297560573-b31a89601583?w=600&auto=format&fit=crop&q=60"
              alt="Fewer Support Queries"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DesignBenefits;
