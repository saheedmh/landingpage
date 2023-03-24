import './style/section2.css';
const Section2 = () => {
    return ( 
<section>
<div className="list-prps">
    <h2><span>list </span>of Properties</h2>
    <button>view all properties</button>
</div>
    <div className="container">
        <div className=" col col-1">
            <img src="./images/house3.svg" alt="" />
            <div className="row-2">
            <h3>2578 Folsom street, san francisco, CA, 94110</h3>
          <small>Private Room</small> 
          <p>$1200/month</p>
          <p className='shape'>
          <span>
            <img src="./images/shape.png" alt="" />
            4
          </span>
          <span>
            <img src="./images/shape1.png" alt="" />
            2
          </span>
          
          <span>
            <img src="./images/shape.png" alt="" />
            2
          </span>
          
          </p>
            </div>
              
            
        </div>
       
        <div className=" cols col-1">
            <img src="./images/house4.svg" alt="" />
            <div className="row-2">
            <h3>2578 Folsom street, san francisco, CA, 94110</h3>
          <small>Private Room</small> 
          <p>$1200/month</p>
          
          <p className='shape'>
          <span>
            <img src="./images/shape.png" alt="" />
            4
          </span>
          <span>
            <img src="./images/shape1.png" alt="" />
            2
          </span>
          
          <span>
            <img src="./images/shape.png" alt="" />
            2
          </span>
          
          </p>
            </div>
              
        </div>
       
        <div className=" cols col-1">
            <img src="./images/house5.png" alt="" />

            <div className="row-2">
            <h3>2578 Folsom street, san francisco, CA, 94110</h3>
          <small>Private Room</small> 
          <p>$1200/month</p>

          <p className='shape'>
          <span>
            <img src="./images/shape.png" alt="" />
            4
          </span>
          <span>
            <img src="./images/shape1.png" alt="" />
            2
          </span>
          
          <span>
            <img src="./images/shape.png" alt="" />
            2
          </span>
          
          </p>
            </div>
              
        </div>
       
       
        
        
    </div>
</section>

     );
}
 
export default Section2;