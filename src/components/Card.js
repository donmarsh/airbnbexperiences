
import swimming from '../assets/swimming.png'
import star from '../assets/star.svg'
export default function Card(){
    return (
        <div className='activity-card'>
            <img className='activity-image' src={swimming} alt="swimming"></img>
            <div className='activity-details'>
            <img className='star-image' src={star} alt="swimming"></img>

           <span class="activity-rating"> 5.0</span> <span class="activity-location">(6).USA</span><br></br>
            <span class="activity-title">Life lessons with Katie Zaferes</span><br></br>
            <strong>From $136</strong> / person

            </div>
            <div className='activity-status'>SOLD OUT</div>
        </div>
    )
}