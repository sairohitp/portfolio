import React from "react";
import RecommendationsCSS from "./Recommendations.module.css";

import HH from "../../assets/recommendations/howardhamlin.jpeg";

const Recommendations = () => {
    return (
        <section id={RecommendationsCSS.parentsection}>
            <div className={RecommendationsCSS.sectionbody}>
                <div id={RecommendationsCSS.sectiontitle}>
                    <span>recommendations</span>
                </div>

                <div id={RecommendationsCSS.recommen}>
                    <div id={RecommendationsCSS.recommenbod}>
                        <div id={RecommendationsCSS.recommenbodProfile}>
                            <div id={RecommendationsCSS.recommenbodIMGholder}>
                                <img src={HH} alt="HH" />
                            </div>

                            <div
                                id={RecommendationsCSS.recommenbodProfileTitles}
                            >
                                <h5>
                                    <b>Mr. Madhu Samala</b>
                                </h5>
                                <h5>Founder, TrainingMug</h5>
                            </div>
                        </div>

                        <div id={RecommendationsCSS.recommenbodRecommen}>
                            <div className={RecommendationsCSS.recommenArrs}>
                                <span class="material-symbols-outlined">
                                    west
                                </span>
                            </div>

                            <div>
                                <p>
                                    Sai Rohit is an incredibly talented designer
                                    who possesses a unique ability to seamlessly
                                    blend creativity with functionality.
                                    [He/She] has a keen eye for aesthetics, a
                                    deep understanding of design principles, and
                                    an innate talent for translating concepts
                                    into visually captivating creations. He
                                    consistently exceeds expectations and
                                    delivers exceptional results.
                                    <br />
                                    <br />
                                    In conclusion, I wholeheartedly recommend
                                    Sai Rohit for any design-related position or
                                    project. His exceptional skills, creativity,
                                    professionalism, and dedication make him an
                                    invaluable asset to any team or
                                    organization. I am confident that he will
                                    continue to excel and make significant
                                    contributions in the field of design.
                                </p>
                            </div>
                            <div className={RecommendationsCSS.recommenArrs}>
                                <span class="material-symbols-outlined">
                                    east
                                </span>
                            </div>
                        </div>

                        <a href="google.com">
                            <div id={RecommendationsCSS.recommenbodSrc}>
                                <h5>
                                    <u>Source</u>
                                </h5>
                                <span class="material-symbols-outlined">
                                    open_in_new
                                </span>
                            </div>
                        </a>
                    </div>

                    <div id={RecommendationsCSS.recommenbodPagiatior}>
                        <h5>01 / 10</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommendations;
