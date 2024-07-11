import React from "react";
import HeroSection from "../../components/HeroSection/Hero";
import TeamSection from "../../components/TeamSection/Team";
import FeaturedProducts from "../../components/FeaturedProducts/Featured";
import LatestNews from "../../components/LatestsNews/LastestNews";
import SocialMedia from "../../components/SocialMedia";
import ContactForm from "../../components/GetInTouch/ContactForm";
import LocationSection from "../../components/Location/Location";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="home">
            <Helmet>
                <title>Gentle Tech et Compagnie: Site officiel - Page d'acceuil</title>
            </Helmet>
            <HeroSection />
            <TeamSection />
            <FeaturedProducts />
            <LatestNews />
            <CarouselComponent joinedId="#our_projects"/>
            <SocialMedia />
            <ContactForm />
            <LocationSection />
        </div>
    );
};

export default Home;