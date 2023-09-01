import React from "react";
import ContactCSS from "../../components/contact/ContactCSS.module.css";

const Contact = () => {
    return (
        <section id={ContactCSS.parentsection}>
            <div className={ContactCSS.sectionbody}>
                <div id={ContactCSS.sectiontitle}>
                    <span>contact</span>
                </div>

                <div id={ContactCSS.contactor}>
                    <div>
                        <p>
                            Feel free to get in–touch with me, regarding
                            anything, anytime! <br />
                            (timezone: IST, Kolkata)
                        </p>
                    </div>

                    <div id={ContactCSS.contactBody}>
                        <div className={ContactCSS.contactChildField}>
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className={ContactCSS.contactChildField}>
                            <input type="text" placeholder="Your Email" />
                        </div>
                        <div className={ContactCSS.contactChildField}>
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className={ContactCSS.contactChildFieldMessage}>
                            <input type="text" placeholder="Message" />
                        </div>
                        <div id={ContactCSS.contactSubmitCTAs}>
                            <div className={ContactCSS.contactFieldButt}>
                                <button>
                                    <h6>Reset</h6>
                                <span className="material-symbols-outlined">
                                    refresh
                                </span>
                                </button>
                            </div>
                            <div className={ContactCSS.contactFieldButt}>
                                <button>
                                    <h6>Submit</h6>
                                <span class="material-symbols-outlined">
                                    send
                                </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div></div>

                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
