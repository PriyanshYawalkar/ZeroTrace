"use client";
export default function SubmitPage() {
    return (
        <div className="h-screen bg-black text-green-400 font-mono p-6 flex flex-col items-center justify-center">
            {<h1 className="text-2xl mb-6 text-red-500 glitch">Submit Your Flag</h1>}
            {
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSc4qbswXn4tRgpms0m3FPc44Xz8BDfqQA5C1fh-zRTn9VTRCg/viewform?embedded=true"
                    width="100%"
                    height="600"
                    className="rounded border border-green-500 w-full max-w-3xl"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            }
            {/*<p className="text-lg mb-4">
                The form is currently disabled. Please check back later.
            </p>*/}
        </div>
    );
}
