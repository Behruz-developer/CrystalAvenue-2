/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import universal from "../../assets/images/universall2.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div
            className="location_card_left"
            data-aos="fade-right"
            data-aos-offset="-200"
          >
            <img src={universal} alt="" className="location_img" />
          </div>
          <div
            className="location_card1"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
              Turar-joy majmuasi oʻzining qulay joylashuvi bilan ajralib turadi. Shahar markaziga yaqinligi bilan bir qatorda, barcha zarur infratuzilmalar va xizmatlar sizning atrofingizda boʻladi.            </p>
            <p className="location_text">
              Atrofda sizning barcha ehtiyojlaringizni qondirish uchun zarur boʻlgan barcha infratuzilma mavjud. Savdo markazlari, supermarketlar, tibbiyot muassasalari va taʼlim muassasalari — barchasi bir qadamda.            </p>
          </div>
          <div
            className="location_card2"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <p className="location_text2">
              Crystal Avenue shaharning biznes markazlariga yaqin joylashgan. Bu esa
              sizga vaqtni tejash va ish bilan bogʻliq harakatlaringizni yanada qulay
              qilish imkonini beradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
