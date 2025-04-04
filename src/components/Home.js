import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home({ setmovePages }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container-fluid p-0">
            {/* Top Navigation */}
            <header className="text-center bg-primary text-white py-4">
                <div className="container">
                    <h1>Welcome to PsyGauge</h1>
                    <p className="lead">PsyGauge is a gamified psychometric assessment tool designed to revolutionize candidate evaluation through interactive and insightful gameplay.</p>
                    <p>Assess critical skills like multitasking, problem-solving, reaction time, and strategic planning through nine targeted games.</p>
                </div>
            </header>

            {/* Games Section */}
            <section className="container my-4">
                <h2 className="text-center mb-4">Explore Our Games</h2>
                <div className="row g-3">
                    {[
                        { img: "/trackp.jpg", title: "Multitasking Challenge", desc: "Test your ability to manage multiple tasks effectively." },
                        { img: "/missingp.jpg", title: "Problem Solver", desc: "Sharpen your analytical and problem-solving skills." },
                        { img: "/clickp.jpg", title: "Reaction Timer", desc: "Gauge your speed and accuracy under pressure." },
                        { img: "/starp.jpg", title: "Recall Power", desc: "Plan ahead and execute strategies efficiently." },
                        { img: "/starp.jpg", title: "Decision Maker", desc: "Improve your decision-making skills in real time." }
                    ].map((game, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="card shadow-sm border-0">
                                <img src={game.img} alt={game.title} className="card-img-top img-fluid" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{game.title}</h5>
                                    <p className="card-text">{game.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Get Started Button */}
            <div className="text-center my-4">
                <button
                    onClick={() => setmovePages(1)}
                    className="btn btn-lg btn-success px-5 py-2"
                >
                    Get Started
                </button>
            </div>

            {/* FAQ Section */}
            <section className="container my-5">
                <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                    {["What is PsyGauge?", "How does it work?", "Who can use PsyGauge?"].map((question, index) => (
                        <div key={index} className="accordion-item">
                            <h2 className="accordion-header">
                                <button 
                                    className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`} 
                                    type="button" 
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {question}
                                </button>
                            </h2>
                            <div className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}>
                                <div className="accordion-body">
                                    {index === 0 && "PsyGauge is an interactive platform using games to assess key psychometric attributes, helping employers match candidates to job roles."}
                                    {index === 1 && "Each game is designed to measure specific cognitive and decision-making skills. By analyzing gameplay data, PsyGauge provides insights into your abilities."}
                                    {index === 2 && "It’s ideal for employers in recruitment, candidates seeking self-assessment, and anyone looking to gain insights into their cognitive strengths."}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Bar with Social Links */}
            <footer className="bg-dark text-white text-center py-3">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} PsyGauge. All rights reserved.</p>
                    <div>
                        <a href="https://twitter.com/yourprofile" className="text-white mx-2" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://linkedin.com/in/yourprofile" className="text-white mx-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
