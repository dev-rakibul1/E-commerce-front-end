import { Carousel } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import React from "react";
import "./HeroSlider.css";

const HeroSlider = () => (
  <Carousel autoplay>
    {/* slide 01 */}
    <div className="slide-items">
      <img src="/images/display-watch/watch-1.jpg" alt="" />
      <div className="root-container">
        <article className="hero-article-area">
          <h1>Proper Repairs For Pro...</h1>
          <Paragraph style={{ color: "#fff", fontSize: "17px" }}>
            We are a family-owned and operated full-service jeweler and
            professional watch repair store. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Velit labore reiciendis quidem error
            dignissimos assumenda sit temporibus ad reprehenderit, cum
            voluptatibus aspernatur excepturi! Tempore laborum reprehenderit
            nostrum harum optio sunt.
          </Paragraph>
          <button>View details</button>
        </article>
      </div>
    </div>
    {/* slide 01 */}
    <div className="slide-items">
      <img src="/images/display-watch/watch-2.jpg" alt="" />
      <div className="root-container">
        <article className="hero-article-area">
          <h1>Complete Watch Overhaul</h1>
          <Paragraph style={{ color: "#fff", fontSize: "17px" }}>
            We are a family-owned and operated full-service jeweler and
            professional watch repair store. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Velit labore reiciendis quidem error
            dignissimos assumenda sit temporibus ad reprehenderit, cum
            voluptatibus aspernatur excepturi! Tempore laborum reprehenderit
            nostrum harum optio sunt.
          </Paragraph>
          <button>View details</button>
        </article>
      </div>
    </div>
    {/* slide 02 */}
    <div className="slide-items">
      <img src="/images/display-watch/watch-1.jpg" alt="" />
      <div className="root-container">
        <article className="hero-article-area">
          <h1>Proper Repairs For...</h1>
          <Paragraph style={{ color: "#fff", fontSize: "17px" }}>
            We are a family-owned and operated full-service jeweler and
            professional watch repair store. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Velit labore reiciendis quidem error
            dignissimos assumenda sit temporibus ad reprehenderit, cum
            voluptatibus aspernatur excepturi! Tempore laborum reprehenderit
            nostrum harum optio sunt.
          </Paragraph>
          <button>View details</button>
        </article>
      </div>
    </div>
    {/* slide 03*/}
    <div className="slide-items">
      <img src="/images/display-watch/watch-3.jpg" alt="" />
      <div className="root-container">
        <article className="hero-article-area">
          <h1>Designed for Those Who Eva...</h1>
          <Paragraph style={{ color: "#fff", fontSize: "17px" }}>
            Attention to details is always a good feature. We couldn’t think of
            any better present for our 5th anniversary than a pair of exclusive
            watches from the Lawson collection. Every time I look at my watch I
            think of her and feel she thinks of me.
          </Paragraph>
          <button>View details</button>
        </article>
      </div>
    </div>
    {/* slide 04 */}
    <div className="slide-items">
      <img src="/images/display-watch/watch-4.jpg" alt="" />
      <div className="root-container">
        <article className="hero-article-area">
          <h1>Sapphire Crystal</h1>
          <Paragraph style={{ color: "#fff", fontSize: "17px" }}>
            Known for obtaining a remarkable hardness (nearly as hard as a
            diamond). Has a high scratch resistance which makes it a perfect
            material for wristwatches.
          </Paragraph>
          <button>View details</button>
        </article>
      </div>
    </div>
    {/* slide 05 */}
    <div className="slide-items">
      <img src="/images/display-watch/watch-5.jpg" alt="" />
      <div className="root-container">
        <article className="hero-article-area">
          <h1>Swiss Essence</h1>
          <Paragraph style={{ color: "#fff", fontSize: "17px" }}>
            The first association that comes to one’s mind with the phrase “a
            good wristwatch” is naturally one made somewhere in Switzerland. Do
            you want to know what makes Swiss watches stand out?
          </Paragraph>
          <button>View details</button>
        </article>
      </div>
    </div>
    {/* slide 06 */}
    <div className="slide-items">
      <img src="/images/display-watch/watch-6.jpg" alt="" />
      <div className="root-container">
        <article className="hero-article-area">
          <h1>The Lawson Collection</h1>
          <Paragraph style={{ color: "#fff", fontSize: "17px" }}>
            We are happy to introduce the new Lawson Collection. These are three
            quartz models designed with simplicity and elegance kept in mind.
            They come in different sizes and colors, and all feature a stainless
            steel back — leaving enough space for a personalized engraving. The
            engraving service is complimentary with any watch from the Lawson
            series.
          </Paragraph>
          <button>View details</button>
        </article>
      </div>
    </div>
    {/* slide 07 */}
    <div className="slide-items">
      <img src="/images/display-watch/watch-7.jpg" alt="" />
      <div className="root-container">
        <article className="hero-article-area">
          <h1>Espoir Analog Dial Women’s...</h1>
          <Paragraph style={{ color: "#fff", fontSize: "17px" }}>
            We are a family-owned and operated full-service jeweler and
            professional watch repair store. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Velit labore reiciendis quidem error
            dignissimos assumenda sit temporibus ad reprehenderit, cum
            voluptatibus aspernatur excepturi! Tempore laborum reprehenderit
            nostrum harum optio sunt.
          </Paragraph>
          <button>View details</button>
        </article>
      </div>
    </div>
  </Carousel>
);
export default HeroSlider;
