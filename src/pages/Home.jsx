import css from './Home.module.css'
import DocumentTitle from '../components/DocumentTitle/DocumentTitle'
export default function Home() {
    return (
        <>
          <DocumentTitle>Home</DocumentTitle>
            <div className={ css.title}>
            <h1>Вітаємо в додатку 'Книга контактів' 📕</h1>
        </div>   
        </>    
    )
}