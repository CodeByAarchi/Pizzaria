import React from 'react';

const ServiceBox = ({ icon, caption, subCaption }) => {
    return (
        <div className="service-box">
            <div className="icon1">
                {React.cloneElement(icon, { style: { color: '#ff8243' } })}
            </div>
            <p className="caption">{caption}</p>
            <p className="sub-caption">{subCaption}</p>
        </div>
    );
};


const ServiceInfo = () => {
    return (
        <div className="service-info">
            <ServiceBox
                icon={<i className="fas fa-utensils"></i>}
                caption="Fresh Ingredients"
                subCaption="Indulge in pizzas crafted with only the freshest, finest ingredients, ensuring every bite bursts with flavor and quality."
            />
            <ServiceBox
                icon={<i className="fas fa-clock"></i>}
                caption="Quick Delivery"
                subCaption="Satisfy your cravings in no time with our swift delivery service, bringing piping hot pizzas straight to your doorstep, faster than you can say cheese!"
            />
            <ServiceBox
                icon={<i className="fas fa-utensil-spoon"></i>}
                caption="Variety of Cuisines"
                subCaption="Explore a world of flavors beyond traditional pizza, with a diverse menu featuring tantalizing cuisines from across the globe, perfect for every palate."
            />
            <ServiceBox
                icon={<i className="fas fa-headset"></i>}
                caption="24/7 Support"
                subCaption="Enjoy peace of mind with round-the-clock support, ensuring your pizza experience is always seamless, whether it's dawn or dusk."
            />
            <ServiceBox
                icon={<i className="fas fa-cogs"></i>}
                caption="Customizable Options"
                subCaption="Customize your pizza to perfection, ensuring each bite is uniquely yours. Tailor every topping for a taste that's just right."
            />
            <ServiceBox
                icon={<i className="fas fa-tags"></i>}
                caption="Special Offers and Discounts"
                subCaption="Unlock exclusive deals and discounts, making your pizza experience even more delightful with savings and special treats."
            />
        </div>
    );
};

export default ServiceInfo;
