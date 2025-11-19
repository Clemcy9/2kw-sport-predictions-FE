import PremierLeagueCard from "./Premier-league";


export default function PredictionCard () {

    

    const leagues = [
        "Premier League",
         "Champions League",
         "La Liga League",
         "Serie A League",
         "Spanish League",
    ];

    return(
        <div className="w-full border-none lg:p-4 my-2 flex justify-center items-center flex-col text-white space-y-4 lg:space-y-2">
            {leagues.map((card,index) => (
                <PremierLeagueCard key={index} leagueName={card} />
            ))}
        </div>
    )
}

