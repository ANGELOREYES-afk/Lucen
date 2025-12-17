export default function Companies(){
    return(

    <section className="max-w-5xl mx-auto px-4 py-15 space-y-8 flex flex-col justify-center items-center">
        <p className="text-sm text-gray-300 mb-8">
          Over 500+ companies
        </p>

        <div className="mx-auto flex flex-wrap items-center justify-center gap-8 rounded-2xl bg-white/5 px-8 py-8 border border-white/10">
          <div className="h-16 w-32 flex items-center justify-center bg-white text-black text-lg font-semibold rounded">
            <img src="/BurnsMcDonnell.png"></img>
          </div>
          <div className="h-16 w-32 flex items-center justify-center text-black text-lg font-semibold rounded">
            <img src="/ABB_log.png" className="transform scale-75"></img>
          </div>
          <div className="h-16 w-32 flex items-center justify-center text-black text-lg font-semibold rounded">
            <img src="/shell_log.png"></img>
          </div>
          <div className="h-16 w-32 flex items-center justify-center text-black text-lg font-semibold rounded">
            <img src="/texas_logo.png"></img>
          </div>
          <div className="h-16 w-40 flex items-center justify-center text-black text-sm font-semibold rounded">
            <img src="/google.svg" className="transform scale-75"></img>
          </div>
        </div>
    </section>
    );
}