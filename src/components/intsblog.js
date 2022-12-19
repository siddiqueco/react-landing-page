import React from "react";

const IntsBlog = () => {
  return (
    <div className="content_whin_page">
      <div className="Inst-profile">
        <div className="">
          <h2 className="text_col_whin">
            <strong className="text_highlight">Free</strong> Instagram
            Engagement Rate Calculator
          </h2>
          <h2 className="text_col_high">
            Try our free engagement Rate Calculator to find out the engagement
            of any Instagram account
          </h2>
        </div>
      </div>
      <div className="search_inst_user">
        <div className="search-container">
          <form>
            <input
              type="text"
              className="input_box_search"
              style={{
                width: "640px",
                height: "50px",
                borderRadius: "8px",
                borderWidth: "3px",
                fontSize:'20px'
              }}
              name="search"
              placeholder="search.."
              
            />
        
            
            <button
              type="submit"
              style={{
                height: "52px",
                width: "120px",
                backgroundColor: "rgba(28, 154, 158, 1)",
                borderRadius: "6px",
                borderColor: "rgba(28, 154, 158, 1)",
                color: "white",
                fontSize: "20px",
              }}
            >
              Check
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IntsBlog;
