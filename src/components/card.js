import React from "react";
import GaugeChart from "react-gauge-chart";

const Card = () => {
  const chartStyle = {
    height: 100,
    width: 240,
  };
  return (
    <div className="card_user_whin">
      <div className="main_card_user">
        <div className="card_inst_profile_whin">
          <div className="pic_user_center">
            <img className="" src="/picture.png" alt="" />
          </div>
          <div className="pic_user_center_inst">
            <img
              className=""
              style={{ width: "28px", height: "28px" }}
              src="/instagram.png"
              alt=""
            />
            <h1 className="text_size_profile">mukeshneilnitin</h1>
          </div>
          <div className="follower_like_name">
            <div className="follower">
              <div className="gap_items">
                <img className="" src="/user.jpg" alt="" />
                <span>1.1 M</span>
              </div>
              <div>follower</div>
            </div>

            <div>
              <div className="gap_items">
                <img className="" src="/favorite.png" alt="" />
                <span>1.1M</span>
              </div>
              <div>like</div>
            </div>
            <div>
              <div className="gap_items">
                <img className="" src="/chat.png" alt="" />
                <span>1.1M</span>
              </div>
              <div>comment</div>
            </div>
          </div>
          <div className="meter_cal_engage">
            <h1 style={{ fontSize: "22px" }}>Engagment Rate</h1>
          </div>
          <div className="meter_rate">
            <GaugeChart
              id="gauge-chart5"
              nrOfLevels={4}
              arcsLength={[0.4, 0.4, 0.4, 0.4]}
              colors={["#EA4228", "#fd7e14", "#F5CD19", "#5BE12C"]}
              percent={0.45}
              arcPadding={0}
              arcWidth={0.2}
              animateDuration={20000}
              needleBaseColor="#5BE12C"
              marginInPercent={0.02}
              textColor="#EA4228"
              style={chartStyle}
            />
          </div>
          <hr style={{width:'260px',}}></hr>
          <div style={{paddingTop:'30px' }}>
          <div className="login_page">
          to get full report!
          <div style={{color:"blue" }}>Login</div>
          <img style={{width:'24px',height:'24px'}} src="/undefined.png" alt=""/>
          </div>
          </div>
          
        </div>

        <div className="card_inst_profile_whin">
          <div className="pic_user_center">
            <img className="" src="/picture.png" alt="" />
          </div>
          <div className="pic_user_center_inst">
            <img
              className=""
              style={{ width: "28px", height: "28px" }}
              src="/instagram.png"
              alt=""
            />
            <h1 className="text_size_profile">mukeshneilnitin</h1>
          </div>
          <div className="follower_like_name">
            <div className="follower">
              <div className="gap_items">
                <img className="" src="/user.jpg" alt="" />
                <span>1.1 M</span>
              </div>
              <div>follower</div>
            </div>

            <div>
              <div className="gap_items">
                <img className="" src="/favorite.png" alt="" />
                <span>1.1M</span>
              </div>
              <div>like</div>
            </div>
            <div>
              <div className="gap_items">
                <img className="" src="/chat.png" alt="" />
                <span>1.1M</span>
              </div>
              <div>comment</div>
            </div>
          </div>
          <div className="meter_cal_engage">
            <h1 style={{ fontSize: "22px" }}>Engagment Rate</h1>
          </div>
          <div className="meter_rate">
            <GaugeChart
              id="gauge-chart5"
              nrOfLevels={4}
              arcsLength={[0.4, 0.4, 0.4, 0.4]}
              colors={["#EA4228", "#fd7e14", "#F5CD19", "#5BE12C"]}
              percent={0.80}
              arcPadding={0}
              arcWidth={0.2}
              animateDuration={20000}
              needleBaseColor="#5BE12C"
              marginInPercent={0.02}
              textColor="#EA4228"
              style={chartStyle}
            />
          </div>
          <hr style={{width:'260px',}}></hr>
          <div style={{paddingTop:'30px' }}>
          <div className="login_page">
          to get full report!
          <div style={{color:"blue" }}>Login</div>
          <img style={{width:'24px',height:'24px'}} src="/undefined.png" alt=""/>
          </div>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Card;
