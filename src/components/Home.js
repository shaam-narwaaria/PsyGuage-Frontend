import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Home.css";

function Home({ setmovePages }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container-fluid p-0">
            {/* Hero Section */}
            <header className="home-hero text-white d-flex align-items-center py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-8">
                            <h1 className="fw-bold display-4 text-start">
                                Welcome to <span className="text-gradient">PsyGauge</span>
                            </h1>
                            <p className="lead text-start">
                                Revolutionizing candidate assessment through <span className="fw-bold">interactive psychometric games.</span>
                                Test skills like <span className="text-highlight">multitasking</span>, <span className="text-highlight">problem-solving</span>, and <span className="text-highlight">reaction time</span>.
                            </p>
                            <ul className="list-unstyled fw-bold text-start">
                                <li>✅ Scientifically designed tests</li>
                                <li>✅ Instant performance insights</li>
                                <li>✅ Trusted by professionals & recruiters</li>
                            </ul>
                        </div>
                    </div>

                    {/* Centered Button */}
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-lg btn-light shadow-lg fw-bold px-5" onClick={() => setmovePages(1)}>
                            Start Your Journey 🚀
                        </button>
                    </div>

                    <p className="mt-3 small text-start">No registration required. Try it now!</p>
                </div>
            </header>



            {/* Why Choose PsyGauge? */}
            <section className="container-fluid py-5" style={{ backgroundColor: "#fdba74" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2 className="fw-bold mb-4 text-dark text-md-start text-center">Why Choose PsyGauge?</h2>
                            <p className="text-dark mb-5 text-md-start text-center">
                                We offer <span className="fw-bold text-primary">science-backed cognitive assessments</span> that are interactive, insightful, and fun!
                                Whether you're an individual looking to enhance your mental agility or a company seeking top talent—PsyGauge is your <span className="fw-bold">ultimate assessment tool</span>.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {[
                            { icon: "📊", title: "AI-Powered Analytics", desc: "Track your performance with real-time insights and smart reports.", bgColor: "#D6E6F2" },
                            { icon: "🎮", title: "Engaging & Fun", desc: "Ditch boring tests—assess skills through interactive games.", bgColor: "#D4EDDA" },
                            { icon: "🧠", title: "Scientifically Backed", desc: "Developed with cognitive psychologists to ensure accuracy.", bgColor: "#E3D7FF" },
                            { icon: "🏆", title: "Sharpen Decision-Making", desc: "Train your brain to think faster & make better choices.", bgColor: "#FFE5B4" },
                            { icon: "💼", title: "For Job Seekers & Employers", desc: "Companies use PsyGauge to evaluate candidates beyond resumes.", bgColor: "#F0F0F0" },
                            { icon: "📈", title: "Track & Compare Progress", desc: "Monitor your improvement and compare with industry benchmarks.", bgColor: "#FFDDDF" },
                        ].map((feature, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                <div className="feature-card shadow-lg p-4 rounded-3 position-relative text-md-start text-center"
                                    style={{ backgroundColor: feature.bgColor }}>
                                    <div className="feature-icon display-4 mb-3 text-primary">{feature.icon}</div>
                                    <h5 className="fw-bold text-dark">{feature.title}</h5>
                                    <p className="text-muted">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* How It Works */}
            {/* <section className="container-fluid py-5" style={{ backgroundColor: "#818cf8" }}>
                <div className="container">
                    <h2 className="text-start fw-bold mb-3 text-dark">How PsyGauge Works</h2>
                    <p className="text-start text-muted mb-4">
                        A step-by-step journey to mastering your cognitive skills.
                    </p>

                    <div className="row g-4">
                        {[
                            { step: "1", title: "Play Engaging Games", desc: "Challenge yourself with fun, scientifically designed psychometric games.", icon: "🎯" },
                            { step: "2", title: "Analyze Performance", desc: "AI-driven analytics help you understand your strengths and areas of growth.", icon: "📈" },
                            { step: "3", title: "Enhance Your Skills", desc: "Use personalized insights to boost memory, reaction time, and focus.", icon: "🏆" },
                            { step: "4", title: "Track Your Growth", desc: "Monitor your cognitive progress over time with real-time performance tracking.", icon: "📅" },
                            { step: "5", title: "Compete & Share", desc: "Compare scores with friends and professionals to stay motivated.", icon: "🤝" },
                        ].map((item, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                <div className="shadow-lg p-4 rounded-4 bg-white text-start position-relative">
                                    <div className="d-flex align-items-center mb-3">
                                        <span className="display-6 me-3">{item.icon}</span>
                                        <h5 className="fw-bold mb-0">{item.title}</h5>
                                    </div>
                                    <p className="text-muted">{item.desc}</p>
                                    <div className="progress mt-3" style={{ height: "5px" }}>
                                        <div className="progress-bar bg-primary" style={{ width: `${(index + 1) * 20}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            

            {/* How It Works */}
<section className="container-fluid py-5" style={{ backgroundColor: "#818cf8" }}>
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-8">
                <h2 className="fw-bold mb-4 text-dark text-md-start text-center">How PsyGauge Works</h2>
                <p className="text-dark mb-5 text-md-start text-center">
                    A step-by-step journey to mastering your cognitive skills.
                </p>
            </div>
        </div>

        <div className="row g-4">
            {[
                { icon: "🎯", title: "Play Engaging Games", desc: "Challenge yourself with fun, scientifically designed psychometric games.", bgColor: "#D6E6F2" },
                { icon: "📈", title: "Analyze Performance", desc: "AI-driven analytics help you understand your strengths and areas of growth.", bgColor: "#D4EDDA" },
                { icon: "🏆", title: "Enhance Your Skills", desc: "Use personalized insights to boost memory, reaction time, and focus.", bgColor: "#E3D7FF" },
                { icon: "📅", title: "Track Your Growth", desc: "Monitor your cognitive progress over time with real-time performance tracking.", bgColor: "#FFE5B4" },
                { icon: "🤝", title: "Compete & Share", desc: "Compare scores with friends and professionals to stay motivated.", bgColor: "#FFDDDF" },
            ].map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                    <div className="feature-card shadow-lg p-4 rounded-3 position-relative text-md-start text-center"
                        style={{ backgroundColor: item.bgColor }}>
                        <div className="feature-icon display-4 mb-3 text-primary">{item.icon}</div>
                        <h5 className="fw-bold text-dark">{item.title}</h5>
                        <p className="text-muted">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>




            {/* Games Section with Hover Effects */}
            <section className="container my-5">
                <h2 className="text-center text-primary fw-bold">Explore Our Games</h2>
                <div className="row g-4">
                    {[
                        { img: "/trackp.jpg", title: "Multitasking Challenge", desc: "Manage multiple tasks effectively." },
                        { img: "/missingp.jpg", title: "Problem Solver", desc: "Sharpen your analytical skills." },
                        { img: "/clickp.jpg", title: "Reaction Timer", desc: "Test your speed & accuracy." },
                        { img: "/starp.jpg", title: "Recall Power", desc: "Enhance memory recall skills." },
                        { img: "/starp.jpg", title: "Decision Maker", desc: "Improve real-time decision-making." }
                    ].map((game, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="card home-game-card border-0 shadow-lg position-relative">
                                <img src={game.img} alt={game.title} className="card-img-top rounded-top" />
                                <div className="card-body text-center game-card-overlay">
                                    <h5 className="card-title fw-bold">{game.title}</h5>
                                    <p className="card-text text-muted">{game.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials with Avatars */}
            <section className="container my-5">
                <h2 className="text-center text-primary fw-bold">What Our Users Say</h2>
                <div className="row text-center g-4">
                    {[
                        { img: "/user1.jpg", name: "Sarah L.", feedback: "PsyGauge improved my problem-solving skills!" },
                        { img: "/user2.jpg", name: "James K.", feedback: "Amazing experience! The games are engaging and insightful." },
                        { img: "/user3.jpg", name: "Emily R.", feedback: "Highly recommend for cognitive development!" }
                    ].map((review, index) => (
                        <div key={index} className="col-12 col-md-4">
                            <div className="testimonial-card shadow-lg p-4">
                                <img src={review.img} alt={review.name} className="rounded-circle mb-3" width="80" />
                                <p className="text-muted">"{review.feedback}"</p>
                                <h6 className="fw-bold">{review.name}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="container my-5 text-center">
                <h2 className="fw-bold text-primary">Stay Updated 📩</h2>
                <p className="text-muted">Subscribe to our newsletter for the latest insights and game updates.</p>
                <form className="d-flex justify-content-center">
                    <input type="email" className="form-control w-50" placeholder="Enter your email" />
                    <button type="submit" className="btn btn-primary ms-2">Subscribe</button>
                </form>
            </section>

            {/* Footer */}
            <footer className="home-footer text-white text-center py-4">
                <div className="container">
                    <p className="mb-3">&copy; {new Date().getFullYear()} PsyGauge. All rights reserved.</p>
                    <div>
                        <a href="#" className="text-white mx-2">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-white mx-2">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="#" className="text-white mx-2">
                            <FaEnvelope size={20} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
