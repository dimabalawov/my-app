
import './ClubAchievStyle.css'
const achiev = {
    medals:"Чемпионат Франции (Ligue 1),Трофей лиги (Trophée des Champions,Кубок Франции (Coupe de France",
    goals: "903",
    tournaments:"Лига чемпионов УЕФА,Кубок обладателей кубков УЕФА,Суперкубок УЕФА",


}
export function ClubAchiev(){
    return(
        <div className='ClubAchiev'>
            <h2>Медали: {achiev.medals}</h2>
            <h2>Кол-во голов за 10 сезонов: {achiev.goals}</h2>
            <h2>Международные турниры: {achiev.tournaments}</h2>
        </div>
    )
}