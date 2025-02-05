export default function Feedback(){
    return(
        <div className="feedback_data">
            <section className="feedback_form">
                <h2 className="feedback_heading">Give Feedback</h2>
                <form>
                    <input type="text" placeholder="Full Name" required/>
                    <input type="email" placeholder="Email Address" required/>
                    <input type="text" placeholder="Phone Number"/>
                    <textarea placeholder="Your Feedback" rows={5} required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    )
}