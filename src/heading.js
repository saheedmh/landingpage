import './style/header.css';
const Header = () => {

    return ( 
        <div className="main">
        <div className="navbar">
        
        <img src="./images/logo1.png" alt="" />
            <ul>
                <li>home</li>
                <li>landlord</li>
                <li>tenart</li>
                <li>contact us</li>
            </ul>
</div>

<div className="nav1">
        <h2>the most affondable place to stay in the sansfranciso bay area</h2>
        <div className="map">
            <img src="./images/rectangle1.png" alt="" />
        </div>
        
</div>
        </div>
     );
}
 
export default Header;