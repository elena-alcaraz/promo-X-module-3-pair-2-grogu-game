

function Mercancias(props) {
  return (
    <>
         <section className="goods-container">
            <div className="goods-item">{props.cookies}</div> 
            
          </section>
          <section className="goods-container">
            <div className="goods-item">{props.eggs}</div>
           
          </section>
          <section className="goods-container">
            <div className="goods-item">{props.frogs}</div>
           
          </section>
    </>  
    )
}

export default Mercancias