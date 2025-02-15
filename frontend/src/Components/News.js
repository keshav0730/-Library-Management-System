import React from 'react';
import './News.css';

const News = () => {
    const competitions = [
        { title: "Hackathon 2025", description: "Compete in AI, Web3, and FinTech challenges. Win prizes!" },
        { title: "Code Sprint Challenge", description: "A 24-hour marathon to test your coding speed & accuracy." },
        { title: "UI/UX Design Battle", description: "Design an intuitive interface under time constraints." },
        { title: "Cybersecurity CTF", description: "Showcase ethical hacking skills and secure networks." },
        { title: "Data Science Showdown", description: "Apply ML & data analysis to solve real-world problems." }
    ];

    const quizzes = [
        { title: "DSA & Algorithms Quiz", description: "Sharpen your algorithmic thinking with challenging problems!" },
        { title: "Tech Trivia Quiz", description: "Test your knowledge of programming languages & frameworks!" },
        { title: "AI & ML Knowledge Test", description: "Assess your understanding of neural networks & deep learning!" },
        { title: "Full-Stack Developer Quiz", description: "Evaluate your expertise in frontend, backend, and databases!" },
        { title: "Cybersecurity Awareness Quiz", description: "Identify cyber threats and stay safe online!" }
    ];

    return (
        <div className="news-container">
            <h2 className="news-title">🚀 Updates for You</h2>
            <div className="news-data">
                {/* Competitions Section */}
                <div className="news-section">
                    <h3 className="news-subtitle">🏆 Competitions</h3>
                    <div className="news-events">
                        {competitions.map((comp, index) => (
                            <div className="news-card competition-card" key={index}>
                                <h4>{comp.title}</h4>
                                <p>{comp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Online Quiz Section */}
                <div className="news-section">
                    <h3 className="news-subtitle">📝 Online Quiz</h3>
                    <div className="news-events">
                        {quizzes.map((quiz, index) => (
                            <div className="news-card quiz-card" key={index}>
                                <h4>{quiz.title}</h4>
                                <p>{quiz.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
