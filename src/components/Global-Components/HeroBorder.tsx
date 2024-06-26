import { styles } from "../../styles";

const HeroBorder = () => {
  return (
    <div className={`${styles.flexCenter} md:-mt-20`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3fde77"
          fill-opacity="1"
          d="M0,220L1440,320L1440,320L0,320Z"
        ></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3fde77"
          fill-opacity="1"
          d="M0,320L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default HeroBorder;
