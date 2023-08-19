import React from "react";
import RecommendationsCSS from "./Recommendations.module.css";

const Recommendations = () => {
    return (
        <section id={RecommendationsCSS.parentsection}>
            <div className={RecommendationsCSS.sectionbody}>
                <div id={RecommendationsCSS.sectiontitle}>
                    <span>Recommendations</span>
                </div>

                <div className={RecommendationsCSS.subsectionbody}>
                    {/* left arrow */}

                    <div></div>

                    {/* main subbody */}

                    <div>
                        <div>
                          <img></img>
                        </div>

                        <div>
                            <h5>
                                <b>Mr. Madhu Samala</b>
                            </h5>
                            <h5>Founder, TrainingMug</h5>
                        </div>

                        <div>
                            <p>
                                Sai Rohit is an incredibly talented designer who
                                possesses a unique ability to seamlessly blend
                                creativity with functionality. [He/She] has a
                                keen eye for aesthetics, a deep understanding of
                                design principles, and an innate talent for
                                translating concepts into visually captivating
                                creations. He consistently exceeds expectations
                                and delivers exceptional results.
                                <br /><br />
                                In conclusion, I wholeheartedly recommend Sai
                                Rohit for any design-related position or
                                project. His exceptional skills, creativity,
                                professionalism, and dedication make him an
                                invaluable asset to any team or organization. I
                                am confident that he will continue to excel and
                                make significant contributions in the field of
                                design.
                            </p>
                        </div>

                        <div>
                            <a>
                                <h5>Source</h5>
                            </a>
                        </div>

                        <div>
                            <h5>01/10</h5>
                        </div>
                    </div>

                    {/* right arrow */}

                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Recommendations;
