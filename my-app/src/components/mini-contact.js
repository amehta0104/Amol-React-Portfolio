import React from "react";
import "../index.css";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebook, faGoogle, faTwitter, faLinkedin, faGithub, faInstagram, faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { Button } from "@mui/material";

function MiniContact() {
  return (
    <Box>
        <div className="mini-contact container">
          <div className="inline-flex"> 
              <h2>Let's Work Together</h2>
              <Button variant="outlined" color="primary" > Contact Me</Button>
         
          
         <ul className="social-bar">
            <li> <FontAwesomeIcon icon={faFacebook} size='2x'/></li>
            <li> <FontAwesomeIcon icon={faTwitter} size='2x'/></li>
            <li> <FontAwesomeIcon icon={faLinkedin} size='2x'/></li>
            <li> <FontAwesomeIcon icon={faGithub} size='2x'/></li>
            <li> <FontAwesomeIcon icon={faInstagram} size='2x'/></li>
            <li> <FontAwesomeIcon icon={faYoutube} size='2x'/></li>
            

                
            </ul>
            </div>
        </div>
    </Box>
  );
}

export default MiniContact;
