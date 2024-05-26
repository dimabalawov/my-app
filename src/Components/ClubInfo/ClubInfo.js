
import './ClubInfoStyle.css'
import ClubImage from './PSG_logo.png';
const info = {
    name:"Пари Сен-Жермен",
    city: "Париж",
    date:1970,
    image:ClubImage


}
export function ClubInfo(){
    return(
        <div className='ClubInfo'>
            <h1>Название клуба: {info.name}</h1>
            <h2>Город: {info.city}</h2>
            <h2>Дата основания: {info.date}</h2>
            <img src = {info.image} alt =""/>
        </div>
    )
}