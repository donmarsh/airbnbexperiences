import banner from '../assets/groupbanner.png'

export default function Heading(){
    return (
        <div className='heading-banner-div'>
            <img className="banner" src={banner} alt="banner"></img>
            <div>
                <p className="heading">Online Experiences</p>
                <p className="subheading">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
            
        </div>
    )
}