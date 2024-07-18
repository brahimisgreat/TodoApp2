import './Header.css';
import  butt from '../../assets/icon-moon.svg'
import todo from '../../assets/todo.svg'

export const Header = () => {
  return (
    <div className='header'>
        <img  src={todo}/> 
        <img  src={butt}/> 
    </div>
  )
}
