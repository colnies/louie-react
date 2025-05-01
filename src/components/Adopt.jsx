import React, { useEffect, useState } from 'react';
import '../css/styles.css';
import AdoptForm from './AdoptForm';
import axios from 'axios';

function Adopt() {
    const [responses, setResponses] = useState(0);

    useEffect(()=>{
        axios.get('http://localhost:3001/adopt')
        .then(res => setResponses(res.data))
        .catch(err => console.error(err));
    },[]);

  return (
    <>
        <section className="adopt-section">
        <div className="adopt-resources">
            <h1 className="adopt-heading">Adoption Resources</h1>
            <p>
            Adopting a pet can mean a big life change for even the most experienced pet owner.
            Fortunately there are many free resources available online to help with quick questions and to get you on your way.
            </p>
            <div className="adopt-content">
            <h2 className="adopt-heading">For Potential Adopters</h2>
            <ul>
                <li>
                <a href="https://www.petfinder.com/dogs-and-puppies/adoption/finding-a-dog/dog-adoption-checklist/" target="_blank" rel="noopener noreferrer">
                    Adoption Checklist
                </a>
                </li>
                <li>
                <a href="https://www.americanhumane.org/public-education/are-you-ready-to-own-a-pet/" target="_blank" rel="noopener noreferrer">
                    Am I Ready to Adopt?
                </a>
                </li>
                <li>
                    <a href="https://www.aspca.org/pet-care/general-pet-care/cutting-pet-care-costs" target="_blank" rel="noopener noreferrer">
                    What are the costs of caring for a pet?
                </a>
                </li>
                <li>
                <a href="https://www.americanhumane.org/public-education/is-a-dog-right-for-you/" target="_blank" rel="noopener noreferrer">
                    Is a Dog Right for Me?
                </a>
                </li>
                <li>
                <a href="https://www.rent.com/near-me/pet-friendly-apartments" target="_blank" rel="noopener noreferrer">
                    Pet-Friendly Apartment Finder
                </a>
                </li>
                <li>
                <a href="https://www.consumeraffairs.com/pets/pet-food/" target="_blank" rel="noopener noreferrer">
                    Dog Food Reviews
                </a>
                </li>
                <li>
                <a href="https://www.caring.com/resources/benefits-of-seniors-owning-pets/" target="_blank" rel="noopener noreferrer">
                    Assisted Living for Seniors with Pets
                </a>
                </li>
            </ul>
            <h2 className="adopt-heading">Adoption Documents for Adult Dogs</h2>
            <ul>
                <li>
                <a href="https://ophrescue.org/docs/Adult-Adoption-Packet.pdf" target="_blank" rel="noopener noreferrer">
                    Adult Adoption Packet
                </a>
                </li>
                <li>
                <a href="https://ophrescue.org/docs/Adult-dog-rescue-letter.pdf" target="_blank" rel="noopener noreferrer">
                    Adult Dog Shutdown / Decompression
                </a>
                </li>
                <li>
                <a href="https://ophrescue.org/training-partners" target="_blank" rel="noopener noreferrer">
                    OPH Training Partners
                </a>
                </li>
                <li>
                <a href="https://ophrescue.org/insurance" target="_blank" rel="noopener noreferrer">
                    Pet Insurance
                </a>
                </li>
                <li>
                <a href="https://ophrescue.org/microchip-registration" target="_blank" rel="noopener noreferrer">
                    Microchip Registration
                </a>
                </li>
            </ul>
            <h2 className="adopt-heading">Adoption Documents for Puppies</h2>
            <ul>
                <li>
                <a href="https://ophrescue.org/docs/Puppy-Adoption-Packet.pdf" target="_blank" rel="noopener noreferrer">
                    Puppy Adoption Packet
                </a>
                </li>
                <li>
                <a href="https://ophrescue.org/docs/Puppy-rescue-letter.pdf" target="_blank" rel="noopener noreferrer">
                    Puppy Shutdown / Decompression
                </a>
                </li>
                <li>
                <a href="https://ophrescue.org/docs/new-puppy-info.pdf" target="_blank" rel="noopener noreferrer">
                    New Puppy Information
                </a>
                </li>
                <li>
                <a href="https://ophrescue.org/docs/Low-Cost-Spay-Neuter-Clinics.pdf" target="_blank" rel="noopener noreferrer">
                    Low Cost Spay Neuter Clinics
                </a>
                </li>
            </ul>
            <h2 className="adopt-heading">Dog Training & Behavior Books</h2>
            <ul>
                <li>
                I'll Be Home Soon: How to Prevent and Treat Separation Anxiety - Patricia McConnell
                </li>
                <li>
                Way to Go! How to Housetrain a Dog of Any Age - Patricia McConnell
                </li>
                <li>
                The Cautious Canine - How to Help Dogs Conquer Their Fears - Patricia McConnell
                </li>
            </ul>
            </div>
        </div>
        <img src="/aspca-3-3-3-adjustment-guide.avif" alt="Adopt Don't Shop" className="adopt-img" width="500" height="auto" />
        </section>

        <AdoptForm />
   
        <div className="response">
            <h3>
                We've had {responses} people looking to get involved!
            </h3>
        </div>
    </>
  );
}

export default Adopt;