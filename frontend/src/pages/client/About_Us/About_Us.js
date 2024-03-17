import React from 'react';
import './About_Us.css';
import Layout from '../../../components/client/Layout';
import video1 from '../../../assets/about_us (3).mp4'
import video2 from '../../../assets/about_us (4).mp4'
import video3 from '../../../assets/about_us (2).mp4'
import video4 from '../../../assets/about_us (1).mp4'

class AboutUs extends React.Component {
    componentDidMount() {
        // Logic to animate the numbers
        let valueDisplays = document.querySelectorAll(".num");
        let interval = 4000;
        let delay = 2000; // 3-second delay after reaching the endValue

        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);
            let counter; // variable to hold the setInterval reference

            // Function to update the counter value
            function updateCounter() {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue === endValue) {
                    clearInterval(counter); // Clear the current counter
                    setTimeout(() => {
                        startValue = 0; // Reset startValue to 0 after 3 seconds
                        valueDisplay.textContent = startValue;
                        counter = setInterval(updateCounter, duration); // Start the counter again
                    }, delay);
                }
            }

            // Start the counter initially
            counter = setInterval(updateCounter, duration);
        });
    }



    render() {
        return (
            <Layout>
                <div className="header-container">
                    <h1 className="heading-text">About Us</h1>
                    <p className="sub-text">Weaving Stories, Building Communities.!</p>
                </div>
                <body>
                    <div className="about-us-container">
                        <h1>🍕Welcome to Pizzaria🍕</h1>
                        <div className="video-container">
                            <video className="rounded-video" autoPlay muted loop>
                                <source src={video1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="text-container">
                            <h3>🔶Crafting Culinary Artistry: "Our Fresh Vegetable Preparation Process.🔪✨"</h3>
                            <br></br>
                            <p>
                                🥦🍅 At Pizzaria, we believe in using only the freshest ingredients for our pizzas.
                                That's why we take extra care in preparing our vegetables.
                                Watch as our skilled chefs slice and dice a colorful array of peppers, tomatoes, mushrooms, and more,
                                ensuring that each bite of your pizza is bursting with flavor and freshness.
                            </p>
                            <br></br>
                            <p>
                                🥦🍅 Join us at Pizzaria and taste the difference that fresh ingredients and expert craftsmanship can make.
                                Whether you're a veggie lover or a meat enthusiast, we have a pizza that's sure to satisfy your cravings.
                            </p>
                        </div>
                    </div>
                    <div className="about-us-container-2">
                        <div className="text-container-2">
                            <h3>🔶Unlocking the Art of Pizza Mastery: "From Doughy Beginnings to Mouthwatering Creations✨"</h3>
                            <br></br>
                            <p>
                                🧀🍅 After the vegetables are freshly cut, our chefs skillfully assemble each pizza with a blend of premium ingredients.
                                From rich tomato sauce to creamy mozzarella cheese, every element is carefully layered to create a harmonious flavor profile.
                            </p>
                            <br />
                            <p>
                                🍃🌿 Our commitment to quality shines through in every pizza we make.
                                Each pizza is then placed in our traditional stone ovens, where it is baked to perfection, ensuring a crispy crust and gooey cheese in every bite.
                            </p>

                        </div>
                        <div className="video-container-2">
                            <video className="rounded-video" autoPlay muted loop>
                                <source src={video2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </div>
                    <div className="about-us-container">
                        <div className="video-container">
                            <video className="rounded-video" autoPlay muted loop>
                                <source src={video3} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="text-container">
                            <h3>🔶From Grill to Plate: "Our Step-by-Step Guide to Burger Brilliance.🍔🔥👨‍🍳"</h3>
                            <br />
                            <p>
                                🥬🍔 At Pizzaria, we're committed to crafting not only delicious pizzas but also mouthwatering burgers.
                                Each burger is meticulously prepared using the finest ingredients, ensuring a burst of flavor with every bite.
                            </p>
                            <br />
                            <p>
                                🧀🍅 Watch as our skilled chefs assemble each burger, layering it with crisp lettuce, ripe tomatoes, and melted cheese,
                                creating a symphony of taste and texture that delights the senses.
                            </p>
                            <br />

                        </div>
                    </div>
                    <div className="about-us-container-2">
                        <div className="text-container-2">
                            <h3>🔶Crispy, Crunchy, and Oh-So-Delicious: "Our Expert Tips for French Fry Success.🍟"</h3>
                            <br></br>
                            <p>
                                🥔🍟 At Pizzaria, we pride ourselves on creating not only delectable pizzas but also irresistible French fries.
                                Our fries are made from hand-selected potatoes, sliced to perfection, and fried to a golden crispiness.
                            </p>
                            <br />
                            <p>
                                🧂🍟 Watch as our skilled chefs expertly season each batch of fries, adding just the right amount of salt and seasoning
                                to enhance their flavor without overpowering their natural taste.
                            </p>
                            <br />
                            <p>
                                🍃 Join us at Pizzaria and experience the joy of indulging in crispy, flavorful French fries.
                            </p>
                        </div>
                        <div className="video-container-4">
                            <video className="rounded-video" autoPlay muted loop>
                                <source src={video4} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </div>
                    <div class="wrapper">
                        <div class="about-container">
                            <div className='emoji'><i class="fas fa-utensils"></i></div>
                            <span class="num" data-val="400">000</span>
                            <span class="text">Meals Delivered</span>
                        </div>
                        <div class="about-container">
                            <div className='emoji'><i class="fas fa-smile-beam"></i></div>
                            <span class="num" data-val="440">000</span>
                            <span class="text">Happy Customers</span>
                        </div>
                        <div class="about-container">
                            <div className='emoji'><i class="fas fa-list"></i></div>
                            <span class="num" data-val="425">000</span>
                            <span class="text">Menu Items</span>
                        </div>
                        <div class="about-container">
                            <div className='emoji'> <i class="fas fa-star"></i></div>
                            <span class="num" data-val="410">000</span>
                            <span class="text">Five Stars</span>
                        </div>
                    </div>
                </body>
            </Layout>
        );
    }
}

export default AboutUs;
