
import './HeaderStyle.css'
import Photo from './Image.jpg';
const info = {
    name:"Балдуин IV Иерусалимский",
    city: "Иерусалим",
    date:1161 ,
    image:Photo


}
export function Header(){
    return(
        <div className='Header'>
            <h1>{info.name}</h1>
            <h2>Город рождения:{info.city}</h2>
            <h2>Год рождения: {info.date}</h2>
            <img src = {info.image} alt =""/>
        </div>
    )
}