import React, { Component } from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faGithub,
    faLinkedin,
    faDiscord,
} from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { loggedin: true };
    }

    render() {
        return (
            <div className="w-full text-center p-4 pin-b mt-8 mb-8">
                <div>
                    <img
                        className="f-32"
                        src="./banner.png"
                        alt="#100DaysOfCloud Logo"
                    />
                </div>

                <div>
                    <Link to="#" className="ml-10 text-l">
                        Our app
                    </Link>
                    <Link to="#" className="ml-10 text-l">
                        About us
                    </Link>
                    <Link to="#" className="ml-10 text-l">
                        Privacy
                    </Link>
                    <Link to="#" className="ml-10 text-l">
                        Contact us
                    </Link>
                </div>

                <div className="mt-4">
                    <Link to="#" className="ml-10">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            size="2x"
                            color="#00ACEE"
                        />
                    </Link>
                    <Link to="#" className="ml-10 text-m">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </Link>
                    <Link to="#" className="ml-10 text-m">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size="2x"
                            color=" #0077B5"
                        />
                    </Link>
                    <Link to="#" className="ml-10 text-m">
                        <FontAwesomeIcon
                            icon={faDiscord}
                            size="2x"
                            color="#738ADB"
                        />
                    </Link>
                </div>

                <div className="mt-4">
                    Made with ❤️  by the #100DaysOfCloud team
                </div>
            </div>
        );
    }
}
