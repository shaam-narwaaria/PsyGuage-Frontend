import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Home.css";

function Home({ setmovePages }) {
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        // <div className="container-fluid p-0">
        <div className="container-fluid p-0" style={{ paddingTop: "65px", paddingBottom: "75px" }}>

            {/* Hero Section */}
            <header
                className="text-dark d-flex align-items-center py-5"
                style={{
                    backgroundColor: "#ffffff",
                    minHeight: "60vh",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Content */}
                        <div className="col-12 col-md-7">
                            <h1 className="fw-bold display-6 text-start">
                                Welcome to <span className="text-primary">PsyGauge</span>
                            </h1>

                            <p className="lead text-start text-secondary text-dark fw-semibold">
                                Revolutionizing candidate assessment through{" "}
                                <span className="fw-bold text-dark">interactive psychometric games.</span> Test skills like{" "}
                                <span className="text-primary">multitasking</span>,{" "}
                                <span className="text-primary">problem-solving</span>, and{" "}
                                <span className="text-primary">reaction time</span>.
                            </p>

                            {/* Bullet Points with Blue Tick Icons */}
                            <ul className="list-unstyled fw-semibold text-start text-dark">
                                <li>
                                    <i className="bi bi-check-circle-fill text-success fs-5 me-2"></i> Scientifically designed tests
                                </li>
                                <li>
                                    <i className="bi bi-check-circle-fill text-success fs-5 me-2"></i> Instant performance insights
                                </li>
                                <li>
                                    <i className="bi bi-check-circle-fill text-success fs-5 me-2"></i> Trusted by professionals & recruiters
                                </li>
                            </ul>

                            {/* Centered Button */}
                            <div className="d-flex justify-content-center mt-4">
                                <button
                                    className="btn btn-lg fw-bold px-5 py-3 shadow-lg"
                                    style={{
                                        background: "linear-gradient(135deg, #ff8c00, #ff2e63)",
                                        color: "white",
                                        border: "none",
                                    }}
                                    onClick={() => navigate("/games")}
                                >
                                    Start Your Journey 🚀
                                </button>
                            </div>

                            {/* <p className="mt-3 small text-center text-muted">
                                No registration required. Try it now!
                            </p> */}
                        </div>

                        {/* Right-Side Image (Hidden on Mobile) */}
                        <div className="col-12 col-md-5 d-none d-md-flex justify-content-md-end">
                            <img
                                src="/symbol.png"
                                alt="Hero Section"
                                className="img-fluid rounded-3 shadow-lg"
                                style={{ maxWidth: "85%", height: "auto" }}
                            />
                        </div>
                    </div>
                </div>
            </header>



            {/* Why Choose PsyGauge? */}
            <section className="container-fluid py-5" style={{ backgroundColor: "#fdba74", borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem", marginTop: "-20px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="fw-bold mb-4 text-dark text-start">Why Choose PsyGauge?</h2>
                            <p className="text-dark mb-5 text-start">
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
                                <div className="feature-card shadow-lg p-4 rounded-3 position-relative text-start"
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
            <section className="container-fluid py-5" style={{ backgroundColor: "#B3EBF2", borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem", marginTop: "-20px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="fw-bold mb-4 text-dark text-start">How PsyGauge Works</h2>
                            <p className="text-dark mb-5 text-start">
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
                                <div className="feature-card shadow-lg p-4 rounded-3 position-relative text-start"
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


            {/* Explore Games Section */}
            <section className="container-fluid py-5" style={{ backgroundColor: "#C8A2C8", borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem", marginTop: "-20px" }}>

                <div className="container">
                    <h2 className="text-start text-dark fw-bold mb-4">Explore Our Games</h2>
                    <div className="row g-4">
                        {[
                            { img: "images/multitasking.jpg", title: "Multitasking Challenge", desc: "Test your ability to handle multiple tasks efficiently." },
                            { img: "images/problemsolver.jpg", title: "Problem Solver", desc: "Sharpen your logical thinking and problem-solving skills." },
                            { img: "images/reactiontime.jpg", title: "Reaction Timer", desc: "Measure your speed and accuracy in real-time." },
                            { img: "images/recallpower.jpg", title: "Recall Power", desc: "Boost your memory recall and cognitive function." },
                            { img: "images/decisionmaking.jpg", title: "Decision Maker", desc: "Enhance your decision-making under pressure." }
                        ].map((game, index) => (
                            <div key={index} className="col-12 col-sm-6 col-lg-4">
                                <div className="card border-0 shadow-lg rounded-4 overflow-hidden"
                                    style={{ background: "#ffffff", transition: "transform 0.3s ease-in-out" }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                                >
                                    {/* Image Wrapper */}
                                    {/* <div className="position-relative" style={{ height: "180px", overflow: "hidden", borderRadius: "10px" }}>
                                        <img src={game.img} alt={game.title}
                                            className="w-100 h-100"
                                            style={{ height: "100%", objectFit: "cover", borderRadius: "10px" }}
                                        />
                                    </div> */}

                                    <div className="position-relative w-100" style={{ overflow: "hidden", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "240px"}}>
                                        <img src={game.img} alt={game.title} className="w-100 h-100" style={{ objectFit: "cover", width: "100%", height: "100%"}}/>
                                    </div>


                                    {/* Content */}
                                    <div className="card-body text-start p-4">
                                        <h5 className="card-title fw-bold text-primary">{game.title}</h5>
                                        {/* <p className="card-text text-secondary">{game.desc}</p> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
            <section className="container-fluid py-5" style={{ backgroundColor: "#B3EBF2", borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem", marginTop: "-20px" }}>

                <div className="container">
                    <h2 className="text-start text-dark fw-bold mb-5">What Our Users Say</h2>
                    <div className="row g-4">
                        {[
                            { img: "/images/user1.jpeg", name: "Sarah L.", feedback: "PsyGauge improved my problem-solving skills!" },
                            { img: "/images/user2.jpeg", name: "James K.", feedback: "Amazing experience! The games are engaging and insightful." },
                            { img: "/images/user3.jpeg", name: "Emily R.", feedback: "Highly recommend for cognitive development!" }
                        ].map((review, index) => (
                            <div key={index} className="col-12 col-md-4">
                                <div className="testimonial-card shadow-sm p-4 rounded-4 bg-white d-flex align-items-start">
                                    {/* Avatar */}
                                    <img src={review.img} alt={review.name}
                                        className="rounded-circle border border-2 border-primary me-3"
                                        width="60" height="60"
                                    />
                                    {/* Text Content */}
                                    <div>
                                        <p className="text-secondary mb-1">{review.feedback}</p>
                                        <h6 className="fw-bold text-primary mt-2">{review.name}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* FAQ Section */}
            <section className="container-fluid py-5" style={{ backgroundColor: "#B3EBF2", borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem", marginTop: "-20px" }}>

                <div className="container">
                    <h2 className="fw-bold mb-4 text-dark">Frequently Asked Questions</h2>
                    <p className="text-muted">Find answers to common queries about PsyGauge.</p>

                    <div className="accordion" id="faqAccordion">
                        {[
                            { question: "What is PsyGauge?", answer: "PsyGauge is a platform that uses interactive psychometric games to assess cognitive skills." },
                            { question: "Who can use PsyGauge?", answer: "Anyone looking to improve cognitive skills or employers seeking data-driven assessments." },
                            { question: "Is PsyGauge free to use?", answer: "Yes! You can try our games for free without registration." },
                            { question: "How are results calculated?", answer: "Our AI-powered system analyzes your game performance and provides detailed insights." },
                            { question: "Can companies use PsyGauge for hiring?", answer: "Absolutely! PsyGauge helps employers assess candidates beyond traditional resumes." }
                        ].map((faq, index) => (
                            <div className="accordion-item border-0 rounded-3 mb-3 shadow-sm" key={index} style={{ backgroundColor: "#fff" }}>
                                <h2 className="accordion-header">
                                    <button
                                        className={`accordion-button ${openIndex === index ? "" : "collapsed"} fw-bold`}
                                        type="button"
                                        onClick={() => toggleFAQ(index)}
                                        style={{ color: "#333", background: "white" }}
                                    >
                                        {faq.question}
                                    </button>

                                </h2>
                                <div className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}>
                                    <div className="accordion-body text-muted">{faq.answer}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Newsletter Subscription */}
            <section className="container-fluid py-5" style={{ backgroundColor: "#ffffff", borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem", marginTop: "-20px" }}>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="fw-bold text-primary">📩 Stay Updated</h2>
                        <p className="text-muted fs-5">Subscribe to our newsletter for the latest insights and game updates.</p>

                        <form className="row g-2 justify-content-center">
                            <div className="col-12 col-md-7 border border-dark rounded">
                                <input
                                    type="email"
                                    className="form-control rounded p-3 shadow-sm"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="col-12 col-md-auto">
                                <button type="submit" className="btn btn-primary rounded px-4 py-3 fw-bold shadow-sm">
                                    Subscribe 🚀
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>






            {/* Footer */}
            {/* <footer className="text-white text-center py-4"
                    style={{ background: "linear-gradient(135deg,rgb(64, 90, 114),rgb(40, 125, 27))", boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)" }}>
                    <div className="container">
                        <p className="mb-3" style={{ fontSize: "14px", opacity: "0.8" }}>
                            &copy; {new Date().getFullYear()} PsyGauge. All rights reserved.
                        </p>
                        <div>
                            <a href="#" className="text-white mx-2" style={{ transition: "opacity 0.3s" }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = "0.7"}
                                onMouseOut={(e) => e.currentTarget.style.opacity = "1"}>
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/shambhoolal-narwaria/" className="text-white mx-2" style={{ transition: "opacity 0.3s" }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = "0.7"}
                                onMouseOut={(e) => e.currentTarget.style.opacity = "1"}>
                                <FaLinkedin size={20} />
                            </a>
                            <a href="mailto:snarwaria195mb@gmail.com" className="text-white mx-2" style={{ transition: "opacity 0.3s" }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = "0.7"}
                                onMouseOut={(e) => e.currentTarget.style.opacity = "1"}>
                                <FaEnvelope size={20} />
                            </a>
                        </div>
                    </div>
                </footer> */}

        </div>
    );
}

export default Home;
