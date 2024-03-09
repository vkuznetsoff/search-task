import empty from "../../img/empty.gif"

const Empty = () => {
   

   return <div className="empty">
        <h3>Извините, ничего не найдено!</h3>
        <p>Попробуйте другой запрос.</p>
        <img src={empty}/>
        
    </div>
}

export default Empty