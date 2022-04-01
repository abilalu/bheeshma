import React from "react";

function Footer() {

  return (
    <footer className="px-4">
      <div className="flex-column container footerWrapper">
        <div className="flex-row space-between footer-row footer-row-top">
          
          <div>
            <form className="flex-column">
                <label htmlFor="mailing-list">
                <h6>
                Sign up for our mailing list
                </h6>
              </label>
              <div>
              <input type="text" id="mailing-list" name="mailing-list" placeholder="Email address"></input>
              <input className="mailing-list-btn" type="submit" value="Sign up"></input>
              </div>
            </form>
          </div>
        </div>

        
        <div className="flex-row footer-row space-between">
          <p>
          This page is owned by HomdeckⓇ
          </p>
          
          </div>
        </div>
    
    </footer>
  );
}

export default Footer;
