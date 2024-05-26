import './ClubMembersStyle.css'
const members = {
   goalkeeper:"Gianluigi Donnarumma",
   defenders:"Achraf Hakimi (Right Back), Marquinhos (Center Back), Milan Škriniar (Center Back), Nuno Mendes (Left Back)",
   midfielders:"Marco Verratti (Central Midfielder), Vitinha (Central Midfielder), Manuel Ugarte (Central Midfielder)",
   forwards:"Kylian Mbappe (Left Winger),Gonçalo Ramos (Center Forward), Ousmane Dembélé (Right Winger)"
}
export function ClubMembers(){
    return(
        <div className='ClubMembers'>
            <h2>Вратарь: {members.goalkeeper}</h2>
            <h2>Защитники: {members.defenders}</h2>
            <h2>Полузащитники: {members.midfielders}</h2>
            <h2>Нападающие: {members.forwards}</h2>
        </div>
    )
}